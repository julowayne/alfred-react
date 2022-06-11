import React, { useEffect } from 'react';
import {createNavigationContainerRef, NavigationContainer} from '@react-navigation/native';
import OnBoardingNavigator from './onBoardingNavigator';
import SplashScreen from 'react-native-splash-screen'
export const navigationRef = createNavigationContainerRef();

const rootContainer = () => {
  let NavComponent;
  NavComponent = OnBoardingNavigator;

  useEffect(() => {
    console.log('dedans')
    SplashScreen.hide();
  });
  
  return (
    <NavigationContainer ref={navigationRef} >
      <NavComponent />
    </NavigationContainer>
  );
};

export default rootContainer;
