import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import HeaderNavigation from '../headerNavigation/headerNavigation.screen';
import MyFile from './components/my-file.screen';
import MyProfile from './components/my-profile.screen';
import styles from './profil.styles';
import {connect} from 'react-redux';
import {setLogging, setUser } from '../onboarding/landing/landing.redux';
import MyGuarantor from './components/guarantor/guarantor.screen';


class Profil extends React.Component {
  constructor(props){
    super(props)
  }

  logout = () => {
    this.props.setLogging(false)
    this.props.setUser({})
    this.props.navigation.navigate('authNavigator')
  }

  render(){
    return (
      <View style={styles.main}>
        <HeaderNavigation headerTitle="Mon profil"  navigation={this.props.navigation}/>
        <MyFile guarantor={true} navigation={this.props.navigation}/>
        <MyGuarantor navigation={this.props.navigation}/>
        <MyProfile navigation={this.props.navigation}/>
        <View style={styles.logout}>
          <TouchableOpacity style={styles.logoutButton} onPress={this.logout}>
            <Text style={styles.logoutText}>Me déconnecter</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    logging: state.landing.logging,
    user: state.landing.user,
    files: state.landing.files
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setLogging: (loggin) => dispatch(setLogging(loggin)),
    setUser: (user) => dispatch(setUser(user))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Profil)

