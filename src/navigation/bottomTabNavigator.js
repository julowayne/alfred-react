import React from "react";
import { Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../features/accueil/home.screen";
import Profil from "../features/profil/profil.screen";
import Applies from "../features/applies/applies.screen";

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
    return (
        <Tab.Navigator 
            screenOptions={{
            headerShown: false,
            tabBarShowLabel: false,
            tabBarActiveBackgroundColor: '#20c997',
          }}>
            <Tab.Screen 
                name="Accueil" 
                component={Home}
                options={{
                    tabBarIcon: () => (<Image source={require("../assets/accueil.png")} style={{width: 20, height: 20}} />),
                }}
            />
            <Tab.Screen 
                name="Mes dossiers" 
                component={Applies}
                options={{
                    tabBarIcon: () => (<Image source={require("../assets/dossier2.png")} style={{width: 20, height: 20}} />)
                }}
            />
            <Tab.Screen
                name="Mon Profil"
                component={Profil}
                options={{
                    tabBarIcon: () => (<Image source={require("../assets/user.png")} style={{width: 20, height: 20}} />)
                }}
            />
        </Tab.Navigator>
    );
};
export default BottomTabNavigator;