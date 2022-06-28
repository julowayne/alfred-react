import React from 'react';
import { View, FlatList, Image, TouchableOpacity, Text, Alert } from 'react-native';
import styles from './files.styles'
import { ListItem, Avatar, Card } from '@rneui/themed';
import AddFiles from '../add-files.screen';
import getFilesServices from './files.services'
import addFilesServices from '../../../accueil/home.services'
import {connect} from 'react-redux';
import { setFiles, setGuarantorFiles, setAddFileLoading, setNotifications } from '../../../onboarding/landing/landing.redux'
import  {Modalize}  from 'react-native-modalize';
import { showMessage } from "react-native-flash-message";
import Lottieview from 'lottie-react-native';



const api = getFilesServices.create();
const api2 = addFilesServices.create();


class Files extends React.Component {
  constructor(props){
    super(props)
    console.log(props)
    this.myRef = React.createRef();
    this.state = {
      selectedFile : '',
      loading: false
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
      "Etes-vous sur de vouloir supprimer ce fichier ?",
      "Toute suppression est définitive",
      [
        {
          text: "Non",
        },
        {
          text: "Oui",
          onPress: () => {
            this.deleteFile()
          },
        }
      ]
    );
  }

  deleteFile = async () => {
    const response = await api.deleteFile(this.props.user.token, this.state.selectedFile)
    console.log(response)
    if(response.status === 204) {
      setTimeout(() => {
        showMessage({
          message: "Votre fichier a bien été supprimé !",
          type: "success",
          duration: 3000,
          icon: "success",
        });
      }, 2200)
      this.updateFileList()
    } else {
      setTimeout(() => {
        showMessage({
          message: "Il y a eu un problème lors de la suppression",
          type: "danger",
          duration: 3000,
          icon: "danger",
        });
      }, 2200)
    }
  }

  updateFileList = async () => {

    this.props.setAddFileLoading(true)
    if(this.props.route.params.guarantorFiles){
      const response = await api2.getGuarantorFiles(this.props.user.token)
      this.props.setGuarantorFiles(response.data.data)
      this.onClose()
    } else {
      const response = await api2.getFiles(this.props.user.token)
      this.props.setFiles(response.data.data)      
      this.onClose()
    }

    setTimeout(() => {
      console.log('timeout')
      this.props.setAddFileLoading(false)
    }, 2000)
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
  let guarantorFiles = this.props.route.params.guarantorFiles
  if (this.props.files) {
    return (
      <View style={styles.container}>
        { guarantorFiles ? <AddFiles guarantorBool={true} navigation={this.props.navigation} /> : <AddFiles guarantorBool={false}  navigation={this.props.navigation}/> }
        { !this.props.addFileLoading ? <FlatList
                              nestedScrollEnabled 
                              keyExtractor={this.keyExtractor}
                              data={this.props.files}
                              renderItem={this.renderItem}
                            />  : <Lottieview
                                    source={require('../../../../assets/animations/loader2.json')}
                                    style={{ flex: 1}}
                                    autoPlay
                                    loop
                                  />}
          <Modalize ref={this.myRef} modalHeight={200} handleStyle={styles.modalStyle}>
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
        { guarantorFiles ? <AddFiles guarantorBool={true} navigation={this.props.navigation} /> : <AddFiles guarantorBool={false}  navigation={this.props.navigation}/> }
        <View>
          <Card containerStyle={styles.messageCard}>
            <Text style={styles.emptyMessage1}>
              Ajoutes ton premier fichier a l'aide des actions au dessus !
            </Text>
          </Card>
        </View>
      </View>
    );
  }
}
}


const mapStateToProps = (state, onProps) => {
  return {
    files: onProps.route.params.guarantorFiles ? state.landing.guarantorFiles : state.landing.files,
    user: state.landing.user,
    addFileLoading: state.landing.addFileLoading
  }
}
const mapDispatchToProps = dispatch => {
  return {
    setFiles: (files) => dispatch(setFiles(files)),
    setGuarantorFiles: (files) => dispatch(setGuarantorFiles(files)),
    setAddFileLoading: (addFileLoading) => dispatch(setAddFileLoading(addFileLoading)),
    setNotifications: (notifications) => dispatch(setNotifications(notifications)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Files)

