// *********************************************************
// Account registration
// Authors: Afra Farkhooy & Victoria Stråberg
// Course: TDDC73
// *********************************************************

import React, { Component } from 'react'
import { View, TextInput, Text, StyleSheet } from 'react-native'

class EmailValidator extends Component {
  
  constructor(props){
    super(props);
    this.state = {
        email: "",
        isValidEmail: false,
    }
}

  handleEmail = (string) => {
    var matches = string.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/);
    this.setState({
      isValidEmail: matches != null ? true: false
    });
  }

   render() {
      return (
        <View>
        <Text style = {styles.fieldtext}> Email: </Text>
          <TextInput style={styles.textinput}
              secureTextEntry={false}
              onChangeText={this.handleEmail}
          />
          <Text 
          style={[styles.messagetext, 
          this.state.isValidEmail ? styles.valid : styles.invalid]}> 
          The email should be in the form: name@mail.com </Text>
      </View>
      )
    }
}

const styles = StyleSheet.create({
   textinput:{
    alignSelf: 'stretch',
    height: 40,
    marginBottom: 10,
    color: 'black',
    borderBottomColor: '#68a0cf',
    borderBottomWidth: 1,
  },
  messagetext:{
    fontSize: 10,
    marginBottom: 15,
  },
  valid:{
    color: 'forestgreen',
  },
  invalid:{
    color:'firebrick',
  },

  fieldtext:{
        color: 'black',
        fontSize: 12
    },


})

export default EmailValidator;