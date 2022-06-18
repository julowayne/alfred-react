import React from "react";
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Profil from "../features/profil/profil.screen";
const Stack = createNativeStackNavigator();

const ProfilNavigator = () => {
    return (
      <Stack.Navigator   screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name="profil" component={Profil} />
      </Stack.Navigator>
    );
};

export default ProfilNavigator;