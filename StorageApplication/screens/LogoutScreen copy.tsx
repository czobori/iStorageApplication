import { View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import { containerStyles } from '../styles/element/containerStyle';
import React, {useState} from 'react';
import LogoutButton from '../components/button/logoutButtonComp';
import LogoutText from '../components/texts/LogoutTextsComp';
import GradientBack from '../components/linegradient/linegradent';


export default function LogoutScreen({ navigation }: RootTabScreenProps<'LogoutScreen'>) {
  const onLogoutPressed = () =>{navigation.navigate("LoginScreen");}
  return (
    <View style={containerStyles.container}>
      <GradientBack/>
      <LogoutText/>
      <LogoutButton onPress={onLogoutPressed}/>
    </View>
  );
}