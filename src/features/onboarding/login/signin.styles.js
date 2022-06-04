
import { StyleSheet, Dimensions } from 'react-native';

const {width, height} = Dimensions.get('window')

const styles = StyleSheet.create({
  main:{
    height: height,
    width: width,
    alignItems: 'center',
    justifyContent: 'center'
  },
  container: {
    flex: 1
  }
})

export default styles;