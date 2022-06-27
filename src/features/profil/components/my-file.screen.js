import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import styles from './my-file.styles'


class MyFile extends React.Component {
  constructor(props){
    super(props)
  }


openFileModal = () => {
  this.props.navigation.navigate('Mes fichiers')
}

render(){
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.filesButton} onPress={this.openFileModal}>
        <Text style={styles.filesText}>Mon dossier</Text>
      </TouchableOpacity>
    </View>
  );
}
}

export default MyFile;
