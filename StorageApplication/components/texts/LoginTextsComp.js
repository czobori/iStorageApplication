import {TextInput,TouchableOpacity,Alert,Button,SafeAreaView,Text,View } from 'react-native';
import { loginPageStyles } from '../../styles/screenStyles/loginStyles';
import React from 'react';

const LoginText = () =>{
    return (
        <View>
            <Text style={loginPageStyles.istorage}>IStorage</Text>
            <Text style={loginPageStyles.text}>A folytatáshoz kérem jelentkezzen be!</Text>
        </View>
    )
}
export default LoginText;