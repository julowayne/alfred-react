import {StyleSheet } from 'react-native';


const styles = StyleSheet.create({
  container: {
    flex: 1
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
  me :{
    paddingLeft: 15,
    fontSize: 20,
    color: 'black'
  },
  btnContainer: {
    backgroundColor: "white",
    marginTop: 24,
    marginBottom: 12
  }
})

export default styles;