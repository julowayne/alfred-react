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
      selectedId: ''
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
    
    const response = await api.uploadFiles(file, fieldId)
    console.log('response:', JSON.stringify(response))
    this.setModalVisible(false);
    if(response.status === 200) {
      showMessage({
        message: "Votre fichié a bien été ajouté",
        type: "success",
        duration: 3000,
        icon: "success",
      });
    } else if(response.status === 422){
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
                  <Text style={styles.modalTitle}>Choisis ton fichier </Text>
                  <TouchableOpacity onPress={() => this.setModalVisible(!modalVisible)}>
                    <Image source={require('../../../assets/close.png')}/>
                  </TouchableOpacity>
                </View>
                  <View style={styles.allNotif}>
                  <Text>Ton Fichier: { this.state.result ? this.state.result.name : '' }</Text>
                    <Picker style={styles.picker}
                      selectedValue={this.state.selected}
                      onValueChange={(value, index) => this.setState({selected: value, selectedId: index})}
                      > 
                      {this.props.fields.map((item, index) => {
                          return (<Picker.Item label={item.name} value={item.id} key={index}/>) 
                      })}
                    </Picker>
                    <TouchableOpacity style={styles.upload} onPress={() => {this.uploadFilesToDB(this.state.result)}}>
                        <Text style={styles.uploadText}>Envoyer</Text>
                    </TouchableOpacity>
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

