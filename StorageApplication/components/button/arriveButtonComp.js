import {Text,View,Pressable } from 'react-native';
import React from 'react';
import { storagePageStyles } from '../../styles/screenStyles/storageStyle';
import {Fontisto} from '@expo/vector-icons';

const ArriveButton = ({onPress}) =>{
    return (
        <View>
            <Pressable style={storagePageStyles.button} onPress={onPress}>
                <Fontisto name="truck"style={storagePageStyles.icon} />
                <Text style={storagePageStyles.text}>Beérkező</Text>
            </Pressable>
        </View>
    )
}
export default ArriveButton;