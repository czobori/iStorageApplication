import React, {useState} from 'react';
import {View} from '../components/Themed';
import { Alert } from 'react-native';
import {useForm} from 'react-hook-form'
import {RootTabScreenProps} from '../types';
import {containerStyles} from '../styles/element/containerStyle';
import UserInput from '../components/input/userInputComp';
import LoginButton from '../components/button/loginButtonComp';
import LoginText from '../components/texts/LoginTextsComp';
import GradientBack from '../components/linegradient/linegradent';

export default function LoginScreen({ navigation }: RootTabScreenProps<'LoginScreen'>) {
  const notMatch=()=>{Alert.alert("Hibás adatbevitel!");}
  const {control,handleSubmit, formState: {errors},watch,reset} = useForm({
    defaultValues:{
      username:"",
      password:""
  }});

  const onLoginPressed = (data: any) =>{ 
    const User={
      username : watch('username'),
      password: watch('password')
    }
    const option={
      method:'POST',
      body:JSON.stringify(User),
      headers:{'Content-Type': 'application/json'}
    }
    fetch("http://localhost:4550/Login",option)
      .then(res=>res.json())
      .then(res=>{
        console.log(res);
        if(res.message == 'auth_success') navigation.navigate("HomeScreen");
        else {console.log("error");notMatch();}
    })
    reset({
      username:"",
      password:"",
    });
  };

  return (
    <View style={containerStyles.container}>
      <GradientBack/>
      <LoginText/>
      <UserInput name="username" placeholder="felhasználónév" 
        control={control} rules={{required:'Felhasználónév megadása kötelező!'}} secureTextEntry={false}/>
      <UserInput name="password" placeholder="jelszó" control={control} 
        rules={{required:'Jelszó megadása kötelező!'}} secureTextEntry={true}/>
      <LoginButton onPress={handleSubmit(onLoginPressed)}/>
    </View>
  );
}