// ********************************************************
// Account registration
// Authors: Afra Farkhooy & Victoria Stråberg
// Course: TDDC73
// ********************************************************

import React, { Component } from 'react';
import {StyleSheet, View} from 'react-native';
import RegistrationForm from './components/RegistrationForm';

class App extends Component {

  render() {
    return (
      <View style = {styles.container}>
        <RegistrationForm/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#9BD2CD',
    paddingLeft: 60,
    paddingRight: 60,
  },
});

export default App;