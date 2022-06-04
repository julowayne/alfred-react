import React from 'react';
import {
  Text,
  View,
  ScrollView
} from 'react-native';
import * as Progress from 'react-native-progress';
import { Card, Button, Icon } from '@rneui/themed';
import HeaderNavigation from '../headerNavigation/headerNavigation.screen';
import styles from './applies.styles'


class Applies extends React.Component {
  constructor(props){
    super(props)
  }

  render(){
    return (
      <ScrollView>
        <HeaderNavigation/>
        <View style={styles.container}>
          <Card containerStyle={{ marginTop: 15, borderRadius: 10 }}>
            <Card.Title style={styles.title}>Dossier 1</Card.Title>
            <Card.Divider />
            <View style={styles.cardPart}>
              <Text style={styles.entitled} h1>
                Agence : 
              </Text>
              <Text style={styles.value} h1>
                Century 21
              </Text>
            </View>
            <View style={styles.cardPart}>
              <Text style={styles.entitled} h1>
                Dossier : 
              </Text>
              <Text style={styles.value} h1>
                Complet
              </Text>
            </View>
            <Progress.Bar style={styles.progressBar} progress={1}  width={200} height={15} />
            <View style={styles.cardPart}>
              <Text style={styles.entitled} h1>
                Status : 
              </Text>
              <Text style={styles.value} h1>
                En attente de traitement
              </Text>
            </View>
          </Card>
          <Card containerStyle={{ marginTop: 15, borderRadius: 10 }}>
            <Card.Title style={styles.title}>Dossier 1</Card.Title>
            <Card.Divider />
            <View style={styles.cardPart}>
              <Text style={styles.entitled} h1>
                Agence : 
              </Text>
              <Text style={styles.value} h1>
                Century 21
              </Text>
            </View>
            <View style={styles.cardPart}>
              <Text style={styles.entitled} h1>
                Dossier : 
              </Text>
              <Text style={styles.value} h1>
                Complet
              </Text>
            </View>
            <Progress.Bar style={styles.progressBar} progress={0.7}  width={200} height={15} />
            <View style={styles.cardPart}>
              <Text style={styles.entitled} h1>
                Status : 
              </Text>
              <Text style={styles.value} h1>
                Vous devez compler votre dossier.
              </Text>
            </View>
          </Card>
          <Card containerStyle={{ marginTop: 15, borderRadius: 10 }}>
            <Card.Title style={styles.title}>Dossier 2</Card.Title>
            <Card.Divider />
            <View style={styles.cardPart}>
              <Text style={styles.entitled} h1>
                Agence : 
              </Text>
              <Text style={styles.value} h1>
                Seloger
              </Text>
            </View>
            <View style={styles.cardPart}>
              <Text style={styles.entitled} h1>
                Dossier : 
              </Text>
              <Text style={styles.value} h1>
                Incomplet
              </Text>
            </View>
            <Progress.Bar style={styles.progressBar} progress={0.3}  width={200} height={15} />
            <View style={styles.cardPart}>
              <Text style={styles.entitled} h1>
                Status : 
              </Text>
              <Text style={styles.value} h1>
                Vous devez compler votre dossier.
              </Text>
            </View>
          </Card>
        </View>
      </ScrollView>
    );
  }
}

export default Applies;
