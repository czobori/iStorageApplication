import React from 'react';
import {TextInput,View,Text} from 'react-native';
import {Controller} from 'react-hook-form'
import { loginPageStyles } from '../../styles/screenStyles/loginStyles';
import * as Colors from "../../const/colors";

const UserInput = ({control,name,rules={},placeholder,secureTextEntry}) =>{
    return (
        <Controller control={control} name={name} rules={rules} render={({field: {value,onChange,onBlur},fieldState:{error}})=>(
            <>
                <View>
                    <TextInput value={value} onChangeText={onChange} onBlur={onBlur} secureTextEntry={secureTextEntry}
                        placeholder={placeholder} placeholderTextColor={Colors.placeholder}
                        style={[loginPageStyles.input,
                        {borderColor: error ? Colors.errorred:Colors.inputborder},{borderWidth: error? 2 : 1}]}/>
                    {error && (<Text style={loginPageStyles.errortext}>{error.message || 'Hiba!'}</Text>)}
                </View>
            </>
        )}/>
    )
}
export default UserInput;