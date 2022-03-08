import {Text,View,Pressable } from 'react-native';
import React from 'react';
import { storagePageStyles } from '../../styles/screenStyles/storageStyle';
import { MaterialCommunityIcons} from '@expo/vector-icons';

const OutButton = ({onPress}) =>{
    return (
        <View>
            <Pressable style={storagePageStyles.button} onPress={onPress}>
                <MaterialCommunityIcons name="truck-check-outline" style={storagePageStyles.icon} />
                <Text style={storagePageStyles.text}>Kimenő</Text>
            </Pressable>
        </View>
    )
}
export default OutButton;