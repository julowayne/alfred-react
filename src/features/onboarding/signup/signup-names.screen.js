import React from 'react';
import { View, KeyboardAvoidingView, TextInput, Text, Platform, TouchableWithoutFeedback, Button, Keyboard, Alert  } from 'react-native';
import styles from './signup-names.styles';
import {connect} from 'react-redux';
import {setOpenFirst, setUser } from '../landing/landing.redux'

class SignupNames extends React.Component{
		constructor(props){
			super(props)
			this.state = {
				first_name: "",
				last_name: "",
			}
		}

		componentDidMount(){
			this.props.setOpenFirst(true)
		}

		onChangeFirstname = (first_name) => {
			this.setState({
				first_name
			})
		}

		onChangeLastname = (last_name) => {
			this.setState({
				last_name
			})
		}

		checkInputs = () => {
			if(this.state.first_name != "" || this.state.last_name != ""){
				this.props.navigation.navigate('signupStatus', {first_name : this.state.first_name, last_name: this.state.last_name});
			} else {
				Alert.alert("Les 2 champs doivent être remplis !");
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
							Prénom
            	</Text>
							<TextInput placeholder="Jules" style={styles.input}  onChangeText={firstname => this.onChangeFirstname(firstname)} />
							<Text style={styles.label}>
								Nom
							</Text>
							<TextInput placeholder="Thomas Desessarts" style={styles.input} onChangeText={lastname => this.onChangeLastname(lastname)} />
							<View style={styles.btnContainer}>
								<Button title="Suivant" onPress={this.checkInputs} />
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
    setOpenFirst: (openedFirst) => dispatch(setOpenFirst(openedFirst)),
    setUser: (user) => dispatch(setUser(user)),
  };
};

export default connect(null, mapDispatchToProps)(SignupNames)
