import React from 'react';
import {
  Text,
  View,
  ScrollView,
  Button
} from 'react-native';
import { Card, Icon, Badge } from '@rneui/themed';
import HeaderNavigation from '../headerNavigation/headerNavigation.screen';
import styles from './applies.styles'
import { TouchableOpacity } from 'react-native-gesture-handler';


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
            <Card.Image source={require('../../assets/lynn-vdbr-9KSoHS5_xiM-unsplash.jpg')}/>
            <View style={styles.cardBadge}>
              {/* Faire redescendre bgcolor & text de la DB */}
              <View style={[styles.badge,{ backgroundColor: 'green'}]}>
                <Text style={styles.badgeText}>Accepté</Text>
              </View>
            </View> 
            <View style={styles.description}>
                <View style={styles.cardPart}>
                  <Text style={styles.location}>
                  <Icon  name="location-sharp" type="ionicon"/> Houilles
                  </Text>
                </View>
                <View>
                  <Text style={styles.value}>
                    Appartement meublé
                  </Text>
                  <Text style={styles.value}>
                    3 pièces 2 chambres 40m²
                  </Text>
                </View>
            </View> 
            <View style={styles.cardPart}>
            <Icon name="pricetag" type="ionicon"/>
              <Text style={styles.iconsValues}>
                900 € 
              </Text>
            </View>
            <View style={styles.cardPart}>
              <Card containerStyle={{ marginTop: 15, borderRadius: 10, flex: 1 }}>
                <View style={styles.agencyCnt}>
                  <View>
                    <Icon size={50} name="md-home" type="ionicon"/>
                  </View>
                  <View style={styles.agency}>
                    <Text style={styles.agencyName}>
                      Century 21
                    </Text>
                    <Text>
                      Contacter mon agent
                    </Text>
                  </View>
                </View>
                <Button style={styles.redirection} title="Revoir l'annonce"/>
              </Card>
            </View>                  
          </Card>
        </View>
      </ScrollView>
    );
  }
}

export default Applies;
