import {Text,View,Pressable } from 'react-native';
import { logoutPageStyles } from '../../styles/screenStyles/logoutStyles';
import React from 'react';

const LogoutButton = ({onPress}) =>{
    return (
        <View>
            <Pressable onPress={onPress} style={logoutPageStyles.button} >
                <Text style={logoutPageStyles.white}>Kijelentkezés</Text>
            </Pressable>
        </View>
    )
}
export default LogoutButton;