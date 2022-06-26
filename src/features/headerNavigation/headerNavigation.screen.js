import React from 'react';
import { Text, View, TouchableOpacity, Image, Modal } from 'react-native';
import styles from './headerNavigation.styles'

class HeaderNavigation extends React.Component {
  constructor(props){
    super(props)
  }

  openNotification = () => {
    this.props.navigation.navigate('Notifications')

  }

  render(){
    return (
      <View style={{ overflow: 'hidden' }}>
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
          <TouchableOpacity onPress={this.openNotification}>
            <Image source={require('../../assets/notification.png')}/>
            {/* <Notification navigation={this.props.navigation}/> */}
            {/* <Badge status="error" value="10" containerStyle={{ position: 'absolute', top: -4, right: -4 }} badgeStyle={{borderWidth: 0}} /> */}
          </TouchableOpacity>
        </View>
      </View>
      </View>
    );
  }
}

export default HeaderNavigation;
