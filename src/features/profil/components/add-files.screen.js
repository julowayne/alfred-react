import React from 'react';
import { Text, View, Image, TouchableOpacity, Modal, Button} from 'react-native';
import styles from './add-files.styles'
import ImagePicker from 'react-native-image-crop-picker';
import {connect} from 'react-redux';
import {Picker} from '@react-native-picker/picker';
import { showMessage, hideMessage } from "react-native-flash-message";

import DocumentPicker, {
  DirectoryPickerResponse,
  DocumentPickerResponse,
  isInProgress,
  types,
} from 'react-native-document-picker'

import addFilesServices from './add-files.services'


const api = addFilesServices.create();


class AddFiles extends React.Component {
  constructor(props){
    super(props)
    console.log(props.fields)
    this.state = {
      source: [
        'camera',
        'gallery'
      ],
      result: null,
      modalVisible: false,
      selected: '',
      selectedId: '',
      fieldIdVal: ''
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


  uploadFilesToDB = async (file, fieldId) => {
    console.log(file)
    console.log(fieldId)

    if(fieldId != 0) this.state.fieldIdVal = fieldId
    
    const response = await api.uploadFiles(file, this.state.fieldIdVal)
    console.log('response:', JSON.stringify(response))
    this.setModalVisible(false);
    if(response.status === 200) {
      showMessage({
        message: "Votre fichier a bien été ajouté",
        type: "success",
        duration: 3000,
        icon: "success",
      });
    } else {
      showMessage({
        message: "Il y a eu un problème lors du téléchargement",
        type: "danger",
        duration: 3000,
        icon: "danger",
      });
    }
  }

  
  setModalVisible = (visible) => {
    this.setState({ modalVisible: visible });
  }

  importFile = async (source) => {
    if(source === 'camera'){
      console.log('camera')
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
          <TouchableOpacity onPress={() => this.importFile(this.state.source[1])}  style={styles.addFile}>
            <Image source={require("../../../assets/add.png")} style={styles.image} />
            <Text style={styles.add}>Ajouter</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity onPress={() => this.importFile(this.state.source[0])} style={styles.addFile}>
            <Image source={require("../../../assets/camera.png")} style={styles.image} />
              <View style={styles.container}>
                <View style={{ flex: 0, flexDirection: 'row', justifyContent: 'center' }}>
                  <Text style={styles.add}> Prendre une photo </Text>
                </View>
            </View>
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
                <Text style={styles.yourFile}><Image style={styles.pdf} source={require('../../../assets/pdf.png')}/>{ this.state.result ? this.state.result.name : '' }</Text>
                <View style={styles.allNotif}>
                  <View style={styles.pickerCnt}>
                    <Picker style={styles.picker}
                      selectedValue={this.state.selected}
                      onValueChange={(value, index) => this.setState({selected: value, selectedId: index + 1})}
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
    fields: state.landing.fields
  }
}
const mapDispatchToProps = dispatch => {
  return {
    setLogging: (loggin) => dispatch(setLogging(loggin)),
    setFields: (fields) => dispatch(setFields(fields))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddFiles)

