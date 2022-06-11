import React from 'react';
import { View, KeyboardAvoidingView, TextInput, Text, Platform, TouchableWithoutFeedback, Button, Keyboard  } from 'react-native';
import styles from './signin.styles';


class SignIn extends React.Component{
		constructor(props){
			super(props)
		}

    goToHome = () => {
      this.props.navigation.navigate('home');
    }

    render(){
        return (
					<KeyboardAvoidingView
						behavior={Platform.OS === "ios" ? "padding" : "height"}
						style={styles.container}
				  >
					<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
						<View style={styles.main}>
							<Text style={styles.header}>Inscription</Text>
							<TextInput type="password" placeholder="Mot de passe" style={styles.emailInput}  />
							<View style={styles.btnContainer}>
								<Button title="test" onPress={this.goToHome} />
							</View>
						</View>
					</TouchableWithoutFeedback>
				</KeyboardAvoidingView>
			)
    }
}

export default SignIn;