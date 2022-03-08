import { View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import { containerStyles } from '../styles/element/containerStyle';
import React, {useState} from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import UserInput from '../components/input/usernameInputComp';
import LoginButton from '../components/button/loginButtonComp';
import LoginText from '../components/texts/LoginTextsComp';

export default function LoginScreen({ navigation }: RootTabScreenProps<'LoginScreen'>) {
  const [username,setUsername] = useState('');
  const [password,setPassword] = useState('');

  const onLoginPressed = () =>{
    console.log("Login");
    navigation.navigate("HomeScreen");
  }

  return (
    <View style={containerStyles.container}>
      <LinearGradient colors={['rgba(0,0,0,0.8)', 'transparent']} style={containerStyles.background}/>
      <LoginText/>
      <UserInput placeholder="felhasználónév" value={username} setValue={setUsername} secureTextEntry={false}/>
      <UserInput placeholder="jelszó" value={password} setValue={setPassword} secureTextEntry={true}/>
      <LoginButton onPress={onLoginPressed}/>
    </View>
  );
}

