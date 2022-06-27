import React from 'react';
import { View, KeyboardAvoidingView, TextInput, Platform, TouchableWithoutFeedback, TouchableOpacity, Keyboard, Text, Image  } from 'react-native';
import styles from './signin.styles';
import {connect} from 'react-redux';
import {setLogging, setUser } from '../landing/landing.redux';
import signinServices from './signin.services';


const api = signinServices.create();


class SignIn extends React.Component{
		constructor(props){
			super(props)
			this.state = {
				user: {
					email: '',
					password: ''
				}
			}
			if(props.logging === true){
				props.navigation.navigate('appNavigator')
			}
		}

    goToHome = () => {
			this.props.setLogging(true)
			this.props.navigation.navigate('appNavigator')
    }

		onChangeEmail = (email) => {
			this.setState({
				user: {email, password : this.state.user.password}
			})
		}
		onChangePassword = (password) => {
			this.setState({
				user: {email: this.state.user.email, password}
			})
		}

		loggin = async () => {
			const response = await api.logging(this.state.user.email, this.state.user.password)
			this.props.setUser(response.data)
			this.goToHome()		
		}

    render(){
        return (
					<KeyboardAvoidingView
						behavior={Platform.OS === "ios" ? "padding" : "height"}
						style={styles.container}
				  >
					<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
						<View>
						<View style={styles.logoCnt}>
							<Image style={styles.logo} source={require('../../../assets/logo.png')} />
						</View>
							<View style={styles.main}>
							<TextInput type="email" 
								onChangeText={newValue => this.onChangeEmail(newValue)}
								value={this.state.user.email} 
								placeholder="Email"
								style={styles.input} 
							/>
							<TextInput type="password"
								onChangeText={newValue => this.onChangePassword(newValue)}
								value={this.state.user.password} 
								placeholder="Mot de passe"
								secureTextEntry={true}
								style={styles.input}  
							/>
							<TouchableOpacity style={styles.profilButton} onPress={this.loggin} >
								<Text style={styles.profilText}>Me connecter</Text>
							</TouchableOpacity>
						</View>
					</View>
					</TouchableWithoutFeedback>
				</KeyboardAvoidingView>
			)
    }
}
const mapStateToProps = state => {
  return {
    logging: state.landing.logging
  }
}
const mapDispatchToProps = dispatch => {
  return {
    setLogging: (loggin) => dispatch(setLogging(loggin)),
    setUser: (user) => dispatch(setUser(user))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignIn)