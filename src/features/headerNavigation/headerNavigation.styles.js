import { StyleSheet, Dimensions } from 'react-native';


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
  button: {
    color: 'black',
    alignItems: "center",
    padding: 5
  },
  navText: {
    fontSize: 20,
    color: 'black',
    fontWeight : 'bold'
  }
})

export default styles;