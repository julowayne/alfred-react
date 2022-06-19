import React from 'react';
import { Button, View, FlatList } from 'react-native';
import styles from './my-file.styles'


class MyFile extends React.Component {
  constructor(props){
    super(props)
    this.state = {
    }
  }


openFileModal = () => {
  this.props.navigation.navigate('files')
}


  render(){
    return (
      <View style={styles.container}>
        <Button onPress={this.openFileModal} title="Mes dossiers"/>   
      </View>
    );
  }
}

export default MyFile;
