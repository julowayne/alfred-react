import { StyleSheet, Dimensions } from 'react-native';

const {width, height} = Dimensions.get('window')

const styles = StyleSheet.create({
  main:{
    height: height,
    width: width,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#e9ecef',
  }
})

  export default styles;