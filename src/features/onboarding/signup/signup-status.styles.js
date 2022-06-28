import {StyleSheet } from 'react-native';


const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  inner: {
    padding: 24,
  },
  picker :{
    backgroundColor: 'white',
    elevation: 2, 
  },
  pickerCnt: {
    borderRadius: 10, 
    elevation: 2, 
    borderColor: '#bdc3c7',
    overflow: 'hidden'
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
  me :{
    paddingLeft: 15,
    fontSize: 20,
    color: 'black'
  },
  btnContainer: {
    backgroundColor: "white",
    marginTop: 24,
    marginBottom: 12
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