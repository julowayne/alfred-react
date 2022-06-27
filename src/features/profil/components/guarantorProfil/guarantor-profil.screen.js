import React from 'react';
import { KeyboardAvoidingView,TouchableWithoutFeedback, Keyboard , View, TouchableOpacity, Text, TextInput, ScrollView } from 'react-native';
import styles from './guarantor-profil.styles';
import {connect} from 'react-redux';
import {setLogging, setUser } from '../../../onboarding/landing/landing.redux';
import {Picker} from '@react-native-picker/picker';
import { showMessage } from "react-native-flash-message";
import editProfilServices from './guarantor-profil.serviceservices';


const api = editProfilServices.create()


class EditGuarantorProfil extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      guarantorChecked : false,
      first_name: this.props.user.first_name,
      last_name: this.props.user.last_name,
      email: this.props.user.email,
      password: this.props.user.password,
      status_id: this.props.user.status_id,
    }
  }

  updateUSer = async () => {
    let updateProfil = {}
    if(this.state.first_name != this.props.user.first_name){
      updateProfil.first_name = this.state.first_name
    }
    if (this.state.last_name != this.props.user.last_name){
      updateProfil.last_name = this.state.last_name
    }
    if (this.state.email != this.props.user.email){
      updateProfil.email = this.state.email
    }
    if (this.state.password != this.props.user.password){
      updateProfil.password = this.state.password
    }
    if (this.state.status_id != this.props.user.status_id){
      updateProfil.status_id = this.state.status_id
    }

    let response = await api.updateGuarantor(this.props.user.token, updateProfil, this.props.user.id)


    if(response.status === 200) {
      response.data.data.token = this.props.user.token
      this.props.setUser(response.data.data)
      showMessage({
        message: "Votre profil a bien été mis à jour",
        type: "success",
        duration: 3000,
        icon: "success",
      });
    } else {
      showMessage({
        message: "Il y a eu un problème lors du de la mise à jour de votre profil",
        type: "danger",
        duration: 3000,
        icon: "danger",
      });
    }
  }

  render(){
    return (
      <KeyboardAvoidingView
        style={styles.container}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <ScrollView style={styles.main}>
            <Text style={styles.label}>Nom</Text>
            <TextInput placeholder="Thomas Desessarts" style={styles.input} defaultValue={this.props.user.last_name} onChangeText={(last_name) => this.setState({last_name : last_name})} />
            <Text style={styles.label}>Prénom</Text>
            <TextInput placeholder="Jules" style={styles.input} defaultValue={this.props.user.first_name}  onChangeText={(first_name) => this.setState({first_name : first_name})} />
            {/* <Text style={styles.label}>Email</Text>
            <TextInput placeholder="jules@gmail.com" style={styles.input} defaultValue={this.props.user.email}   onChangeText={(email) => this.setState({email : email})}/>
            <Text style={styles.label}>Status</Text>
            <Picker style={styles.picker}
              selectedValue={(this.props.user.status_id || 0)}
              onValueChange={(value, index) => this.setState({selected: value, status_id: index})}
              > 
              {this.props.status.map((item, index) => {
                  return (<Picker.Item label={item.name} value={item.id} key={index}/>) 
              })}
            </Picker> */}
            <TouchableOpacity style={styles.profilButton} onPress={this.updateUSer} >
              <Text style={styles.profilText}>Enregistrer</Text>
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
    status: state.landing.status
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setLogging: (loggin) => dispatch(setLogging(loggin)),
    setUser: (user) => dispatch(setUser(user))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditGuarantorProfil)

