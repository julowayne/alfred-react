import { StyleSheet, Dimensions } from 'react-native';

const {width, height} = Dimensions.get('window')

const styles = StyleSheet.create({
  container :{
    padding: 10,
    flex: 1
  },
  input: {
    fontFamily: 'Roboto-Regular',
    backgroundColor: 'white',
    height: 40,
    marginBottom: 15,
    borderRadius: 4,
    padding: 10,
    elevation: 3
  },
  label :{
    fontFamily: 'Roboto-Regular',
    color: 'black',
    fontSize: 20,
    marginBottom: 5
  }
})

export default styles;