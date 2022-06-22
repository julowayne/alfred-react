import React from 'react';
import {Picker} from '@react-native-picker/picker';
import { View, KeyboardAvoidingView, Text, Platform, TouchableWithoutFeedback, Button, Keyboard, Alert  } from 'react-native';
import styles from './signup-status.styles';


class SignuStatus extends React.Component{
		constructor(props){
			super(props)
			this.state = {
				status: '',
			}
		}

		updateStatus = (status) => {
      this.setState({ status: status })
   }

		checkInputs = () => {
			if(this.state.status != ""){
				this.props.navigation.navigate('signupEmail');
			} else {
				Alert.alert("Vous devez obligatoirement choisir un status pour continuer !");
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
							<Picker selectedValue = {this.state.status} onValueChange={this.updateStatus}>
								<Picker.Item label="Salarié / Fonctionnaire" value="Salarié / Fonctionnaire" />
								<Picker.Item label="Indépendant / Dirigeant" value="Indépendant / Dirigeant" />
								<Picker.Item label="Retraité" value="Retraité" />
								<Picker.Item label="Etudiant" value="Etudiant" />
								<Picker.Item label="Apprentis" value="Apprentis" />
							</Picker>
							<Text style={styles.me}>Je suis un: {this.state.status}</Text>
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

export default SignuStatus;