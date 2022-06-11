import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container :{
    marginTop: 15,
  },
  title :{
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
  cardCnt: {
    borderWidth: 0, 
    shadowColor: 'rgba(0,0,0, 0.0)', // Remove Shadow for iOS
    shadowOffset: { height: 0, width: 0 },
    shadowOpacity: 0,
    shadowRadius: 0,  
    elevation: 0 // Remove Shadow for Android
}

});

export default styles;