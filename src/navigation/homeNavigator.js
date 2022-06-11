import React from "react";
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from "../features/accueil/home.screen";
const Stack = createNativeStackNavigator();

const HomeNavigator = () => {
    return (
      <Stack.Navigator   screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name="home" component={Home} />
      </Stack.Navigator>
    );
};

export default HomeNavigator;