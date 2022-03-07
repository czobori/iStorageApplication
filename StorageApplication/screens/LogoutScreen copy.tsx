import {Alert,Text} from 'react-native';
import { View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import { containerStyles } from '../styles/element/containerStyle';
import React, {useState} from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import LogoutButton from '../components/button/logoutButtonComp';
import { logoutPageStyles } from '../styles/screenStyles/logoutStyles';
import LogoutText from '../components/texts/LogoutTextsComp';


export default function LogoutScreen({ navigation }: RootTabScreenProps<'LogoutScreen'>) {
  return (
    <View style={containerStyles.container}>
      <LinearGradient colors={['rgba(0,0,0,0.8)', 'transparent']} style={containerStyles.background}/>
      <LogoutText/>
      <LogoutButton/>
    </View>
  );
}