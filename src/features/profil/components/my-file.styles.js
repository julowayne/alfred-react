import { StyleSheet, Dimensions } from 'react-native';

const {width, height} = Dimensions.get('window')

const styles = StyleSheet.create({
  container :{
    marginTop: 15,
  },
  title :{
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    marginLeft: 20,
    fontFamily: 'Roboto-Regular'
  }
})

export default styles;