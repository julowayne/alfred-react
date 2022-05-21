import React from 'react';
import {StyleSheet, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window')

const styles = StyleSheet.create({
    main: {
      flex: 1,
      backgroundColor: '#e9ecef',
      paddingHorizontal: 20,
      paddingVertical: 25
    },
    logo :{
      width: 200,
      height: 200,
    }
})

export default styles;