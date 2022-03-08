import {Text,View,Pressable } from 'react-native';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { backButtonStyles } from '../../styles/element/backButtonStyle';

const BackButton = ({onPress}) =>{
    return (
        <View>
            <Pressable onPress={onPress}>
                <Ionicons name="arrow-back-circle" style={backButtonStyles.icon} />       
            </Pressable>
        </View>
    )
}
export default BackButton;