import { StyleSheet, Dimensions } from 'react-native';

const {width, height} = Dimensions.get('window')

const styles = StyleSheet.create({
  main:{
    height: height,
    width: width,
    backgroundColor: '#e9ecef',
    padding: 15
  },
  fonctions: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  add :{
    fontSize: 20
  },
  addFile: {
    flexDirection: 'row',
    padding: 10
  },
  image : {
    marginRight: 10
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
})

export default styles;