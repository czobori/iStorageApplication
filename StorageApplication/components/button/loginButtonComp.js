import {Text,View,Pressable } from 'react-native';
import { loginPageStyles } from '../../styles/screenStyles/loginStyles';
import React from 'react';

const LoginButton = ({onPress}) =>{
    return (
        <View>
            <Pressable onPress={onPress} style={loginPageStyles.button}>
                <Text style={loginPageStyles.feher}>Bejelentkezés</Text>
            </Pressable>
        </View>
    )
}
export default LoginButton;