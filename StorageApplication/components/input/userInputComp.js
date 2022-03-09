import React from 'react';
import {TextInput,View } from 'react-native';
import {Controller} from 'react-hook-form'
import { loginPageStyles } from '../../styles/screenStyles/loginStyles';

const UserInput = ({control,name,rules={},placeholder,secureTextEntry}) =>{
    return (
        <View>
            <Controller control={control} name={name} rules={rules} render={({field: {value,onChange,onBlur}})=>(
                <TextInput value={value} onChangeText={onChange} onBlur={onBlur} secureTextEntry={secureTextEntry}
                    placeholder={placeholder} placeholderTextColor="#F4F6F7" style={loginPageStyles.input}/>
            )}/>
        </View>
    )
}
export default UserInput;