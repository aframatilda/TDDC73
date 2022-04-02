// *********************************************************
// Account registration
// Authors: Afra Farkhooy & Victoria Stråberg
// Course: TDDC73
// *********************************************************

import React, { Component } from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import UsernameValidator from './UsernameValidator';
import EmailValidator from './EmailValidator';
import PasswordValidator from './PasswordValidator';

class RegistrationForm extends Component {

    constructor(props){
        super(props);
        //Creating Ref
        this.ChildElement1 = React.createRef(); //UsernameValidator
        this.ChildElement2 = React.createRef(); //EmailValidator
        this.ChildElement3 = React.createRef(); //PasswordValidator
    }

    //Submit form checking if all the requirements are achieved 
    submitForm = () => {
        //Accessing the current attribute (true/false) of the ref
        const childelement1 = this.ChildElement1.current; 
        const childelement2 = this.ChildElement2.current;
        const childelement3 = this.ChildElement3.current;
    
        if(childelement1.state.isValidUsername && childelement2.state.isValidEmail && childelement3.state.passwordLength 
            && childelement3.state.isUpperCase && childelement3.state.isLowerCase && childelement3.state.containsNumbers 
            && childelement3.state.containsSymbols) {
            alert("Form submitted");
        }
        else {
            alert("Form not submitted, please fill in the fields correctly");
        }
    }

    render() {
        return(
            <View style = {styles.container}>
                <Image style={styles.logo} source={require('../assets/images/logotype.png')}/> 
                <Text style = {styles.header}> Account Registration </Text>

                {/* Calling the files that handles the textinput fields */}
                <UsernameValidator ref = {this.ChildElement1}/>
                <EmailValidator ref = {this.ChildElement2}/>
                <PasswordValidator ref = {this.ChildElement3}/> 

                {/* Calling the submitForm function when pressing submit */}
                <TouchableOpacity style = {styles.submitButton}
                    onPress = { () => this.submitForm()}>
                    <Text style = {styles.submitButtonText}> Create Account! </Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        alignSelf: 'stretch',
        backgroundColor:"white",
        padding: 10,    
        paddingBottom: 10,
        borderRadius: 20,
        borderWidth: 5,
        borderColor: '#68a0cf'
    },
    logo: {
        width: 60,
        height: 60,
        alignSelf: 'center',
        marginTop: 5,
        marginBottom: 5
    },
    header:{
        fontSize: 22,
        color: 'black',
        paddingBottom: 10,
        marginBottom: 20,
        borderBottomColor: '#68a0cf',
        borderBottomWidth: 1,
        textAlign: 'center'
    },
    textinput:{
        alignSelf: 'stretch',
        height: 40,
        marginBottom: 10,
        color: 'black',
        borderBottomColor: '#f8f8f8',
        borderBottomWidth: 1
    },
    submitButton:{
        alignSelf: 'stretch',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#68a0cf',
        marginTop: 30,
        marginLeft: 20,
        marginRight: 20,
        borderRadius: 20
    },
    submitButtonText:{
        color: 'black',
        fontWeight: 'bold'
    }
})

export default RegistrationForm;