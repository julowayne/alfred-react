import {StyleSheet } from 'react-native';


const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    height: 40,
    marginBottom: 15,
    borderWidth: 1,
    borderRadius: 4,
    padding: 10,
    borderColor: '#20c997',
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
  }
})

export default styles;