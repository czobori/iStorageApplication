import {TextInput,TouchableOpacity,Alert,Button,SafeAreaView,Text,View } from 'react-native';
import { loginPageStyles } from '../../styles/screenStyles/loginStyles';
import React from 'react';

const PasswordInput = () =>{
    return (
        <View>
            <TextInput style={loginPageStyles.input} 
        placeholder="jelszó" placeholderTextColor="#F4F6F7" secureTextEntry={true}/>
        </View>
    )
}
export default PasswordInput;