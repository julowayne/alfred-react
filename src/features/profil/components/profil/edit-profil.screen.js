import React from 'react';
import { KeyboardAvoidingView,TouchableWithoutFeedback, Keyboard , View, TouchableOpacity, Text, TextInput } from 'react-native';
import styles from './edit-profil.styles';
import {connect} from 'react-redux';
import {setLogging, setUser } from '../../../onboarding/landing/landing.redux';


class EditProfil extends React.Component {
  constructor(props){
    super(props)
  }



  render(){
    return (
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={styles.container}
        >
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.container}>
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
              <Text style={styles.label}>Garant</Text>
              <Text>(Note :Garant géré avec les des buttons radios)</Text>
            </View>
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

