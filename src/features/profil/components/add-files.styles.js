import { StyleSheet, Dimensions } from 'react-native';

const {width, height} = Dimensions.get('window')

const styles = StyleSheet.create({
  fonctions: {
    padding: 15,
  },
  add :{
    fontSize: 20,
    fontFamily: 'Roboto-Medium',
    color: 'white'
  },
  addButton :{
    height: 55,
    borderRadius: 6,
    backgroundColor: '#007bff',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 4
  },
  addFile: {
    flexDirection: 'row',
    padding: 10
  },
  yourFile :{
    padding: 15,
    fontFamily: 'Roboto-Regular',
    fontSize: 20,
    color: 'black',
    alignContent: 'center'
  },
  pdf :{
    marginRight: 50
  },
  image : {
    marginRight: 10
  },
  allNotif:{
    width: width - 35,
    padding: 5
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    width: width - 50,
    backgroundColor: "white",
    borderRadius: 10,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  notifTitle :{
    width: width - 50,
    height: 50,
    backgroundColor: '#20c997',
    flexDirection: 'row',
    padding: 15,
    justifyContent: 'flex-end',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 2
  },
  pickerCnt :{
    BorderWidth: 1, 
    BorderColor: '#007bff', 
    BorderRadius: 4 
  },
  picker :{
    marginVertical: 10
  },
  uploadText: {
    color: 'white',
    fontFamily: 'Roboto-Bold',
    fontSize: 15,
  },
  upload: {
    paddingVertical: 10,
    backgroundColor: 'blue',
    alignItems: 'center',
    marginHorizontal: 50,
    borderRadius: 6,
    borderWidth: 0,
    elevation: 4
  },
  uploadCnt :{
    marginVertical: 10
  }
})

export default styles;