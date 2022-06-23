import React from 'react';
import { Text, View, TouchableOpacity, Image, Modal } from 'react-native';
import { Avatar, Badge, Icon, withBadge } from 'react-native-elements'
import Notification from '../notifications/notification.screen';
import styles from './headerNavigation.styles'

class HeaderNavigation extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      modalVisible: false
    };
  }

  setModalVisible = (visible) => {
    this.setState({ modalVisible: visible });
  }
  openNotification = () => {
    // this.props.navigation.navigate('Notification')
    this.props.navigation.navigate('Notifications')

  }

  render(){
    const { modalVisible } = this.state;
    return (
      <View style={{ overflow: 'hidden', paddingBottom: 5 }}>
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
          {/* <View style={styles.centeredView}>
            <Modal
              animationType="fade"
              transparent={true}
              visible={modalVisible}
              onRequestClose={() => {
                this.setModalVisible(!modalVisible);
              }}
            >
              <View style={styles.centeredView}>
                <View style={styles.modalView}>
                <View style={styles.notifTitle}>
                  <Text style={styles.modalTitle}>Notifications</Text>
                  <TouchableOpacity onPress={() => this.setModalVisible(!modalVisible)}>
                    <Image source={require('../../assets/close.png')}/>
                  </TouchableOpacity>
                </View>
                  <View style={styles.allNotif}>
                      <Notification/>
                  </View>
                </View>
              </View>
            </Modal>
          </View> */}
          {/* <TouchableOpacity onPress={() => this.setModalVisible(!modalVisible)}> */}
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
