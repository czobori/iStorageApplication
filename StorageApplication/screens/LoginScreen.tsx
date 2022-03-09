import React, {useState} from 'react';
import {View} from '../components/Themed';
import {useForm,Controller} from 'react-hook-form'
import {RootTabScreenProps} from '../types';
import {containerStyles} from '../styles/element/containerStyle';
import UserInput from '../components/input/userInputComp';
import LoginButton from '../components/button/loginButtonComp';
import LoginText from '../components/texts/LoginTextsComp';
import GradientBack from '../components/linegradient/linegradent';

export default function LoginScreen({ navigation }: RootTabScreenProps<'LoginScreen'>) {
  const {control,handleSubmit, formState: {errors}} = useForm();
  const onLoginPressed = (data: any) =>{
    console.log(data)
    // validation 

    
    //navigation.navigate("HomeScreen");
  };

  return (
    <View style={containerStyles.container}>
      <GradientBack/>
      <LoginText/>
      <UserInput name="username"placeholder="felhasználónév" control={control} rules={{required:true}} secureTextEntry={false}/>
      <UserInput name="password" placeholder="jelszó" control={control} rules={{required:true}} secureTextEntry={true}/>
      <LoginButton onPress={handleSubmit(onLoginPressed)}/>
    </View>
  );
}