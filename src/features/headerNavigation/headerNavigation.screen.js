import React from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Image
} from 'react-native';
import styles from './headerNavigation.styles'


class HeaderNavigation extends React.Component {
  constructor(props){
    super(props)
  }

  render(){
    return (
      <View style={styles.header}>
        <View style={styles.content}>
          <TouchableOpacity
              style={styles.button}
              onPress={this.onPress}
            >
              <Text style={styles.navText}>Test</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={require('../../assets/notification.png')}/>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default HeaderNavigation;
