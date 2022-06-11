import { StyleSheet, Dimensions } from 'react-native';

const {width, height} = Dimensions.get('window')

const styles = StyleSheet.create({
  header:{
    height: 70,
    padding: 15,
    justifyContent: 'center',
    backgroundColor: '#20c997',
  },
  content : {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  navigation: {
    marginTop: 8,
    flexDirection: 'row',
    alignItems: 'center',
  },
  button: {
    color: 'black',
  },
  navText: {
    alignItems: 'center',
    marginHorizontal: 10,
    fontSize: 20,
    color: 'black',
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
    fontSize: 15,
    fontWeight: 'bold',
    color: 'black'
  },
  allNotif:{
    width: width - 35,
    padding: 5
  },
  notif: {
    borderRadius: 10,
    padding: 5,
    elevation: 2,
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }
})

export default styles;