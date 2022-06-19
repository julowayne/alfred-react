import React from 'react';
import { View, FlatList } from 'react-native';
import styles from './files.styles'
import { ListItem, Avatar, Card } from '@rneui/themed';
import AddFiles from '../add-files.screen';



class Files extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      list :[
        {
          name: 'piece-identité.pdf',
          avatar_url: require('../../../../assets/pdf.png'),
          subtitle: 'Vice President'
        },
        {
          name: 'avis-imposition.pdf',
          avatar_url: require('../../../../assets/pdf.png'),
          subtitle: 'Vice Chairman'
        },
      ],
      list2 :[
        {
          name: 'piece-identité.pdf',
          avatar_url: require('../../../../assets/pdf.png'),
          subtitle: 'Vice President'
        },
        {
          name: 'avis-imposition.pdf',
          avatar_url: require('../../../../assets/pdf.png'),
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
      <AddFiles navigation={this.props.navigation}/>
        <Card containerStyle={{ marginTop: 15, borderRadius: 10 }}>  
          <FlatList
            nestedScrollEnabled 
            keyExtractor={this.keyExtractor}
            data={this.state.list}
            renderItem={this.renderItem}
          />
        </Card>
      </View>
    );
  }
}

export default Files;
