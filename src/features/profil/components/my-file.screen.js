import React, { useEffect, useRef } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import styles from './my-file.styles'
// import Lottie from 'lottie-react-native';

// const animationRef = useRef<Lottie>(null)
class MyFile extends React.Component {
  constructor(props){
    super(props)
  }

// componentDidMount() {
//     const { navigation } = this.props;
//     this.focusListener = navigation.addListener('didFocus', () => {
//       useEffect(() => {
//         animationRef.current?.play()
//         animationRef.current?.play(30, 120);
//       }, [])
//     });
//   }

openUserFiles = () => {
    this.props.navigation.navigate('Mes fichiers')
}
openGuarantorFiles = () => {
    this.props.navigation.navigate('Fichiers garant')
}

render(){
  let fileButton
  if(this.props.guarantorBool) {
    fileButton =  <TouchableOpacity style={styles.filesButton} onPress={this.openGuarantorFiles}>
                    <Text style={styles.filesText}>Mon dossier garant</Text>
                  </TouchableOpacity>
  } else {
    fileButton =  <TouchableOpacity style={styles.filesButton} onPress={this.openUserFiles}>
                    <Text style={styles.filesText}>Mon dossier</Text>
                  </TouchableOpacity>
  }
  return (
    <View style={styles.container}>
     {fileButton}
    </View>
  );
}
}

export default MyFile;
