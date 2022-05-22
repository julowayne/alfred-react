import React from 'react';
import { View, KeyboardAvoidingView, TextInput, Text, Platform, TouchableWithoutFeedback, Button, Keyboard, Alert  } from 'react-native';
import styles from './signup-names.styles';
import {validatePassword} from './signup.helper'


class SignupPassword extends React.Component{
		constructor(props){
			super(props)
			this.state = {
        password: ''
			}
		}

		onChangePassword = (password) => {
			this.setState({
				password
			})
		}



		checkPassword = () => {
      if(validatePassword(this.state.password)){
        console.log("if " + this.state.password);
				this.props.navigation.navigate('signupStatus');
      }else {
        console.log('else');
        console.log(this.state.password);
      }
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
							<TextInput type="password" placeholder="Mot de passe" secureTextEntry={true} style={styles.emailInput}  onChangeText={password => this.onChangePassword(password)} />
							<View style={styles.btnContainer}>
								<Button title="Suivant" onPress={this.checkPassword} />
							</View>
						</View>
					</TouchableWithoutFeedback>
				</KeyboardAvoidingView>
        )
    }
}

export default SignupPassword;