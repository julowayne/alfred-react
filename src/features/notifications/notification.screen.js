import React from "react";
import { Text, View, FlatList } from "react-native";
import styles from './notification.styles'
import { ListItem, Avatar, Card } from '@rneui/themed';

class Notification extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      list :[
        {
          name: 'Mise à jour',
          avatar_url: require('../../assets/alfred32.png'),
          content: "Votre dossier pour la location X a été refusé"
        },
        {
          name: 'Mise à jour',
          avatar_url: require('../../assets/alfred32.png'),
          content: "Votre agent vous informe qu'il manque des fichiers pour votre dossier pour le logement Y"
        },
        {
          name: 'Mise à jour',
          avatar_url: require('../../assets/alfred32.png'),
          content: "Votre dossier pour la l'appartement 234 est en cours de traitement"
        },
      ],
    }
  }

  
keyExtractor = (item, index) => index.toString()

renderItem = ({ item }) => (
  <ListItem bottomDivider>
    <Avatar source={item.avatar_url} />
    <ListItem.Content>
      <ListItem.Title style={styles.title}>{item.name}</ListItem.Title>
      <ListItem.Subtitle>{item.content}</ListItem.Subtitle>
    </ListItem.Content>
  </ListItem>
)

  render(){
    return (
      <View>
        <FlatList
          nestedScrollEnabled 
          keyExtractor={this.keyExtractor}
          data={this.state.list}
          renderItem={this.renderItem}
        />
      </View>
    );
  }
}

export default Notification;