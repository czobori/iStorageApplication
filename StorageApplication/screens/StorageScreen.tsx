import React from 'react';
import {RootTabScreenProps} from '../types';
import {Text,View} from 'react-native';
import {containerStyles} from '../styles/element/containerStyle';
import {storagePageStyles} from '../styles/screenStyles/storageStyle';
import GradientBack from '../components/linegradient/linegradent';
import * as Components from '../const/allComponents';

export default function UsersScreen({ navigation }: RootTabScreenProps<'UsersScreen'>) {
    const onArrive = () =>{navigation.navigate("OrderInScreen");}
    const onInstore = () =>{navigation.navigate("PhoneHereScreen");}
    const onSent = () =>{navigation.navigate("OrderOutScreen");}
    return(
        <View style={containerStyles.container}>
            <GradientBack/>
            <Text style={storagePageStyles.title}>Készülékek</Text>
            <View  style={{ flexDirection: 'row'}}>
                <Components.ArriveButton onPress={onArrive}/>
                <Components.InButton onPress={onInstore}/>
                <Components.OutButton onPress={onSent}/>
            </View>
        </View>
    )
}