import {Text,View,Pressable } from 'react-native';
import { loginPageStyles } from '../../styles/screenStyles/loginStyles';
import React from 'react';
import { storagePageStyles } from '../../styles/screenStyles/storageStyle';
import { FontAwesome5,MaterialCommunityIcons,Entypo,Fontisto,MaterialIcons,FontAwesome} from '@expo/vector-icons';

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