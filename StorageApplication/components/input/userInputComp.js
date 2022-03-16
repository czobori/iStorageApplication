import React from 'react';
import {TextInput,View,Text} from 'react-native';
import {Controller} from 'react-hook-form'
import { loginPageStyles } from '../../styles/screenStyles/loginStyles';

const UserInput = ({control,name,rules={},placeholder,secureTextEntry}) =>{
    
    return (
        <Controller control={control} name={name} rules={rules} render={({field: {value,onChange,onBlur},fieldState:{error}})=>(
            <>
                <View>
                    <TextInput value={value} onChangeText={onChange} onBlur={onBlur} secureTextEntry={secureTextEntry}
                        placeholder={placeholder} placeholderTextColor="#F4F6F7"
                        style={[loginPageStyles.input,{borderColor: error ? '#FF1000':'#FDFEFE'},{borderWidth: error? 2 : 1}]}/>
                    {error && (<Text style={loginPageStyles.errortext}>{error.message || 'Hiba!'}</Text>)}
                </View>
            </>
        )}/>
    )
}
export default UserInput;