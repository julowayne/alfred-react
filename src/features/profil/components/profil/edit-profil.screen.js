import React from 'react';
import { KeyboardAvoidingView,TouchableWithoutFeedback, Keyboard , View, TouchableOpacity, Text, TextInput, ScrollView } from 'react-native';
import BouncyCheckbox from "react-native-bouncy-checkbox";
import styles from './edit-profil.styles';
import {connect} from 'react-redux';
import {setLogging, setUser } from '../../../onboarding/landing/landing.redux';


class EditProfil extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      guarantorChecked : false 
    }
  }

  guarantorValue = () => {
    if(this.state.guarantorChecked === true){
      this.setState({ guarantorChecked: false, tempo: 120})
      console.log('dans le if : ' + this.state.guarantorChecked)
    }else {
      this.setState({ guarantorChecked: true, tempo: 120})
      console.log('dans le else : ' + this.state.guarantorChecked)
    }
  }



  render(){
    return (
      <KeyboardAvoidingView
        // behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        // behavior="padding"
        style={styles.container}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <ScrollView style={styles.main}>
            <Text style={styles.label}>Nom</Text>
            <TextInput placeholder="Thomas Desessarts" style={styles.input} />
            <Text style={styles.label}>Prénom</Text>
            <TextInput placeholder="Jules" style={styles.input} />
            <Text style={styles.label}>Email</Text>
            <TextInput placeholder="jules@gmail.com" style={styles.input} />
            <Text style={styles.label}>Status</Text>
            <TextInput placeholder="Etudiant" style={styles.input} />
            <Text style={styles.label}>Mot de passe</Text>
            <TextInput placeholder="Jules" style={styles.input} />
            <View style={styles.guarantor}>
              <BouncyCheckbox
                disableText={true}
                size={25}
                fillColor="#007bff"
                unfillColor="#FFFFFF"
                isChecked={this.state.guarantorChecked}
                onPress={() => this.guarantorValue()}
                iconStyle={styles.checkbox}
              />
              <Text style={styles.guarantorLabel}>
                Garant               
              </Text>
            </View>
            <TouchableOpacity style={styles.profilButton} onPress={this.loggin} >
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
    user: state.landing.user
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setLogging: (loggin) => dispatch(setLogging(loggin)),
    setUser: (user) => dispatch(setUser(user))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditProfil)

