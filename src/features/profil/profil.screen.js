import React from 'react';
import { KeyboardAvoidingView,TouchableWithoutFeedback, Keyboard , View } from 'react-native';
import HeaderNavigation from '../headerNavigation/headerNavigation.screen';
import MyFile from './components/my-file.screen';
import MyProfile from './components/my-profile.screen';
import AddFiles from './components/add-files.screen';
import styles from './profil.styles';


class Profil extends React.Component {
  constructor(props){
    super(props)
  }

  render(){
    return (
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={styles.container}
        >
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View>
        <HeaderNavigation/>
            <AddFiles/>
            <MyFile/>
            <MyProfile/>
      </View>
          </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    );
  }
}

export default Profil;
