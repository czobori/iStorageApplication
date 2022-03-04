import {TextInput,TouchableOpacity,Alert,Button,SafeAreaView } from 'react-native';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import { containerStyles } from '../styles/element/containerStyle';
import { loginPageStyles } from '../styles/screenStyles/loginStyles';
import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import UsernameInput from '../components/input/usernameInputComp';
import PasswordInput from '../components/input/passwordInputComp';
import LoginButton from '../components/button/loginButtonComp';
import LoginText from '../components/texts/LoginTextsComp';

const sikeres = false;
const onPress = ()=>{
  Alert.alert(
    'Sikeres bejelentkezés',
    'Üdvözlünk téged az iStorage raktárkezelő program mobil alkalmazásában.',
    [{text:'👋'}]
  );
}

export default function LoginScreen({ navigation }: RootTabScreenProps<'LoginScreen'>) {
  const login = false;
  return (
    <View style={containerStyles.container}>
      <LinearGradient colors={['rgba(0,0,0,0.8)', 'transparent']} style={containerStyles.background}/>
      <LoginText/>
      <UsernameInput/>
      <PasswordInput/>
      <LoginButton/>
    </View>
  );
}