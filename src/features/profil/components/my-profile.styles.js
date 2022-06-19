import { StyleSheet, Dimensions } from 'react-native';

const {width, height} = Dimensions.get('window')

const styles = StyleSheet.create({
  container :{
    marginTop: 20,
    padding: 20
  },
  title :{
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    marginLeft: 20,
    fontFamily: 'Roboto-Regular',
    marginBottom: -10
  },
  label:{
    marginBottom: 4
  },
  input: {
    fontFamily: 'Roboto-Regular',
    height: 40,
    marginBottom: 15,
    borderWidth: 1,
    borderRadius: 4,
    padding: 10,
    borderColor: '#20c997',
  }
})

export default styles;