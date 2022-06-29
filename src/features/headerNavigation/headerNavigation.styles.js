import { StyleSheet, Dimensions } from 'react-native';

const {width, height} = Dimensions.get('window')

const styles = StyleSheet.create({
  header:{
    height: 70,
    padding: 15,
    justifyContent: 'center',
    backgroundColor: '#20c997',
    elevation: 5,
  },
  content : {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingTop:10
  },
  lottie :{
    width: '10%',
    justifyContent: "center",
    marginTop: 5
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
    marginHorizontal: 8,
    fontSize: 20,
    color: 'black',
    fontFamily: 'Roboto-Medium'
  },
})

export default styles;