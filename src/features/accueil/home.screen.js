import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import HeaderNavigation from '../headerNavigation/headerNavigation.screen';
import { Card } from '@rneui/themed';
import styles from './home.styles'
import {connect} from 'react-redux';
import {setLogging, setFields } from '../onboarding/landing/landing.redux'

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
  }

  getFileTypes = async () => {
    const response = await api.fields()
    console.log('response:', JSON.stringify(response))
    this.props.setFields(response.data.data)
  }

  logout = () => {
    this.props.setLogging(false)
    this.props.navigation.navigate('authNavigator')
  }

  goToApplies = () => {
    // this.props.navigation.navigate('authNavigator')
    // Redirect to applies
  }

  render(){
    return (
      <View>
        <HeaderNavigation headerTitle="Accueil" navigation={this.props.navigation}/>
        <View style={styles.main}>
          <Text style={styles.hello}>
            Bonjour Jules !
          </Text>
          <Card containerStyle={styles.followAppliesCnt}>
            <Text style={styles.followAppliesText}>
            Tu as <Text onPress={this.goToApplies} style={styles.currentApplies}>4 dossiers en cours</Text>, n'hésites pas a suivre leur évolution !
            </Text>               
          </Card>
          <Agencies/>
          {/* <TouchableOpacity onPress={() => this.setModalVisible(!modalVisible)}>
            <Button title="deconnection" onPress={this.logout}/>
          </TouchableOpacity> */}
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    logging: state.landing.logging,
    fields: state.landing.fields,
    user: state.landing.user
  }
}
const mapDispatchToProps = dispatch => {
  return {
    setLogging: (loggin) => dispatch(setLogging(loggin)),
    setFields: (fields) => dispatch(setFields(fields))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home)
