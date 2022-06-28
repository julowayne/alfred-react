import React from 'react';
import { View, KeyboardAvoidingView, TextInput, Text, Platform, TouchableWithoutFeedback, TouchableOpacity, Keyboard, Alert  } from 'react-native';
import styles from './signup-names.styles';
import {validateEmail} from './signup.helper'
import {connect} from 'react-redux';
import {setUser } from '../../onboarding/landing/landing.redux'


class SignupEmail extends React.Component{
	constructor(props){
		super(props)

		this.state = {
			email: ''
		}
	}

	onChangeEmail = (email) => {
		this.setState({
			email
		})
	}



	checkEmail = () => {
		this.props.navigation.navigate('signupPassword', {first_name : this.props.route.params.first_name, last_name: this.props.route.params.last_name, status_id: this.props.route.params.status_id, email: this.state.email,});
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
								Email
							</Text>
						<TextInput placeholder="youradresse@example.com" style={styles.input}  onChangeText={email => this.onChangeEmail(email)} />
						<View style={styles.btnContainer}>
							<TouchableOpacity style={styles.nextBtn} onPress={this.checkEmail}>
								<Text style={styles.nextText}>Suivant</Text>
							</TouchableOpacity>
						</View>
					</View>
				</View>
				</TouchableWithoutFeedback>
			</KeyboardAvoidingView>
		)
	}
}

const mapDispatchToProps = dispatch => {
  return {
    setLogging: (logging) => dispatch(setLogging(logging)),
    setUser: (user) => dispatch(setUser(user))
  };
};

export default connect(null, mapDispatchToProps)(SignupEmail)