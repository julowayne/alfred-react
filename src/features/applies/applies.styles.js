
import { faDisplay } from '@fortawesome/free-solid-svg-icons';
import { StyleSheet, Dimensions } from 'react-native';
import autoMergeLevel1 from 'redux-persist/es/stateReconciler/autoMergeLevel1';

const {width, height} = Dimensions.get('window')

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    // paddingBottom:4,
    flexDirection: 'row',
  },
  title :{
    fontSize: 20,
  },
  value :{
    justifyContent: 'center',
    fontSize: 20,
  },
  location :{
    fontSize: 28,
    fontFamily: 'Roboto-Medium',
    color: 'black'    
  },
  iconsValues :{
    fontSize: 20,
    marginLeft: 5,
    color: 'black'
  },
  progressBar: {
    marginBottom: 15
  },
  cardPart :{
    flexDirection: 'row',
    marginBottom: 15,
  },
  description :{
    flexDirection: 'column',
    marginBottom: 15
  },
  fonts: {
    marginBottom: 8,
  },
  user: {
    flexDirection: 'row',
    marginBottom: 6,
  },
  name: {
    fontSize: 16,
    marginTop: 5,
  },
  agency :{
    marginLeft: 8
  },
  agencyName :{
    fontSize: 20,
    color: 'black'
  },
  agencyCnt: {
    flexDirection: 'row',
  },
  redirection :{
    elevation: 20
  },
  //Badges
  cardCntStyle :{
    marginTop: 15,
    borderRadius: 10,
  },
  cardBadge : {
    alignItems: 'flex-end',
    top : -130,
    marginHorizontal: 20,
  },
  badge :{
    display: 'flex',
    width: 120,
    borderRadius: 20,
    padding: 10,
    alignItems: 'center',
    elevation: 4
  },
  badgeText: {
    color: 'white',
    fontSize: 15,
    fontFamily: 'Roboto-Bold'
  },
  //swiper
  wrapper: {},
})

  export default styles;