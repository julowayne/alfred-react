import {StyleSheet, Dimensions } from 'react-native';


const {width, height} = Dimensions.get('window')


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e9ecef',
  },
  inner: {
    padding: 24,
  },
  headerCtn: {
    overflow: 'hidden', 
    paddingBottom: 5, 
    elevation: 10,
    marginBottom: 36,
  },
  header: {
    fontFamily: 'Roboto-Regular',
    padding: 20,
    fontSize: 36,
    color: "#000000",
    backgroundColor: '#20c997',
    shadowColor: '#000',
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity:  0.4,
    shadowRadius: 3,
    elevation: 5,
  },
  btnContainer: {
    backgroundColor: "white",
    marginTop: 24,
    marginBottom: 12
  },
  label:{
    marginBottom: 4,
    fontFamily: 'Roboto-Regular',
    fontSize: 20,
    color: 'black'
  },
  input: {
    fontFamily: 'Roboto-Regular',
    height: 50,
    marginBottom: 15,
    backgroundColor: 'white',
    borderRadius: 4,
    padding: 10,
    elevation: 3,
  },
  nextBtn :{
    height: 55,
    borderRadius: 6,
    backgroundColor: '#007bff',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 4
  },
  nextText: {
    color: 'white',
    fontFamily: 'Roboto-Medium',
    fontSize: 20
  }
})

export default styles;