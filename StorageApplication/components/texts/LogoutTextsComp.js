import {Text,View } from 'react-native';
import { logoutPageStyles } from '../../styles/screenStyles/logoutStyles';
import React from 'react';

const LogoutText = () =>{
    return (
        <View>
            <Text style={logoutPageStyles.text}>
                A kijelentkezés megerősítéséhez kérem, kattintson a Kijelentkezés gombra!
            </Text>
        </View>
    )
}
export default LogoutText;