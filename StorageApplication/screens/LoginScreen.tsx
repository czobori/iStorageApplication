import {TextInput,TouchableOpacity } from 'react-native';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import { containerStyles } from '../styles/element/containerStyle';
import { loginPageStyles } from '../styles/screenStyles/loginStyles';
import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';

export default function LoginScreen({ navigation }: RootTabScreenProps<'LoginScreen'>) {
  return (
    <View style={containerStyles.container}>
      <LinearGradient
        colors={['rgba(0,0,0,0.8)', 'transparent']}
        style={containerStyles.background}
      />
      <Text style={loginPageStyles.istorage}>IStorage</Text>
      <Text style={loginPageStyles.text}>A folytatáshoz kérem jelentkezzen be!</Text>
      <TextInput style={loginPageStyles.input} 
        placeholder="felhasználónév"  placeholderTextColor="#F4F6F7"/>
      <TextInput style={loginPageStyles.input} 
        placeholder="jelszó" placeholderTextColor="#F4F6F7" secureTextEntry={true}/>
      <TouchableOpacity style={loginPageStyles.button}>
          <Text style={loginPageStyles.feher}>Bejelentkezés</Text>
      </TouchableOpacity>
    </View>
  );
}