import {TextInput,TouchableOpacity,Alert,Button,SafeAreaView,Text,View } from 'react-native';
import { loginPageStyles } from '../../styles/screenStyles/loginStyles';
import React from 'react';

const LoginButton = () =>{
    return (
        <View>
            <TouchableOpacity style={loginPageStyles.button}>
                <Text style={loginPageStyles.feher}>Bejelentkezés</Text>
            </TouchableOpacity>
        </View>
    )
}
export default LoginButton;