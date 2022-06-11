import React from 'react';
import { Text, View, TouchableOpacity, Image, Modal } from 'react-native';
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

  render(){
    const { modalVisible } = this.state;
    return (
      <View style={styles.header}>
        <View style={styles.content}>
          <TouchableOpacity
              style={styles.button}
              onPress={this.onPress}
            >
            <View style={styles.navigation}>
              <Image source={require('../../assets/accueil3.png')}/>
              <Text style={styles.navText}>Test</Text>
            </View>
          </TouchableOpacity>
          <View style={styles.centeredView}>
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
          </View>
          <TouchableOpacity onPress={() => this.setModalVisible(!modalVisible)}>
            <Image source={require('../../assets/notification.png')}/>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default HeaderNavigation;
