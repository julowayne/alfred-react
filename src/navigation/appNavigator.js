import React from "react";
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BottomTabNavigator from "./bottomTabNavigator";
import Home from "../features/accueil/home.screen";
import AuthNavigator from "./authNavigator";
import {connect} from 'react-redux';
import Files from "../features/profil/components/files/files.screen";
import editProfil from "../features/profil/components/profil/edit-profil.screen";
import Notification from "../features/notifications/notification.screen";
import guarantorScreen from "../features/profil/components/guarantorProfil/guarantor-profil.screen";
import { faTruckMedical } from "@fortawesome/free-solid-svg-icons";
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
          <Stack.Screen options={{ headerBackVisible: true, headerShown: true }} name="Mettre à jour mon garant" component={guarantorScreen} />
          <Stack.Screen options={{ headerBackVisible: true, headerShown: true }} name="Ajouter mon garant" component={guarantorScreen} />
          <Stack.Screen options={{ headerBackVisible: true, headerShown: true }} name="Mes fichiers" component={Files}  initialParams={{guarantorFiles:false}}/>
          <Stack.Screen options={{ headerBackVisible: true, headerShown: true }} name="Fichiers garant" component={Files} initialParams={{guarantorFiles:true}}/>
          <Stack.Screen options={{ headerBackVisible: true, headerShown: true }} name="Notifications" component={Notification} />
        </Stack.Group>
      </Stack.Navigator>
    );
};


const mapStateToProps = state => {
  return {
    fields: state.landing.fields,
    user: state.landing.user,
    guarantor: state.landing.user
  }
}
const mapDispatchToProps = dispatch => {
  return {
    setLogging: (loggin) => dispatch(setLogging(loggin)),
    setFields: (fields) => dispatch(setFields(fields)),
    setFiles: (files) => dispatch(setFiles(files)),
    setGuarantor: (guarantor) => dispatch(setGuarantor(guarantor))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(appNavigator)