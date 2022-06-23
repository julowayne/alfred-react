import React from "react";
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BottomTabNavigator from "./bottomTabNavigator";
import Home from "../features/accueil/home.screen";
import AuthNavigator from "./authNavigator";
import Profil from "../features/profil/profil.screen";
import Files from "../features/profil/components/files/files.screen";
import editProfil from "../features/profil/components/profil/edit-profil.screen";
import Notification from "../features/notifications/notification.screen";
const Stack = createNativeStackNavigator();

const appNavigator = () => {
    return (
      <Stack.Navigator   screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name="bottomTabNavigator" component={BottomTabNavigator}/>
        <Stack.Screen name="authNavigator" component={AuthNavigator} />
        <Stack.Screen name="home" component={Home} />
        <Stack.Group screenOptions={{ headerStyle: { backgroundColor: '#20c997' } }} >
          <Stack.Screen options={{ headerBackVisible: true, headerShown: true }} name="Mettre à jour mon profil" component={editProfil} />
          <Stack.Screen options={{ headerBackVisible: true, headerShown: true }} name="Mes fichiers" component={Files} />
          <Stack.Screen options={{ headerBackVisible: true, headerShown: true }} name="Notifications" component={Notification} />
        </Stack.Group>
      </Stack.Navigator>
    );
};

export default appNavigator;