import React from 'react';
import { Text, View, FlatList } from 'react-native';
import styles from './my-file.styles'
import { ListItem, Avatar, Card } from '@rneui/themed';


class MyFile extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      list :[
        {
          name: 'piece-identité.pdf',
          avatar_url: require('../../../assets/pdf.png'),
          subtitle: 'Vice President'
        },
        {
          name: 'avis-imposition.pdf',
          avatar_url: require('../../../assets/pdf.png'),
          subtitle: 'Vice Chairman'
        },
      ],
      list2 :[
        {
          name: 'piece-identité.pdf',
          avatar_url: require('../../../assets/pdf.png'),
          subtitle: 'Vice President'
        },
        {
          name: 'avis-imposition.pdf',
          avatar_url: require('../../../assets/pdf.png'),
          subtitle: 'Vice Chairman'
        },
      ]
    }
  }

keyExtractor = (item, index) => index.toString()

renderItem = ({ item }) => (
  <ListItem bottomDivider>
    <Avatar source={item.avatar_url} />
    <ListItem.Content>
      <ListItem.Title>{item.name}</ListItem.Title>
    </ListItem.Content>
  </ListItem>
)

  render(){
    return (
      <View style={styles.container}>
        <Text style={styles.title}>
          Mon dossier
        </Text>
        <Card containerStyle={{ marginTop: 15, borderRadius: 10 }}>  
          <FlatList
            keyExtractor={this.keyExtractor}
            data={this.state.list}
            renderItem={this.renderItem}
          />
        </Card>
      </View>
    );
  }
}

export default MyFile;
