import React from 'react';
import { View, KeyboardAvoidingView, TextInput, Text, Platform, TouchableWithoutFeedback, Button, Keyboard, Alert,TouchableOpacity   } from 'react-native';
import styles from './signup-password.styles';
import {validatePassword} from './signup.helper'
import {connect} from 'react-redux';
import signupServices from '../signup/signup.services';
import {setLogging, setUser, setOpenFirst } from '../../onboarding/landing/landing.redux'



const api = signupServices.create();
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
			const user = {first_name : this.props.route.params.first_name, last_name: this.props.route.params.last_name, status_id: this.props.route.params.status_id, email: this.props.route.params.email, password: this.state.password}
			this.registerUser(user)
		}

		registerUser = async (user) => {
			const response = await api.register(user)
			if (response.status === 201){
				this.props.setUser(response.data)
				this.props.setLogging(true)
				this.props.setOpenFirst(true)
				this.props.navigation.navigate('appNavigator');
			}
		}

    render(){
			return (
				<KeyboardAvoidingView
					behavior={Platform.OS === "ios" ? "padding" : "height"}
					style={styles.container}
				>
				<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
				<View>
					<View style={styles.headerCtn}>
						<Text style={styles.header}>Inscription</Text>
					</View>
					<View style={styles.inner}>
						<Text style={styles.label}>
							Mot de passe
						</Text>
						<TextInput type="password" placeholder="Mot de passe" secureTextEntry={true} style={styles.input}  onChangeText={password => this.onChangePassword(password)} />
						<View style={styles.btnContainer}>
							<TouchableOpacity style={styles.nextBtn} onPress={this.checkPassword}>
								<Text style={styles.nextText}>M'inscrire</Text>
							</TouchableOpacity>
						</View>
					</View>
				</View>
				</TouchableWithoutFeedback>
			</KeyboardAvoidingView>
			)
    }
}


const mapStateToProps = state => {
  return {
    user: state.landing.user
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setLogging: (logging) => dispatch(setLogging(logging)),
    setOpenFirst: (openedFirst) => dispatch(setOpenFirst(openedFirst)),
		setUser: (user) => dispatch(setUser(user))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignupPassword)

