import React from "react";
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BottomTabNavigator from "./bottomTabNavigator";
import Home from "../features/accueil/home.screen";
import AuthNavigator from "./authNavigator";
const Stack = createNativeStackNavigator();

const appNavigator = () => {
    return (
      <Stack.Navigator   screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name="bottomTabNavigator" component={BottomTabNavigator}/>
        <Stack.Screen name="authNavigator" component={AuthNavigator} />
        <Stack.Screen name="home" component={Home} />
      </Stack.Navigator>
    );
};

export default appNavigator;