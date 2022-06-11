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
          name: 'Mise à jour du status',
          avatar_url: require('../../assets/alfred_splash2.png'),
          content: "Votre dossier pour la location X a été refusé"
        },
        {
          name: 'Mise à jour du status',
          avatar_url: require('../../assets/alfred_splash2.png'),
          content: "Votre agent vous informe qu'il manque des fichiers pour votre dossier"
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
      <Card containerStyle={styles.cardCnt}>  
        <FlatList
          keyExtractor={this.keyExtractor}
          data={this.state.list}
          renderItem={this.renderItem}
        />
      </Card>
    );
  }
}

export default Notification;