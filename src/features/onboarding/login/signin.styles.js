import { StyleSheet, Dimensions } from 'react-native';

const {width, height} = Dimensions.get('window')

const styles = StyleSheet.create({
  main:{
    padding: 30,
    justifyContent: 'center',
    marginTop: 150
  },
  container:{
    flex: 1
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
    borderWidth: 1,
    borderRadius: 4,
    padding: 10,
    borderColor: '#20c997',
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  profilButton :{
    height: 65,
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