import {Text,View,Pressable } from 'react-native';
import { loginPageStyles } from '../../styles/screenStyles/loginStyles';
import React from 'react';
import { storagePageStyles } from '../../styles/screenStyles/storageStyle';
import { FontAwesome5,MaterialCommunityIcons,Entypo,Fontisto,MaterialIcons,FontAwesome} from '@expo/vector-icons';

const InButton = ({onPress}) =>{
    return (
        <View>
            <Pressable style={storagePageStyles.button} onPress={onPress}>
            <FontAwesome name="inbox" style={storagePageStyles.icon} />
                    <Text style={storagePageStyles.text}>Raktáron</Text>
                </Pressable>
        </View>
    )
}
export default InButton;