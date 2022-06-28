import React from 'react';
import { View, KeyboardAvoidingView, TextInput, Platform, TouchableWithoutFeedback, TouchableOpacity, Keyboard, Text, Image, Alert  } from 'react-native';
import styles from './signin.styles';
import {connect} from 'react-redux';
import {setLogging, setUser, setBtnLoader } from '../landing/landing.redux';
import signinServices from './signin.services';
import Lottieview from 'lottie-react-native';



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
			if(this.state.user.email && this.state.user.password ) {
				const response = await api.logging(this.state.user.email, this.state.user.password)
				this.props.setUser(response.data)
				setTimeout(() => {				
					this.goToHome()		
					this.props.setBtnLoader(false)
				}, 1000);
			} else {
				Alert.alert('Vous devez remplir les 2 champs pour vous connecter')
				this.props.setBtnLoader(false)
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
							<TouchableOpacity style={styles.profilButton} onPress={() => { this.props.setBtnLoader(true), this.loggin()}} >
							{ !this.props.btnLoader ? <Text style={styles.profilText}>Me connecter</Text> : 
								<Lottieview
									source={require('../../../assets/animations/submit-btn.json')}
									style={{ flex: 1}}
									autoPlay
									loop
								/>
								}
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
    logging: state.landing.logging,
		btnLoader: state.landing.btnLoader
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setLogging: (loggin) => dispatch(setLogging(loggin)),
    setUser: (user) => dispatch(setUser(user)),
    setBtnLoader: (btnLoader) => dispatch(setBtnLoader(btnLoader)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignIn)