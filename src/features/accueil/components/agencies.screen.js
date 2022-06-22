import React from 'react';
import { Text, View, FlatList, SafeAreaView } from 'react-native';
import { Card } from '@rneui/themed';
import styles from './agencies.styles'





class Agencies extends React.Component {
  constructor(props){
    super(props)
  }
  

  render(){
    return (
      <View style={styles.container}>
        <Text style={styles.test}>Ne loupes aucune des dernières annonces</Text>
        <View>
        <Card containerStyle={styles.agency}>
          <Text>
            Logo + Nom Agence 1 + lien vers les annonces
          </Text>
        </Card>
        <Card containerStyle={styles.agency}>
          <Text>
          Logo + Nom Agence 2 + lien vers les annonces
          </Text>
        </Card>
        <Card containerStyle={styles.agency}>
          <Text>
          Logo + Nom Agence 3 + lien vers les annonces
          </Text>
        </Card>
        </View>
      </View>
    );
  }
}


export default Agencies;
