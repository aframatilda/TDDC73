// *********************************************************
// Account registration
// Authors: Afra Farkhooy & Victoria Stråberg
// Course: TDDC73
// *********************************************************

import React, { Component } from 'react'
import { View, TextInput, Text, StyleSheet } from 'react-native'

class UsernameValidator extends Component {

  constructor(props){
    super(props);
    this.state = {
      username: '',
      isValidUsername: false,
    }
  } 
    
  handleUsername = (string) => {
      //  console.log(string)
       var matches = string.length;
        this.setState({
            isValidUsername: matches > 4 ? true : false
        }); 
    }

   render() {
      return (
        <View>
        <Text style = {styles.fieldtext}> Username: </Text>
          <TextInput style={styles.textinput}
              secureTextEntry={false}
              onChangeText={this.handleUsername}       
          />

          <Text style={[
              styles.messagetext, 
              this.state.isValidUsername ? styles.valid : styles.invalid]}> 
              The username must be at least 5 characters long </Text>
      </View>
      )
    }
}

const styles = StyleSheet.create({
   textinput:{
    alignSelf: 'stretch',
    height: 40,
    marginTop: 1,
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
    color: 'firebrick'
  },

  fieldtext:{
        color: 'black',
        fontSize: 12,
        marginTop: 1,

    },
})

export default UsernameValidator;