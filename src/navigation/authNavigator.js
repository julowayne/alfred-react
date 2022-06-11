import React from "react";
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignIn from "../features/onboarding/login/signin.screen";
import appNavigator from "./appNavigator";
const Stack = createNativeStackNavigator();


const AuthNavigator = () => {
    return (
      <Stack.Navigator   screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name="signin" component={SignIn} />
        <Stack.Screen name="appNavigator" component={appNavigator} />
      </Stack.Navigator>
    );
};

export default AuthNavigator;