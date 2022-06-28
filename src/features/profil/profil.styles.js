import { StyleSheet, Dimensions } from 'react-native';

const {width, height} = Dimensions.get('window')

const styles = StyleSheet.create({
  main:{
    height: height,
    backgroundColor: '#e9ecef',
  },
  firstButton: {
    paddingTop: 15
  },
  logout: {
    marginTop: 10,
    padding: 15,
    width: '100%',
    position: 'absolute',
    bottom: 50, 
  },
  logoutButton :{
    height: 55,
    borderRadius: 6,
    backgroundColor: '#007bff',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 4
  },
  logoutText: {
    color: 'white',
    fontFamily: 'Roboto-Medium',
    fontSize: 20
  }
})

export default styles;