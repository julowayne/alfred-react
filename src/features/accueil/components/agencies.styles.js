import { StyleSheet, Dimensions } from 'react-native';

const {width, height} = Dimensions.get('window')

const styles = StyleSheet.create({
  container :{
    paddingHorizontal: 40,
    justifyContent: 'center',
    alignItems: 'center'
  },
  agencyCard: {
    borderRadius: 4,
    elevation: 2,
    width: '100%'
  },
  agency :{
    flexDirection: 'row',
  },
  agencyName:{
    fontFamily: 'Roboto-Bold',
    fontSize: 20,
    color: 'black',
    marginHorizontal: 10
  },
  news :{
    marginHorizontal: 10
  }

})

  export default styles;