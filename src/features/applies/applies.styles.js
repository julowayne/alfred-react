
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
    padding: 5
  },
  title :{
    fontSize: 20,
  },
  entitled: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold'
  },
  value :{
    marginHorizontal: 15,
    fontSize: 20,
  },
  progressBar: {
    marginBottom: 15
  },
  cardPart :{
    flexDirection: 'row',
    marginBottom: 15
  },
  fonts: {
    marginBottom: 8,
  },
  user: {
    flexDirection: 'row',
    marginBottom: 6,
  },
  image: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  name: {
    fontSize: 16,
    marginTop: 5,
  },
  
})

  export default styles;