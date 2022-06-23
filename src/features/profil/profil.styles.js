import { StyleSheet, Dimensions } from 'react-native';

const {width, height} = Dimensions.get('window')

const styles = StyleSheet.create({
  main:{
    height: height,
    width: width,
    backgroundColor: '#e9ecef',
    padding: 15
  },
  logout: {
    marginTop: 10,
    padding: 15
  },
  logoutButton :{
    height: 70,
    borderRadius: 6,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 4
  },
  logoutText: {
    color: '#007bff',
    fontFamily: 'Roboto-Medium',
    fontSize: 20
  }
})

export default styles;