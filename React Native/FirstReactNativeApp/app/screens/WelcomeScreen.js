import React from 'react';
import { ImageBackground, StyleSheet, View, Image, Text } from 'react-native';

function WelcomeScreen(props) {
    return (
        <ImageBackground 
            style={styles.background}
            source={require('../assets/background.jpg')}
        >
            <View style={styles.logocontainer}>
                <Image style={styles.porscheLogo} source={require('../assets/bmw-logo.png')}></Image>
                <Text style={styles.heading}>BMW shop</Text>
            </View>


            <View style={styles.loginButton}></View>
            <View style={styles.registerButton}></View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'flex-end',
    },
    loginButton: {
        width: '100%',
        height: 70,
        backgroundColor: '#fc5c65',
    },
    registerButton: {
        width: '100%',
        height: 70,
        backgroundColor: '#4ecdc4',
    },
    porscheLogo: {
        position: 'absolute',
        justifyContent: 'center',
        alignSelf: 'center',
        width: 100,
        height: 100,
        top: 50,
    },
    heading: {
        justifyContent: 'center',
        alignContent: 'center',
        color: 'white',
        fontSize: 30,
    },
    logocontainer: {
        position: 'absolute',
        top: 70,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
    }
})

export default WelcomeScreen;