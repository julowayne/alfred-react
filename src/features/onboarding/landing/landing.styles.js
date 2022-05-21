
import { StyleSheet, Dimensions } from 'react-native';

const {width, height} = Dimensions.get('window')

const styles = StyleSheet.create({
    main:{
      height: height,
      width,
      alignItems: 'center'
    },
    logo :{
      width: 200,
      height: 200,
    }
  })

  export default styles;