import React from 'react';
import { View, KeyboardAvoidingView, TextInput, Platform, TouchableWithoutFeedback, TouchableOpacity, Keyboard, Text  } from 'react-native';
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

			console.log('signin logging : ' + props.logging)
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
			console.log('logging  ' + this.state.user.email + '   ' + this.state.user.password);
			const response = await api.logging(this.state.user.email, this.state.user.password)
			console.log('response:', JSON.stringify(response))
			this.goToHome()		
		}

    render(){
        return (
					<KeyboardAvoidingView
						behavior={Platform.OS === "ios" ? "padding" : "height"}
						style={styles.container}
				  >
					<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
						<View style={styles.main}>
							<View>
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
							{/* <View style={styles.btnContainer}>
								<Button title="Me connecter" onPress={this.loggin} />
							</View> */}
							<TouchableOpacity style={styles.profilButton} onPress={this.profilSettings}>
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