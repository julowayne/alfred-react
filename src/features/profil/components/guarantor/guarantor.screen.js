import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import styles from './guarantor.styles'


class MyGuarantor extends React.Component {
  constructor(props){
    super(props)
  }

  updateGuarantor = () => {
  this.props.navigation.navigate('Mettre à jour mon garant')
}

render(){
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.filesButton} onPress={this.updateGuarantor}>
        <Text style={styles.filesText}>Dossier garant</Text>
      </TouchableOpacity>
    </View>
  );
}
}

export default MyGuarantor;
