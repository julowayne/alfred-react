import { StyleSheet, Dimensions } from 'react-native';

const {width, height} = Dimensions.get('window')

const styles = StyleSheet.create({
  fonctions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    borderBottomWidth: 1,
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
    justifyContent: 'space-between',
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
  modalTitle:{
    fontFamily: 'Roboto-BlackItalic',
    fontSize: 15,
    color: 'black'
  },
  picker :{
    marginVertical: 20
  },
  upload: {
    paddingVertical: 10,
    backgroundColor: 'blue',
    alignItems: 'center',
    marginHorizontal: 50,
    borderRadius: 6
  },
  uploadText: {
    color: 'white',
    fontFamily: 'Roboto-Bold',
    fontSize: 15,
  }
})

export default styles;