import * as React from 'react';
import {createNavigationContainerRef, NavigationContainer} from '@react-navigation/native';

import appNavigator from './appNavigator';
import OnBoardingNavigator from './onBoardingNavigator';
export const navigationRef = createNavigationContainerRef();

const rootContainer = () => {

  let NavComponent;

  // NavComponent = OnBoardingNavigator;
  NavComponent = OnBoardingNavigator;

  
  return (
    <NavigationContainer ref={navigationRef} >
      <NavComponent />
    </NavigationContainer>
  );
};

export default rootContainer;
