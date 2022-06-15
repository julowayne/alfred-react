import React from 'react';
import { Text, View, TouchableOpacity, Button } from 'react-native';
import HeaderNavigation from '../headerNavigation/headerNavigation.screen';
import styles from './home.styles'
import {connect} from 'react-redux';
import {setLogging } from '../onboarding/landing/landing.redux'




class Home extends React.Component {
  constructor(props){
    super(props)
    console.log('home logging : ' + props.logging)
    if(props.logging === true){
      props.navigation.navigate('appNavigator')
    } else {
      props.navigation.navigate('authNavigator')
    }
  }

  logout = () => {
    this.props.setLogging(false)
    this.props.navigation.navigate('authNavigator')
  }

  render(){
    return (
      <View>
        <HeaderNavigation/>
        <Text style={styles.main}>
          Home
          <TouchableOpacity onPress={() => this.setModalVisible(!modalVisible)}>
            <Button title="deconnection" onPress={this.logout}/>
          </TouchableOpacity>
        </Text>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    logging: state.landing.logging
  }
}
const mapDispatchToProps = dispatch => {
  return {
    setLogging: (loggin) => dispatch(setLogging(loggin))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home)
