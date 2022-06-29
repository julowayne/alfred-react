import React, {Linking} from 'react';
import { Text, View, Image, SafeAreaView } from 'react-native';
import { Card } from '@rneui/themed';
import styles from './agencies.styles'





class Agencies extends React.Component {
  constructor(props){
    super(props)
  }
  

  render(){
    return (
      <View style={styles.container}>
        <View>
        <Card containerStyle={styles.agencyCard}>
          <View style={styles.agency}>
            <View>
              <View>
                <Image style={{width: 60, height: 60}} source={require('../../../assets/sl_icon_100x100.png')}/>
              </View>
            </View>
            <View>
              <Text style={styles.agencyName} onPress={() => Linking.openURL('https://www.seloger.com/location.htm#?BD=Head_LO_1')}>Se Loger</Text>
              <Text style={styles.news}>5 nouvelles annonces selon vos critères de recherche</Text>
            </View>
          </View>
        </Card>
        <Card containerStyle={styles.agencyCard}>
          <View style={styles.agency}>
            <View>
              <View>
                <Image style={{width: 60, height: 60}} source={require('../../../assets/sp.png')}/>
              </View>
            </View>
            <View>
              <Text style={styles.agencyName} onPress={() => Linking.openURL('https://www.logic-immo.com/location-immobilier.php')}>Stéphane Plaza</Text>
              <Text style={styles.news}>3 nouvelles annonces selon vos critères de recherche</Text>
            </View>
          </View>
        </Card>
        <Card containerStyle={styles.agencyCard}>
          <View style={styles.agency}>
            <View>
              <View>
                <Image style={{width: 60, height: 25, marginTop: 20}} source={require('../../../assets/orpi.jpg')}/>
              </View>
            </View>
            <View>
              <Text style={styles.agencyName} onPress={() => Linking.openURL('https://www.orpi.com/location-immobiliere-paris/louer-appartement/')}>Orpi</Text>
              <Text style={styles.news}>3 nouvelles annonces selon vos critères de recherche</Text>
            </View>
          </View>
        </Card>
        </View>
      </View>
    );
  }
}


export default Agencies;
