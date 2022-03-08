import React, {useState} from 'react';
import { RootTabScreenProps } from '../types';
import { containerStyles } from '../styles/element/containerStyle';
import { ScrollView } from 'react-native-gesture-handler';
import GradientBack from '../components/linegradient/linegradent';
import {Text,View,Pressable } from 'react-native';
import { storagePageStyles } from '../styles/screenStyles/storageStyle';
import ArriveButton from '../components/button/arriveButtonComp';
import InButton from '../components/button/instoreageButtonComp';
import OutButton from '../components/button/outestorageButtonComp';


export default function UsersScreen({ navigation }: RootTabScreenProps<'UsersScreen'>) {

    const onArrive = () =>{navigation.navigate("OrderInScreen");}
    const onInstore = () =>{navigation.navigate("PhoneHereScreen");}
    const onSent = () =>{navigation.navigate("OrderOutScreen");}

    return(
        <View style={containerStyles.container}>
            <GradientBack/>
            <Text style={storagePageStyles.title}>Készülékek</Text>
            <View  style={{ flexDirection: 'row'}}>
                <ArriveButton onPress={onArrive}/>
                <InButton onPress={onInstore}/>
                <OutButton onPress={onSent}/>
            </View>
        </View>
    )
}