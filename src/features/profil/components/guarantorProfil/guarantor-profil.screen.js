import React from 'react';
import { KeyboardAvoidingView,TouchableWithoutFeedback, Keyboard , View, TouchableOpacity, Text, TextInput, ScrollView, Alert } from 'react-native';
import styles from './guarantor-profil.styles';
import {connect} from 'react-redux';
import {setLogging, setUser, setGuarantor } from '../../../onboarding/landing/landing.redux';
import { showMessage } from "react-native-flash-message";
import editProfilServices from './guarantor-profil.services';


const api = editProfilServices.create()


class EditGuarantorProfil extends React.Component {
  constructor(props){
    super(props)
    console.log(props.user.id)
    this.state = {
      first_name: this.props.user.first_name,
      last_name: this.props.user.last_name,
    }
  }

  updateGuarantor = async () => {
    let updateGuarantor = {}

    if((this.state.first_name || this.state.last_name) === ""){
      Alert.alert('Les champs ne peuvent pas être vide')
    }
    if(this.state.first_name != this.props.guarantor.first_name){
      updateGuarantor.first_name = this.state.first_name
    }
    if (this.state.last_name != this.props.guarantor.last_name){
      updateGuarantor.last_name = this.state.last_name
    }

    let response = await api.updateGuarantor(this.props.user.token, updateGuarantor, this.props.guarantor.id)

    if(response.status === 200) {
      console.log(response)
      this.props.setGuarantor(response.data.data)
      showMessage({
        message: "Votre garant a bien été mis à jour",
        type: "success",
        duration: 3000,
        icon: "success",
      });
    } else {
      console.log(response)
      showMessage({
        message: "Il y a eu un problème lors du de la mise à jour de votre garant",
        type: "danger",
        duration: 3000,
        icon: "danger",
      });
    }
  }

  createGuarantor = async () => {
    let createGuarantor = {
      user_id: this.props.user.id,
      first_name: this.state.first_name,
      last_name: this.state.last_name,
    }
    let response = await api.createGuarantor(this.props.user.token, createGuarantor, this.props.user.id)

    if(response.status === 200) {
      console.log(response.data)
      this.props.setGuarantor(response.data.data)
      showMessage({
        message: "Votre garant a bien été ajouté",
        type: "success",
        duration: 3000,
        icon: "success",
      });
    } else {
      console.log(response)
      showMessage({
        message: "Il y a eu un problème lors de l'ajout de votre garant",
        type: "danger",
        duration: 3000,
        icon: "danger",
      });
    }
  }

  render(){
    const guarantor = this.props.guarantor.first_name;
    let button;
    if(guarantor != ""){
      button = <TouchableOpacity style={styles.profilButton} onPress={this.updateGuarantor} >
                  <Text style={styles.profilText}>Enregistrer</Text>
                </TouchableOpacity>
    } else {
      button = <TouchableOpacity style={styles.profilButton} onPress={this.createGuarantor} >
                <Text style={styles.profilText}>Ajouter</Text>
              </TouchableOpacity>
    }
    return (
      <KeyboardAvoidingView
        style={styles.container}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <ScrollView style={styles.main}>
            <Text style={styles.label}>Nom</Text>
            <TextInput placeholder="Thomas Desessarts" style={styles.input} defaultValue={this.props.guarantor.last_name} onChangeText={(last_name) => this.setState({last_name : last_name})} />
            <Text style={styles.label}>Prénom</Text>
            <TextInput placeholder="Jules" style={styles.input} defaultValue={this.props.guarantor.first_name}  onChangeText={(first_name) => this.setState({first_name : first_name})} />
            {/* {button} */}
            <TouchableOpacity style={styles.profilButton} onPress={this.createGuarantor} >
                <Text style={styles.profilText}>Ajouter</Text>
              </TouchableOpacity>
          </ScrollView>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    );
  }
}

const mapStateToProps = state => {
  return {
    logging: state.landing.logging,
    user: state.landing.user,
    status: state.landing.status,
    guarantor: state.landing.guarantor
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setLogging: (loggin) => dispatch(setLogging(loggin)),
    setUser: (user) => dispatch(setUser(user)),
    setGuarantor: (guarantor) => dispatch(setGuarantor(guarantor)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditGuarantorProfil)

