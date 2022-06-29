import { StyleSheet, Dimensions } from 'react-native';

const {width, height} = Dimensions.get('window')

const styles = StyleSheet.create({
  main:{
    fontFamily: 'Roboto-Regular',
    height: height,
    width: width,
    backgroundColor: '#e9ecef',
  },
  hello: {
    fontFamily: 'Roboto-Medium',
    fontSize: 25,
    color: 'black',
    paddingHorizontal: 20,
    paddingVertical: 15,
    color: 'black'
  },
  followAppliesCnt: {
    marginTop: 15,
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
  },
  followAppliesText :{
    fontFamily: 'Roboto-Medium',
    fontSize: 18,
    color:'black',
  },
  currentApplies: {
    color: '#007bff'
  },
  test:{
    fontFamily: 'Roboto-Medium',
    fontSize: 18,
    color: 'black',
    paddingTop: 40,
    marginHorizontal: 20
  },
})

  export default styles;