import React from 'react';
import {
  Text,
  View
} from 'react-native';
import HeaderNavigation from '../headerNavigation/headerNavigation.screen';
import styles from './home.styles'


class Home extends React.Component {
  constructor(props){
    super(props)
  }

  render(){
    return (
      <View>
        <HeaderNavigation/>
        <Text style={styles.main}>
          Home
        </Text>
      </View>
    );
  }
}

export default Home;
