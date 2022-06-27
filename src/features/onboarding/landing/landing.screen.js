import React from 'react';
import Onboarding from 'react-native-onboarding-swiper';
import { Image } from 'react-native';
import styles from './landing.styles'
// import AsyncStorage from '@react-native-async-storage/async-storage';
import { AsyncStorage } from '@aws-amplify/core';
import {connect} from 'react-redux';
import {setStatus } from '../../onboarding/landing/landing.redux'

import statusServices from './landing.services'

const api = statusServices.create()


class Landing extends React.Component {
  constructor(props){
    super(props)
    if(props.openedFirst === true){
      props.navigation.navigate('appNavigator')
    }
  }

  async componentDidMount(){
    const response = await api.getStatus()
    this.props.setStatus(response.data.data)
  }


  onBoardingCompleted = async () => {

    this.props.navigation.navigate('signupNames');
  }

  render(){
    return (
      <Onboarding
        nextLabel="Suivant"
        bottomBarHighlight={false}
        onDone={this.onBoardingCompleted}
        onSkip={this.onBoardingCompleted}
        pages={[
          {
            backgroundColor: '#e9ecef',
            image: <Image style={styles.logo} source={require('../../../assets/logo.png')} />,
            title: 'Alfred, comment ça marche ?',
            subtitle: "C'est simple, vous retrouvez vos demandes dans votre espace avec leur statut actuel !",
          },
          {
            backgroundColor: '#e9ecef',
            image: <Image style={styles.logo}  source={require('../../../assets/logo.png')} />,
            title: 'Espace personnel',
            subtitle: 'Mise à jour des informations personnelles ou des fichiers constituant votre dossier.',
          },
          {
            backgroundColor: '#e9ecef',
            image: <Image style={styles.logo}  source={require('../../../assets/logo.png')} />,
            title: 'Fonctionnalités',
            subtitle: "Soyez prévenu a tout moment lors d'un changement grâce aux notifications !",
          },
          {
            backgroundColor: '#e9ecef',
            image: <Image style={styles.logo}  source={require('../../../assets/logo.png')} />,
            title: 'Premiers pas',
            subtitle: "Commencez dès maintenant en vous inscrivant !",
          },
        ]}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    openedFirst: state.landing.openedFirst,
  }
}
const mapDispatchToProps = dispatch => {
  return {
    setStatus: (status) => dispatch(setStatus(status))
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(Landing)
