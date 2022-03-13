import React, {useState} from 'react';
import {View} from '../components/Themed';
import {useForm} from 'react-hook-form'
import {RootTabScreenProps} from '../types';
import {containerStyles} from '../styles/element/containerStyle';
import UserInput from '../components/input/userInputComp';
import LoginButton from '../components/button/loginButtonComp';
import LoginText from '../components/texts/LoginTextsComp';
import GradientBack from '../components/linegradient/linegradent';
import { Base64 } from 'js-base64';
import { getAllUserData } from '../data/getUserData';


export default function LoginScreen({ navigation }: RootTabScreenProps<'LoginScreen'>) {
  const {control,handleSubmit, formState: {errors},watch} = useForm();
  const onLoginPressed = (data: any) =>{
    const originusername = watch('username');
    const originPwd = watch('password');
    const id = watch('id');
    const User ={
      username: originusername,
      password:originPwd,
    }
    const options={
      method:'POST',
      body:JSON.stringify(User),
      headers:{
        'Content-Type':'application/json'
      }
    }

    fetch("http://localhost:4550/Login",options)
      .then(res=>res.json())
      .then(res=>console.log(res))
    
    //navigation.navigate("HomeScreen");
  };

  return (
    <View style={containerStyles.container}>
      <GradientBack/>
      
      <LoginText/>
      <UserInput name="username" placeholder="felhasználónév" 
        control={control} rules={{required:'Felhasználónév megadása kötelező!'}} secureTextEntry={false} />
      <UserInput name="password" placeholder="jelszó" control={control} 
         rules={{required:'Jelszó megadása kötelező!'}} secureTextEntry={true}/>
      <UserInput name="id" placeholder="azonosító" control={control} 
        rules={{required:'Azonosító megadása kötelező!'}} secureTextEntry={true}/>
     {/*} <LoginButton onPress={handleSubmit(onLoginPressed)}/>*/}
    </View>
  );
}