import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import styles from './guarantor.styles'
import {connect} from 'react-redux';
import {setGuarantor} from '../../../onboarding/landing/landing.redux'


class MyGuarantor extends React.Component {
  constructor(props){
    super(props)
  }

updateOrCreateGuarantor = () => {
  // if(this.props.guarantor.first_name != ""){
    // this.props.navigation.navigate('Mettre à jour mon garant')
  // } else {
    this.props.navigation.navigate('Ajouter mon garant')
  // }
}

render(){
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.filesButton} onPress={this.updateOrCreateGuarantor}>
        <Text style={styles.filesText}>Profil de mon garant</Text>
      </TouchableOpacity>
    </View>
  );
}
}

const mapStateToProps = state => {
  return {
    fields: state.landing.fields,
    user: state.landing.user,
    guarantor: state.landing.guarantor
  }
}
const mapDispatchToProps = dispatch => {
  return {
    setLogging: (loggin) => dispatch(setLogging(loggin)),
    setFields: (fields) => dispatch(setFields(fields)),
    setFiles: (files) => dispatch(setFiles(files)),
    setGuarantor: (guarantor) => dispatch(setGuarantor(guarantor))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MyGuarantor)

