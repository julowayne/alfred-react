import React from 'react';
import { View, KeyboardAvoidingView, TextInput, Text, Platform, TouchableWithoutFeedback, Button, Keyboard, Alert  } from 'react-native';
import styles from './signup-names.styles';
import {validatePassword} from './signup.helper'
import {connect} from 'react-redux';
import {setLogging } from '../../onboarding/landing/landing.redux'




class SignupPassword extends React.Component{
		constructor(props){
			super(props)
			this.state = {
        password: ''
			}
		}

		componentDidMount(){
			this.props.setLogging(true)
		}

		onChangePassword = (password) => {
			this.setState({
				password
			})
		}

		checkPassword = () => {
			this.props.navigation.navigate('appNavigator');
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


const mapStateToProps = state => {
  return {
    // openedFirst : state.landing.openedFirst
  }
}
const mapDispatchToProps = dispatch => {
  return {
    setLogging: (logging) => dispatch(setLogging(logging))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignupPassword)

