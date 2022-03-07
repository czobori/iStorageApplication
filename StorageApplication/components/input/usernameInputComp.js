import {TextInput,TouchableOpacity,Alert,Button,SafeAreaView,Text,View } from 'react-native';
import { loginPageStyles } from '../../styles/screenStyles/loginStyles';
import React from 'react';

const UserInput = ({value,setValue,placeholder,secureTextEntry}) =>{
    return (
        <View>
            <TextInput style={loginPageStyles.input} 
                value = {value} onChangeText = {setValue}  secureTextEntry={secureTextEntry}
                placeholder={placeholder} placeholderTextColor="#F4F6F7"/>
        </View>
    )
}
export default UserInput;