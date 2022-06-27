import { StyleSheet, Dimensions } from 'react-native';

const {width, height} = Dimensions.get('window')

const styles = StyleSheet.create({
  container:{
    flex: 1,
    height: height
  },
  main :{
    padding: 15,
    flex: 1,
    // height: height
  },
  input:{
    fontFamily: 'Roboto-Regular',
    backgroundColor: 'white',
    height: 40,
    marginBottom: 15,
    borderRadius: 4,
    padding: 10,
    elevation: 3
  },
  label:{
    fontFamily: 'Roboto-Regular',
    color: 'black',
    fontSize: 20,
    marginBottom: 5
  },
  guarantor:{
    flexDirection : 'row'
  },
  guarantorLabel:{
    fontFamily: 'Roboto-Regular',
    fontSize: 22,
    color: 'black'
  },
  profilButton:{
    marginTop: 20,
    height: 50,
    borderRadius: 6,
    backgroundColor: '#007bff',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 4
  },
  profilText:{
    color: 'white',
    fontFamily: 'Roboto-Medium',
    fontSize: 20
  },
  checkbox: {
    borderRadius: 3,
    borderWidth: 0, 
    elevation: 2, 
    marginRight: 10 
  }
})

export default styles;