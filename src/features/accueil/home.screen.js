import React from 'react';
import { Text, View } from 'react-native';
import HeaderNavigation from '../headerNavigation/headerNavigation.screen';
import styles from './home.styles'
import {connect} from 'react-redux';


class Home extends React.Component {
  constructor(props){
    super(props)
  }

  render(){
    return (
      <View>
        <HeaderNavigation/>
        <Text style={styles.main}>
          Home
        </Text>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    openedFirst : state.landing.openedFirst
  }
}

const mapDispatchToProps = dispatch => {
  return {
    updateVins: (vins) => dispatch(updateVins(vins)),
    setName: (name) => dispatch(setName(name))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home)
