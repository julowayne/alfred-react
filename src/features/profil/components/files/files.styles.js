import { StyleSheet, Dimensions } from 'react-native';

const {width, height} = Dimensions.get('window')

const styles = StyleSheet.create({
  container :{
    // marginTop: 15,
    height: height
  },
  title :{
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    marginLeft: 20,
    fontFamily: 'Roboto-Regular',
    marginBottom: -10
  },
  file :{
    backgroundColor: 'lightgrey',
    borderRadius: 6
  },
  //Modalize
  actions :{
    alignItems: 'center',
    padding: 10,
  },
  actionImg:{
    width: 35,
    height: 35,
    marginRight: 10
  },
  delete :{
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    width: width - 100,
    backgroundColor: '#dc3545',
    padding: 10,
    marginBottom: 10,
    elevation: 4
  },
  replace :{
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    width: width - 100,
    backgroundColor: '#007bff',
    elevation: 4,
    padding: 10,
  },
  deleteText: {
    color: 'white',
    fontFamily: 'Roboto-Medium',
    fontSize: 20
  },
  // style for content if no files
  messageCard : {
    borderRadius: 10,
    elevation: 3
  },
  emptyMessage1: {
    fontSize: 20,
    fontFamily: 'Roboto-Regular',
    color: 'black',
    marginBottom: 10
  },
  getFileFromDirectory : {
    fontSize: 20,
    fontFamily: 'Roboto-Medium',
    color: 'blue',
  },
  getFileFromCamera : {
    fontSize: 20,
    fontFamily: 'Roboto-Medium',
    color: 'blue',
  },
  emptyMessage2: {
    fontSize: 20,
    fontFamily: 'Roboto-Regular',
    color: 'black',
    marginBottom: 10
  }
})

export default styles;