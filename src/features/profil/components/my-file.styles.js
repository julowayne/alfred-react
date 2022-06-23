import { StyleSheet, Dimensions } from 'react-native';

const {width, height} = Dimensions.get('window')

const styles = StyleSheet.create({
  container :{
    marginTop: 15,
    padding: 15
  },
  filesButton :{
    height: 70,
    borderRadius: 6,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 4
  },
  filesText: {
    color: '#007bff',
    fontFamily: 'Roboto-Medium',
    fontSize: 20
  }
})

export default styles;