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
  },
  profilButton :{
    marginTop: 20,
    height: 50,
    borderRadius: 6,
    backgroundColor: '#007bff',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 4
  },
  profilText: {
    color: 'white',
    fontFamily: 'Roboto-Medium',
    fontSize: 20
  }
})

export default styles;