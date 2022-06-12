import React from 'react';
import {Text, View } from 'react-native';
import styles from './my-profile.styles'
import { Card } from '@rneui/themed';
import { TextInput } from 'react-native-gesture-handler';


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
            <Text style={styles.label}>
              Nom
            </Text>
            <TextInput style={styles.input} type="text" placeholder="Nom"/>
            <Text style={styles.label}>
              Prénom
            </Text>
            <TextInput style={styles.input} type="text" placeholder="Prénom"/>
            <Text style={styles.label}>
              Status
            </Text>
            <TextInput style={styles.input} type="text" placeholder="Status"/>
            <Text style={styles.label}>
              E-mail
            </Text>
            <TextInput style={styles.input} type="email" placeholder="E-mail"/>
            <Text style={styles.label}>
              Mot de passe
            </Text>
            <TextInput style={styles.input} type="password" placeholder="Nom"/>
          </Card>
      </View>
    );
  }
}

export default MyProfile;
