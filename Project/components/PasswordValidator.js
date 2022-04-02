// *********************************************************
// Account registration
// Authors: Afra Farkhooy & Victoria Stråberg
// Course: TDDC73
// *********************************************************

import React, { Component } from 'react'
import { View, Text, TextInput, StyleSheet } from 'react-native'

class PasswordValidator extends Component {

    constructor(props){
        super(props);
        this.state = {
            password: "",
            passwordLength: false,
            containsNumbers: false,
            isUpperCase: false,
            isLowerCase: false,
            containsSymbols: false
        }
    }

    //Check the length of the password - must be over 7 characters
    checkForLength(string){
        var matches = string.length;
        this.setState({
        passwordLength: matches > 7 ? true : false
        });      
    }


    // Check for upper case letter
    checkForUpperCase(string){
        var matches = string.match(/[A-Z]/);
        this.setState({
        isUpperCase: matches != null ? true : false
        });
    }

    // Check for lower case letter
    checkForLowerCase(string){
        var matches = string.match(/[a-z]/);
        this.setState({
        isLowerCase: matches != null ? true : false
        });
    }

    // Check for numbers
    checkForNumbers(string){
        var matches = string.match(/\d+/g);
        this.setState({
        containsNumbers: matches != null ? true : false
        });
    }

    // Check for symbols
    checkForSymbols(string){
        var matches = string.match(/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/) 
        this.setState({
        containsSymbols: matches != null ? true : false
        });
    }

    // Handle password 
    handlePassword = e =>{
        this.checkForLength(e);
        this.checkForUpperCase(e);
        this.checkForLowerCase(e);
        this.checkForNumbers(e);
        this.checkForSymbols(e);
    }

    render(){
        return(
            <View>
                <Text style = {styles.fieldtext}> Password: </Text>
                <TextInput 
                    style={styles.textinput} 
                    secureTextEntry={false} 
                    onChangeText={this.handlePassword}
                >
                </TextInput>

                <Text style = {styles.textpassword}> The password must have: </Text>
                <Text style={[styles.messagetext, this.state.passwordLength ? styles.valid : styles.invalid]}> At least 8 characters</Text>
                <Text style={[styles.messagetext, this.state.isUpperCase ? styles.valid : styles.invalid]}> At least 1 uppercase letter</Text>
                <Text style={[styles.messagetext, this.state.isLowerCase ? styles.valid : styles.invalid]}> At least 1 lowercase letter</Text>
                <Text style={[styles.messagetext, this.state.containsNumbers ? styles.valid : styles.invalid]}> At least 1 number</Text>
                <Text style={[styles.messagetext, this.state.containsSymbols ? styles.valid : styles.invalid]}> At least 1 special character</Text>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    textpassword: {
        paddingBottom: 2,
        fontSize: 11,
        color: 'black'
    },

    messagetext: {
        fontSize: 10,
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
    },

    textinput:{
        alignSelf: 'stretch',
        height: 40,
        marginBottom: 10,
        color: 'black',
        borderBottomColor: '#68a0cf',
        borderBottomWidth: 1,
    },
})

export default PasswordValidator;