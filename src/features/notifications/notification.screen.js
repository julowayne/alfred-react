import React from "react";
import { Text, View, FlatList } from "react-native";
import styles from './notification.styles'
import { ListItem, Avatar, Card } from '@rneui/themed';
import {connect} from 'react-redux';

class Notification extends React.Component {
  constructor(props){
    super(props)
    this.state = {
    }
  }

  
keyExtractor = (item, index) => index.toString()

renderItem = ({ item }) => (
  <ListItem bottomDivider>
    <Avatar source={require('../../assets/alfred32.png')} />
    <ListItem.Content>
      <ListItem.Title style={styles.title}>{item.type}</ListItem.Title>
      <ListItem.Subtitle>{item.message}</ListItem.Subtitle>
    </ListItem.Content>
  </ListItem>
)

  render(){
    return (
      <View>
        <FlatList
          nestedScrollEnabled 
          keyExtractor={this.keyExtractor}
          data={this.props.notifications}
          renderItem={this.renderItem}
        />
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    logging: state.landing.logging,
    user: state.landing.user,
    files: state.landing.files,
    guarantor: state.landing.guarantor,
    btnLoader: state.landing.btnLoader,
    notifications: state.landing.notifications
  }
}


export default connect(mapStateToProps, null)(Notification)
