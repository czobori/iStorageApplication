import {View} from '../components/Themed';
import {RootTabScreenProps} from '../types';
import {containerStyles} from '../styles/element/containerStyle';
import React from 'react';
import GradientBack from '../components/linegradient/linegradent';
import * as Components from "../const/allComponents";

export default function LogoutScreen({ navigation }: RootTabScreenProps<'LogoutScreen'>) {
  const onLogoutPressed = () =>{navigation.navigate("LoginScreen");}
  return (
    <View style={containerStyles.container}>
      <GradientBack/>
      <Components.LogoutText/>
      <Components.LogoutButton onPress={onLogoutPressed}/>
    </View>
  );
}