import { StyleSheet, Dimensions } from 'react-native';

const {width, height} = Dimensions.get('window')

const styles = StyleSheet.create({
  main:{
    padding: 30,
    justifyContent: 'center',
    // marginTop: 150,
  },
  logoCnt :{
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo :{
    marginTop: 40,
    width: 180,
    height: 180,
  },
  container:{
    flex: 1,
    backgroundColor: '#e9ecef',
  },
  label:{
    marginBottom: 4,
    fontFamily: 'Roboto-Regular',
    fontSize: 20,
    color: 'black'
  },
  input: {
    fontFamily: 'Roboto-Regular',
    height: 55,
    marginBottom: 15,
    borderWidth: 0,
    borderRadius: 4,
    padding: 10,
    backgroundColor: 'white',
    elevation: 3
  },
  profilButton :{
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