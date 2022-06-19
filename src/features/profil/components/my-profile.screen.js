import React from 'react';
import {View, Button } from 'react-native';
import styles from './my-profile.styles'
import {connect} from 'react-redux';
import {setLogging, setUser } from '../../onboarding/landing/landing.redux';




class MyProfile extends React.Component {
  constructor(props){
    super(props)
    console.log(props)
  }

  logout = () => {
    this.props.setLogging(false)
    this.props.setUser({})
    this.props.navigation.navigate('authNavigator')
  }

  render(){
    return (
      <View style={styles.container}>
        <Button onPress={this.logout} title="Mon profil"/>
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

