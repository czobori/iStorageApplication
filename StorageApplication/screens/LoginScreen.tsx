import React, {useState} from 'react';
import {View} from '../components/Themed';
import {useForm} from 'react-hook-form'
import {RootTabScreenProps} from '../types';
import {containerStyles} from '../styles/element/containerStyle';
import GradientBack from '../components/linegradient/linegradent';
import { url } from '../const/url';
import * as Components from "../const/allComponents";

export default function LoginScreen({ navigation }: RootTabScreenProps<'LoginScreen'>) {
  const {control,handleSubmit, formState: {errors},watch,reset} = useForm({
    defaultValues:{username:"",password:""}
  });

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
    fetch(url+'/Login',option)
      .then(res=>res.json())
      .then(res=>{res.message =="auth_success" ? navigation.navigate("HomeScreen"): console.log("not match");})
    setTimeout(() => reset({username:"",password:""}), 300);
  };
  
  return (
    <View style={containerStyles.container}>
      <GradientBack/>
      <Components.LoginText/>
      <Components.UserInput name="username" placeholder="felhasználónév" 
        control={control} rules={{required:'Felhasználónév megadása kötelező!'}} secureTextEntry={false}/>
      <Components.UserInput name="password" placeholder="jelszó" control={control} 
        rules={{required:'Jelszó megadása kötelező!'}} secureTextEntry={true}/>
      <Components.LoginButton onPress={handleSubmit(onLoginPressed)}/>
    </View>
  );
}