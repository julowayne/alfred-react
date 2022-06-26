import React from 'react';
import { View, FlatList, Image, TouchableOpacity, Text, Alert } from 'react-native';
import styles from './files.styles'
import { ListItem, Avatar, Card } from '@rneui/themed';
import AddFiles from '../add-files.screen';
import getFilesServices from './files.services'
import addFilesServices from '../../../accueil/home.services'
import {connect} from 'react-redux';
import { setFiles } from '../../../onboarding/landing/landing.redux'
import  {Modalize}  from 'react-native-modalize';
import { showMessage } from "react-native-flash-message";



const api = getFilesServices.create();
const api2 = addFilesServices.create();


class Files extends React.Component {
  constructor(props){
    super(props)
    this.myRef = React.createRef();
    console.log(props.files)
    this.state = {
      selectedFile : ''
    }
  }

  onOpen = () => {
    this.myRef.current?.open();
  };

  onClose = () => {
    this.myRef.current?.close();
  }

  alertBeforeDelete = () => {
    Alert.alert(
      "Are your sure?",
      "Are you sure you want to remove this beautiful box?",
      [
        {
          text: "No",
        },
        {
          text: "Yes",
          onPress: () => {
            this.deleteFile()
          },
        }
      ]
    );
  }

  deleteFile = async () => {
    const response = await api.deleteFile(this.state.selectedFile)
    console.log('response:', JSON.stringify(response.data))
    if(response.status === 204) {
      showMessage({
        message: "Votre fichier a bien été supprimé !",
        type: "success",
        duration: 3000,
        icon: "success",
      });
      this.updateFileList()
    } else {
      showMessage({
        message: "Il y a eu un problème lors de la suppression",
        type: "danger",
        duration: 3000,
        icon: "danger",
      });
    }
  }

  updateFileList = async () => {
    const response = await api2.getFiles()
    this.props.setFiles(response.data.data)
  }

keyExtractor = (item, index) => index.toString()


renderItem = ({ item }) => (
  <Card containerStyle={{ marginTop: 15, borderRadius: 6, elevation: 2 }}>  
    <TouchableOpacity style={styles.file} >
    <ListItem>
      <Avatar source={require('../../../../assets/pdf.png')} />
      <ListItem.Content>
        <ListItem.Title>{item.field.name}</ListItem.Title>
      </ListItem.Content>
      <TouchableOpacity onPress={() => {
        this.setState({selectedFile: item.id }),
        this.onOpen()
      }}>
        <Image source={require('../../../../assets/dots.png')}/>
      </TouchableOpacity>
    </ListItem>
    </TouchableOpacity>
  </Card>
)

  render(){
    if (this.props.files.length > 0) {
      return (
        <View style={styles.container}>
          <AddFiles navigation={this.props.navigation}/>
          <FlatList
            nestedScrollEnabled 
            keyExtractor={this.keyExtractor}
            data={this.props.files}
            renderItem={this.renderItem}
          />
           <Modalize ref={this.myRef} modalHeight={200}>
            <View style={styles.actions}>
              <TouchableOpacity style={styles.delete} onPress={this.alertBeforeDelete}>
                <Image style={styles.actionImg} source={require('../../../../assets/delete-white.png')}/>
                <Text style={styles.deleteText}>Supprimer</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.replace}>
                <Image style={styles.actionImg} source={require('../../../../assets/replace-white.png')}/>
                <Text style={styles.deleteText}>Remplacer</Text>
              </TouchableOpacity>
            </View>
           </Modalize>
        </View>
      );
    } else {
      return (
        <View style={styles.container}>
          <AddFiles navigation={this.props.navigation}/>
          <View>
            <Card containerStyle={styles.messageCard}>
              <Text style={styles.emptyMessage1}>
                Toujours pas de fichier dans votre dossier 😱 ? {"\n"}
                Commencez dès maintenant en allant les rechercher directement <Text style={styles.getFileFromDirectory}>dans votre téléphone 📁</Text>
              </Text>
              <Text style={styles.emptyMessage2}>
                Ou <Text style={styles.getFileFromCamera}>prenez les en photo 📷</Text> qui seront transformés en pdf
              </Text>
            </Card>
          </View>
        </View>
      );
    }
  }
}


const mapStateToProps = state => {
  return {
    files: state.landing.files
  }
}
const mapDispatchToProps = dispatch => {
  return {
    setFiles: (files) => dispatch(setFiles(files))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Files)

