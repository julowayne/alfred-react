import React from 'react';
import { KeyboardAvoidingView,TouchableWithoutFeedback, Keyboard , View, TouchableOpacity, Text } from 'react-native';
import HeaderNavigation from '../headerNavigation/headerNavigation.screen';
import MyFile from './components/my-file.screen';
import MyProfile from './components/my-profile.screen';
import AddFiles from './components/add-files.screen';
import styles from './profil.styles';
import {connect} from 'react-redux';
import {setLogging, setUser } from '../onboarding/landing/landing.redux';


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
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={styles.container}
        >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View>
            <HeaderNavigation headerTitle="Mon profil"  navigation={this.props.navigation}/>
            <MyFile navigation={this.props.navigation}/>
            <MyProfile navigation={this.props.navigation}/>
            <View style={styles.logout}>
              <TouchableOpacity style={styles.logoutButton} onPress={this.logout}>
                <Text style={styles.logoutText}>Me déconnecter</Text>
              </TouchableOpacity>
            </View>
          </View>
        </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
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

export default connect(mapStateToProps, mapDispatchToProps)(Profil)

