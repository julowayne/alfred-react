import { StyleSheet, Dimensions } from 'react-native';

const {width, height} = Dimensions.get('window')

const styles = StyleSheet.create({
  fonctions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10
  },
  add :{
    fontSize: 20,
    color: 'black'
  },
  addFile: {
    flexDirection: 'row',
    padding: 10
  },
  image : {
    marginRight: 10
  },
})

export default styles;