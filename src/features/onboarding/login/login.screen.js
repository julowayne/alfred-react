import React from 'react';
import {
	Image
} from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';
import styles from './login.styles';

import { InputLogin } from './components/input-login';

import {validateEmail} from './login.helper'

class Login extends React.Component{
		constructor(props){
			super(props)
			this.state = {
				email: 'thomas.desessarts-jules@hotmail.com',
				firstname: 'Jules',
				lastname: 'Thomas Desessarts',
				status: '',
				password: 'Azerty',
				canGo: true
			}
		}

		inscriptionCompleted = async () => {
			await AsyncStorage.setItem('inscriptionDone', JSON.stringify({
				inscriptionDone: true
			}));
			console.log('Onboarding fx')
	
			this.props.navigation.navigate('login');
		}

    render(){
        return (
					<Onboarding
						nextLabel="Suivant"
						bottomBarHighlight={false}
						onDone={this.inscriptionCompleted}
						onSkip={this.inscriptionCompleted}
						pages={[
							{
								backgroundColor: '#e9ecef',
								image: <Image style={styles.logo} source={require('../../../assets/logo.png')} />,
								title: <InputLogin
												titre="Nom :"
												type="text"
												value={this.state.lastname}
												placeholder="Thomas Desessarts"
											/>,
								subtitle: <InputLogin
												titre="Prénom :"
												type="text"
												value={this.state.firstname}
											/>,
							},
							{
								backgroundColor: '#e9ecef',
								image: <Image style={styles.logo} source={require('../../../assets/logo.png')} />,
								title: <InputLogin
												titre="Status :"
												type="email"
												onChangeText={newValue => this.onChangeEmail(newValue)}
												value={this.state.status}
											/>,
								subtitle: "",
							},
							{
								backgroundColor: '#e9ecef',
								image: <Image style={styles.logo} source={require('../../../assets/logo.png')} />,
								title: <InputLogin
												titre="Email :"
												type="email"
												onChangeText={newValue => this.onChangeEmail(newValue)}
												value={this.state.email}
											/>,
								subtitle: "",
							},
							{
								backgroundColor: '#e9ecef',
								image: <Image style={styles.logo} source={require('../../../assets/logo.png')} />,
								title: <InputLogin
												titre="Mot de passe"
												type="password"
												onChangeText={(password) => this.onChangePassword(password)}
												value={this.state.password}
											/>,
								subtitle: "",
							},
						]}
					/>
        )
    }
}

export default Login;