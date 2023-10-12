import React from "react";
import { View,Text, SafeAreaView, StyleSheet, TextInput, Button } from "react-native";
import { useState } from "react";

const Login = () => {

    const [ name, setName ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ result, setResult] = useState('')

    const handleLogin = () => {
        setResult(`${name} with ${password} `)
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.loginContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Name"
                    value={name}
                    onChangeText={setName}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Password"
                    value={password}
                    onChangeText={setPassword}
                />
                <View style={styles.buttonContainer}>

                <Button style={styles.button} title="Login" onPress={handleLogin}/>
                </View>
                
            </View>
            <Text style={styles.loginText}>{result}</Text>
        </SafeAreaView>

        
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'green'
    },
    
    
    loginContainer: {
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 10,
        padding: 10,
        alignItems: 'center',
    },

    input: {
        height: 40,
        margin: 12,
        width: 200,
        borderWidth: 1,
        padding: 10,
        borderRadius: 5, // Add a border radius to the input fields
        marginBottom: 10, // Add some spacing between input fields
    },

    buttonContainer: {
        backgroundColor: 'yellow',
        borderRadius: 5,
        width: 150,
    },

    loginText:{
        marginTop: 50,
    }

})

export default Login;