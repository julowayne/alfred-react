import { StyleSheet, Dimensions } from 'react-native';

const {width, height} = Dimensions.get('window')

const styles = StyleSheet.create({
  main:{
    height: height,
    width: width,
    backgroundColor: '#e9ecef',
    padding: 15
  },
})

export default styles;