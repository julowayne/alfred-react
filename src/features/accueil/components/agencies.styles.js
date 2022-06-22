import { StyleSheet, Dimensions } from 'react-native';

const {width, height} = Dimensions.get('window')

const styles = StyleSheet.create({
  test:{
    fontFamily: 'Roboto-Regular',
    fontSize: 18,
    color: 'black',
    paddingHorizontal: 20,
    paddingTop: 40
  },
  agency :{
    borderRadius: 6
  }
})

  export default styles;