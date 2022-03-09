import {View} from '../components/Themed';
import {RootTabScreenProps} from '../types';
import {containerStyles} from '../styles/element/containerStyle';
import React, {useState} from 'react';
import UserInput from '../components/input/userInputComp';
import LoginButton from '../components/button/loginButtonComp';
import LoginText from '../components/texts/LoginTextsComp';
import GradientBack from '../components/linegradient/linegradent';

export default function LoginScreen({ navigation }: RootTabScreenProps<'LoginScreen'>) {
  const [username,setUsername] = useState('');
  const [password,setPassword] = useState('');
  const onLoginPressed = () =>{navigation.navigate("HomeScreen");}

  return (
    <View style={containerStyles.container}>
      <GradientBack/>
      <LoginText/>
      <UserInput placeholder="felhasználónév" value={username} setValue={setUsername} secureTextEntry={false}/>
      <UserInput placeholder="jelszó" value={password} setValue={setPassword} secureTextEntry={true}/>
      <LoginButton onPress={onLoginPressed}/>
    </View>
  );
}

