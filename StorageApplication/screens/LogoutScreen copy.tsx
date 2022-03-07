import {Alert} from 'react-native';
import { View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import { containerStyles } from '../styles/element/containerStyle';
import React, {useState} from 'react';
import { LinearGradient } from 'expo-linear-gradient';

export default function LogoutScreen({ navigation }: RootTabScreenProps<'LoginScreen'>) {
  return (
    <View style={containerStyles.container}>
      <LinearGradient colors={['rgba(0,0,0,0.8)', 'transparent']} style={containerStyles.background}/>
      
    </View>
  );
}