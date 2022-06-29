import React from 'react';
import { Text, View, TouchableOpacity, Image, Modal, TouchableWithoutFeedback, Animated } from 'react-native';
import styles from './headerNavigation.styles'
import Lottie from 'lottie-react-native';
import {connect} from 'react-redux';

class HeaderNavigation extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      progress: new Animated.Value(0),
    }
  }

  openNotification = () => {
    Animated.timing(this.state.progress, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
    this.props.navigation.navigate('Notifications')

  }

  render(){
    return (
      <View>
      <View style={styles.header}>
        <View style={styles.content}>
          <TouchableOpacity
              style={styles.button}
              onPress={this.onPress}
            >
            <View style={styles.navigation}>
              <Text style={styles.navText}>{this.props.headerTitle}</Text>
            </View>
          </TouchableOpacity>
          <TouchableWithoutFeedback onPress={this.openNotification}>
          <View style={styles.lottie}>
            {/* <Lottie
              source={require('../../assets/animations/notification.json')}
              progress={this.state.progress}
            /> */}
            <Image style={{width:20, height:20}} source={require('./../../assets/notification.png')} />
          </View>
          </TouchableWithoutFeedback>
          {/* <Badge status="error" value="10" containerStyle={{ position: 'absolute', top: -4, right: -4 }} badgeStyle={{borderWidth: 0}} /> */}
        </View>
      </View>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    logging: state.landing.logging,
    user: state.landing.user,
    files: state.landing.files,
    guarantor: state.landing.guarantor,
    btnLoader: state.landing.btnLoader
  }
}


export default connect(mapStateToProps, null)(HeaderNavigation)

