import React, { useEffect } from 'react';
import {createNavigationContainerRef, NavigationContainer} from '@react-navigation/native';
import OnBoardingNavigator from './onBoardingNavigator';
import SplashScreen from 'react-native-splash-screen'
import FlashMessage from "react-native-flash-message";
export const navigationRef = createNavigationContainerRef();

const rootContainer = () => {
  let NavComponent;
  NavComponent = OnBoardingNavigator;

  useEffect(() => {
    SplashScreen.hide();
  });
  
  return (
    <NavigationContainer ref={navigationRef} >
      <NavComponent />
      <FlashMessage position="top" />
    </NavigationContainer>
  );
};

export default rootContainer;
