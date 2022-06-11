import { StyleSheet, Dimensions } from 'react-native';

const {width, height} = Dimensions.get('window')

const styles = StyleSheet.create({
  container :{
    marginTop: 20,
  },
  title :{
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    marginLeft: 20
  }
})

export default styles;