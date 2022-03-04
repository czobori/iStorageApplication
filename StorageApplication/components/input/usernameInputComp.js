import {TextInput,TouchableOpacity,Alert,Button,SafeAreaView,Text,View } from 'react-native';
import { loginPageStyles } from '../../styles/screenStyles/loginStyles';
import React from 'react';

const UsernameInput = () =>{
    return (
        <View>
             <TextInput style={loginPageStyles.input} 
        placeholder="felhasználónév"  placeholderTextColor="#F4F6F7"/>
        </View>
    )
}
export default UsernameInput;