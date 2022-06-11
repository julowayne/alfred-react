import React from "react";
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Landing from "../features/onboarding/landing/landing.screen";
import SignupNames from "../features/onboarding/signup/signup-names.screen";
import signupStatus from '../features/onboarding/signup/signup-status.screen';
import signupEmail from '../features/onboarding/signup/signup-email.screen';
import SignupPassword from '../features/onboarding/signup/signup-password.screen';
import appNavigator from "./appNavigator";
const Stack = createNativeStackNavigator();


const OnBoardingNavigator = () => {
    return (
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="landing" component={Landing} />
        <Stack.Screen name="signupNames" component={SignupNames} />
        <Stack.Screen name="signupStatus" component={signupStatus} />
        <Stack.Screen name="signupEmail" component={signupEmail} />
        <Stack.Screen name="signupPassword" component={SignupPassword} />
        <Stack.Screen name="appNavigator" component={appNavigator} />
      </Stack.Navigator>
    );
};

export default OnBoardingNavigator;