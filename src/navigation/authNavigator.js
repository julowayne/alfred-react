import React from "react";
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignIn from "../features/onboarding/login/signin.screen";
import Home from "../features/accueil/home.screen";
const Stack = createNativeStackNavigator();


const AuthNavigator = () => {
    return (
      <Stack.Navigator   screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name="signin" component={SignIn} />
      </Stack.Navigator>
    );
};

export default AuthNavigator;