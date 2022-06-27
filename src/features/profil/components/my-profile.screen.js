import React from 'react';
import {View, TouchableOpacity, Text, TextInput } from 'react-native';
import styles from './my-profile.styles'
import {connect} from 'react-redux';
import {setLogging, setUser } from '../../onboarding/landing/landing.redux';




class MyProfile extends React.Component {
  constructor(props){
    super(props)
  }

  profilSettings = () => {
    // Profil page
    this.props.navigation.navigate('Mettre à jour mon profil')
  }

  render(){
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.profilButton} onPress={this.profilSettings}>
          <Text style={styles.profilText}>Mon profil</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    logging: state.landing.logging,
    user: state.landing.user
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setLogging: (loggin) => dispatch(setLogging(loggin)),
    setUser: (user) => dispatch(setUser(user))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MyProfile)

