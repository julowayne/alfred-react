import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import HeaderNavigation from '../headerNavigation/headerNavigation.screen';
import MyFile from './components/my-file.screen';
import MyProfile from './components/my-profile.screen';
import styles from './profil.styles';
import {connect} from 'react-redux';
import {setLogging, setUser, setBtnLoader } from '../onboarding/landing/landing.redux';
import MyGuarantor from './components/guarantor/guarantor.screen';
import Lottieview from 'lottie-react-native';

class Profil extends React.Component {
  constructor(props){
    super(props)
  }

  logout = () => {
    this.props.setLogging(false)
    this.props.setUser({})
    setTimeout(() => {				
      this.props.navigation.navigate('authNavigator')
      this.props.setBtnLoader(false)
    }, 2000);
  }

  render(){
    const guarantor = this.props.guarantor.id;
    let guarantorFiles;
    if(guarantor != ""){
      guarantorFiles = <MyFile guarantorBool={true} navigation={this.props.navigation}/>
    }
    return (
      <View style={styles.main}>
        <HeaderNavigation headerTitle="Mon profil"  navigation={this.props.navigation}/>
        <View style={styles.firstButton}>
          <MyFile  guarantorBool={false} navigation={this.props.navigation}/>
        </View>
        {guarantorFiles}
        <MyProfile navigation={this.props.navigation}/>
        <MyGuarantor navigation={this.props.navigation}/>
        <View style={styles.logout}>
          <TouchableOpacity style={styles.logoutButton} onPress={() => { this.props.setBtnLoader(true), this.logout()}}>
            {/* <Text style={styles.logoutText}>Me déconnecter</Text> */}
            { !this.props.btnLoader ? <Text style={styles.logoutText}>Me déconnecter</Text> : 
								<Lottieview
									source={require('../../assets/animations/submit-btn.json')}
									style={{ flex: 1}}
									autoPlay
									loop
								/>}
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    logging: state.landing.logging,
    user: state.landing.user,
    files: state.landing.files,
    guarantor: state.landing.guarantor,
    btnLoader: state.landing.btnLoader
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setLogging: (loggin) => dispatch(setLogging(loggin)),
    setUser: (user) => dispatch(setUser(user)),
    setBtnLoader: (btnLoader) => dispatch(setBtnLoader(btnLoader)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Profil)

