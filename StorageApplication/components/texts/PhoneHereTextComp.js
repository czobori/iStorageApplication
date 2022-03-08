import {TextInput,TouchableOpacity,Alert,Button,SafeAreaView,Text,View } from 'react-native';
import { phoneStyles } from '../../styles/element/phoneInStyles';
import React from 'react';
import Moment from 'moment';

let today = new Date().toLocaleDateString();

const PhoneHereText = () =>{
    return (
        <View>
           <Text style={phoneStyles.title}>Raktáron lévő készülékek</Text>
            <Text style={phoneStyles.remark}>Különböző kapacitással és színnel</Text>
            <Text style={phoneStyles.today}>{Moment(today).format('YYYY.MM.DD')}</Text>
        </View>
    )
}
export default PhoneHereText;