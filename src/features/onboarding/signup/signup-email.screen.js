import React from 'react';
import { View, KeyboardAvoidingView, TextInput, Text, Platform, TouchableWithoutFeedback, Button, Keyboard, Alert  } from 'react-native';
import styles from './signup-names.styles';
import {validateEmail} from './signup.helper'


class SignupEmail extends React.Component{
		constructor(props){
			super(props)
			this.state = {
        email: 'thomas.desessarts-jules@hotmail.com'
			}
		}

		onChangeEmail = (email) => {
			this.setState({
				email
			})
		}



		checkEmail = () => {
      if(validateEmail(this.state.email)){
        console.log("if " + this.state.email);
				this.props.navigation.navigate('signupPassword');
      }else {
        console.log('else');
        console.log(this.state.email);
      }

      // console.log(this.state.email)
			// if(this.state.email === ""){
			// 	Alert.alert("La champ email est obligatoire !"); 
      // } else if (!validateEmail(email)){
			// 	Alert.alert("Le format n'est pas le bon!");
      // }else {
			// 	this.props.navigation.navigate('signupStatus');
			// }
		}

    render(){
        return (
					<KeyboardAvoidingView
					behavior={Platform.OS === "ios" ? "padding" : "height"}
					style={styles.container}
				>
					<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
						<View style={styles.inner}>
							<Text style={styles.header}>Inscription</Text>
							<TextInput placeholder="youradresse@example.com" style={styles.emailInput}  onChangeText={email => this.onChangeEmail(email)} />
							<View style={styles.btnContainer}>
								<Button title="Suivant" onPress={this.checkEmail} />
							</View>
						</View>
					</TouchableWithoutFeedback>
				</KeyboardAvoidingView>
        )
    }
}

export default SignupEmail;