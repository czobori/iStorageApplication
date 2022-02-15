import { StyleSheet,TextInput,TouchableOpacity,Button } from 'react-native';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import { loginPageStyles } from '../styles/screenStyles/loginStyles';
import React from 'react';

//https://stackoverflow.com/questions/66224134/login-form-expo
export default function LoginScreen({ navigation }: RootTabScreenProps<'LoginScreen'>) {
  return (
    <View style={loginPageStyles.container}>
      <Text style={loginPageStyles.istorage}>IStorage</Text>
      <Text style={loginPageStyles.text}>A folytatáshoz kérem jelentkezzen be!</Text>
      <TextInput style={loginPageStyles.input} 
        placeholder="felhasználónév"  placeholderTextColor="#F4F6F7"
        />
      <TextInput style={loginPageStyles.input} 
        placeholder="jelszó" placeholderTextColor="#F4F6F7" secureTextEntry={true}/>
      <TouchableOpacity style={loginPageStyles.button}>
          <Text>Bejelentkezés</Text>
      </TouchableOpacity>
    </View>
  );
}