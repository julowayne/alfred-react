import React from 'react';
import {Picker} from '@react-native-picker/picker';
import { View, KeyboardAvoidingView, Text, Platform, TouchableWithoutFeedback, Keyboard, Alert , TouchableOpacity } from 'react-native';
import styles from './signup-status.styles';
import {connect} from 'react-redux';
import {setUser } from '../landing/landing.redux'



class SignuStatus extends React.Component{
		constructor(props){
			super(props)
			console.log(this.props.route.params)
			this.state = {
				status: '',
				selected: '',
				status_id: ''
			}
		}

		updateStatus = (status) => {
      this.setState({ status: status })
   }

		checkInputs = () => {
			if(this.state.status_id != 0){
				// this.props.setUser({status_id : this.state.status_id})
				this.props.navigation.navigate('signupEmail', {first_name : this.props.route.params.first_name, last_name: this.props.route.params.last_name, status_id : this.state.status_id});
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
						<View style={styles.pickerCnt}>
							<Picker style={styles.picker}
								selectedValue={this.state.selected}
								onValueChange={(value, index) => this.setState({selected: value, status_id: index})}
								> 
								{/* <Picker.Item label='Je suis un ...' value='0' /> */}
								{this.props.status.map((item, index) => {
										return (<Picker.Item label={item.name} value={item.id} key={index}/>) 
								})}
							</Picker>
						</View>
							<View style={styles.btnContainer}>
								<TouchableOpacity style={styles.nextBtn} onPress={this.checkInputs}>
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


const mapStateToProps = state => {
  return {
    status: state.landing.status,
		user: state.landing.user
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setUser: (user) => dispatch(setUser(user)),
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(SignuStatus)