import React from 'react';
import { Text, View } from 'react-native';
import HeaderNavigation from '../headerNavigation/headerNavigation.screen';
import { Card } from '@rneui/themed';
import styles from './home.styles'
import {connect} from 'react-redux';
import {setLogging, setFields, setFiles, setGuarantor, setGuarantorFiles } from '../onboarding/landing/landing.redux'

import addFilesServices from './home.services'
import Agencies from './components/agencies.screen';

const api = addFilesServices.create();

class Home extends React.Component {
  constructor(props){
    super(props)
    console.log(props)
    if(props.logging === true){
      props.navigation.navigate('appNavigator')
    } else {
      props.navigation.navigate('authNavigator')
    }
  }
  componentDidMount(){
    this.getFileTypes()
    this.getFiles()
    // this.getGuarantor()
    this.getGuarantorFiles()
  }

  getFileTypes = async () => {
    const response = await api.fields(this.props.user.token)
    console.log(response.data)
    this.props.setFields(response.data.data)
  }
  getFiles = async () => {
    const response = await api.getFiles(this.props.user.token)
    console.log(response.data)
    this.props.setFiles(response.data.data)
  }
  getGuarantorFiles = async () => {
    const response = await api.getGuarantorFiles(this.props.user.token, this.props.guarantor.id)
    console.log(response.data)
    this.props.setGuarantorFiles(response.data.data)
  }


  logout = () => {
    this.props.setLogging(false)
    this.props.navigation.navigate('authNavigator')
  }

  goToApplies = () => {
    this.props.navigation.navigate('Mes dossiers')
  }

  render(){
    return (
      <View>
        <HeaderNavigation headerTitle="Accueil" navigation={this.props.navigation}/>
        <View style={styles.main}>
          <Text style={styles.hello}>
            Bonjour {this.props.user.first_name} 👋
          </Text>
          <Card containerStyle={styles.followAppliesCnt}>
            <Text style={styles.followAppliesText}>
            Tu as <Text onPress={this.goToApplies} style={styles.currentApplies}>4 dossiers en cours</Text>, n'hésites pas a suivre leur évolution !
            </Text>               
          </Card>
          <Text style={styles.test}>Ne loupes aucune des dernières annonces</Text>
          <Agencies/>
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    openedFirst: state.landing.openedFirst,
    logging: state.landing.logging,
    fields: state.landing.fields,
    user: state.landing.user,
    files: state.landing.files,
    guarantorFiles : state.landing.guarantorFiles,
    guarantor : state.landing.guarantor,
    notifications: state.landing.notifications
  }
}
const mapDispatchToProps = dispatch => {
  return {
    setLogging: (loggin) => dispatch(setLogging(loggin)),
    setFields: (fields) => dispatch(setFields(fields)),
    setFiles: (files) => dispatch(setFiles(files)),
    setGuarantor: (guarantor) => dispatch(setGuarantor(guarantor)),
    setGuarantorFiles: (files) => dispatch(setGuarantorFiles(files)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home)
