import React from 'react';
import { View } from 'react-native';
import HeaderNavigation from '../headerNavigation/headerNavigation.screen';
import MyFile from './components/my-file.screen';
import MyProfile from './components/my-profile.screen';
import AddFiles from './components/add-files.screen';


class Profil extends React.Component {
  constructor(props){
    super(props)
  }

  render(){
    return (
      <View>
        <HeaderNavigation/>
        <AddFiles/>
        <MyFile/>
        <MyProfile/>
      </View>
    );
  }
}

export default Profil;
