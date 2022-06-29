import React from 'react';
import { Text, View, Image, TouchableOpacity, Modal} from 'react-native';
import styles from './add-files.styles'
import ImagePicker from 'react-native-image-crop-picker';
import {connect} from 'react-redux';
import {Picker} from '@react-native-picker/picker';
import { showMessage } from "react-native-flash-message";
import DocumentPicker, { isInProgress, types } from 'react-native-document-picker'

import addFilesServices from './add-files.services'
import updateFileServices from '../../accueil/home.services'
import {setLogging, setFields, setFiles, setGuarantorFiles, setAddFileLoading, setNotifications } from '../../onboarding/landing/landing.redux'




const api = addFilesServices.create();
const api2 = updateFileServices.create();


class AddFiles extends React.Component {
  constructor(props){
    super(props)
    console.log(props)
    this.state = {
      source: [
        'camera',
        'gallery'
      ],
      result: null,
      modalVisible: false,
      selected: '',
      selectedId: '',
      fieldIdVal: '',
      loading: false
    }
  }

  handleError = (err) => {
    if (DocumentPicker.isCancel(err)) {
      console.warn('cancelled')
    } else if (isInProgress(err)) {
      console.warn('multiple pickers were opened, only the last will be considered')
    } else {
      throw err
    }
  }

  uploadFilesToDB =  async (file, fieldId) => {
    console.log(file)
    console.log(fieldId)
    console.log(this.props.guarantorBool)

    if(fieldId != 0) this.state.fieldIdVal = fieldId

    if(this.props.guarantorBool) {
      console.log('adding guarantor file')
      const response = await api.uploadFiles(this.props.user.token, file, this.state.fieldIdVal, this.props.guarantor.id)
      console.log('response:', JSON.stringify(response.data))
      console.log('response:', JSON.stringify(response.status))
      this.showMessage(response)

    } else {

      const response = await api.uploadFiles(this.props.user.token, file, this.state.fieldIdVal, null)
      console.log('response:', JSON.stringify(response.data))
      console.log('response:', JSON.stringify(response.status))
      this.showMessage(response)

    }
    this.setModalVisible(false);
  }
  
  
    showMessage = (response) => {
      console.log(response)
      if(response.status === 200) {
        setTimeout(() => {
          showMessage({
            message: "Votre fichier a bien été ajouté !",
            type: "success",
            duration: 3000,
            icon: "success",
          });
        }, 2200)
        this.updateFileList()
        let notification = {type: "Modification du dossier", message: "Votre fichier a bien été ajouté"}
        this.props.setNotifications(notification)
      } else {
        setTimeout(() => {
          showMessage({
            message: "Il y a eu un problème lors du téléchargement de votre fichier",
            type: "danger",
            duration: 3000,
            icon: "danger",
          });
        }, 2200)
      }
    }

  updateFileList = async () => {

    this.props.setAddFileLoading(true)

    if(this.props.guarantorBool) {
      const response = await api2.getGuarantorFiles(this.props.user.token)
      console.log(response)
      this.props.setGuarantorFiles(response.data.data)
    } else {
      const response = await api2.getFiles(this.props.user.token)
      this.props.setFiles(response.data.data)
    }

    setTimeout(() => {
      this.props.setAddFileLoading(false)
    }, 2000)
  }

  setModalVisible = (visible) => {
    this.setState({ modalVisible: visible });
  }

  importFile = async (source) => {
    if(source === 'camera'){
      ImagePicker.openCamera({
        width: 300,
        height: 400,
        cropping: true,
      }).then(image => {
        console.log(image);
      });
    } else {
      DocumentPicker.pickSingle({presentationStyle: 'fullScreen', type: types.pdf}).then(this.props.result).then(file => {
        this.state.result = file
        this.setModalVisible(true);
      }).catch(this.handleError)
    }
  }

  
  
  render(){
    const { modalVisible } = this.state;
    return (
      <View style={styles.fonctions}>
        <View>
          <TouchableOpacity onPress={() => this.importFile(this.state.source[1])}  style={styles.addButton}>
            <Text style={styles.add}>Ajouter un fichier</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.centeredView}>
          <Modal
            animationType="fade"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              this.setModalVisible(!modalVisible);
            }}
          >
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
              <View style={styles.notifTitle}>
                <TouchableOpacity onPress={() => this.setModalVisible(!modalVisible)}>
                  <Image source={require('../../../assets/close.png')}/>
                </TouchableOpacity>
              </View>
                <View style={styles.fileContainer}>
                  <Image style={styles.pdf} source={require('../../../assets/pdf.png')}/>
                  <Text style={styles.yourFile}>{ this.state.result ? this.state.result.name : '' }</Text>
                </View>
                <View style={styles.allNotif}>
                  <View style={styles.pickerCnt}>
                    <Picker style={styles.picker}
                      selectedValue={this.state.selected}
                      onValueChange={(value, index) => this.setState({selected: value, selectedId: index })}
                      > 
                      <Picker.Item label='Choisis un type de fichier' value='0' />
                      {this.props.fields.map((item, index) => {
                          return (<Picker.Item label={item.name} value={item.id} key={index}/>) 
                      })}
                    </Picker>
                  </View>
                  <View style={styles.uploadCnt}>
                    <TouchableOpacity style={styles.upload} onPress={() => {this.uploadFilesToDB(this.state.result, this.state.selectedId)}}>
                        <Text style={styles.uploadText}>Télécharger</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>
          </Modal>
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    fields: state.landing.fields,
    user: state.landing.user,
    guarantor: state.landing.guarantor,
    guarantorFiles : state.landing.guarantorFiles,
    addFileLoading: state.landing.addFileLoading
  }
}
const mapDispatchToProps = dispatch => {
  return {
    setLogging: (loggin) => dispatch(setLogging(loggin)),
    setFields: (fields) => dispatch(setFields(fields)),
    setFiles: (files) => dispatch(setFiles(files)),
    setGuarantorFiles: (files) => dispatch(setGuarantorFiles(files)),
    setAddFileLoading: (addFileLoading) => dispatch(setAddFileLoading(addFileLoading)),
    setNotifications: (notifications) => dispatch(setNotifications(notifications)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddFiles)

