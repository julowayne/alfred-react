import React from 'react';
import {Text, View } from 'react-native';
import styles from './my-profile.styles'
import { Card } from '@rneui/themed';


class MyProfile extends React.Component {
  constructor(props){
    super(props)
  }

  render(){
    return (
      <View style={styles.container}>
          <Text style={styles.title}>
            Mes informations
          </Text>
          <Card containerStyle={{ marginTop: 15, borderRadius: 10 }}>  
            <Text>
              Mes infos
            </Text>
          </Card>
      </View>
    );
  }
}

export default MyProfile;
