import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { containerStyles } from '../../styles/element/containerStyle';

const GradientBack = () =>{
    return (
        <LinearGradient colors={['rgba(0,0,0,0.8)', 'transparent']} style={containerStyles.background}/>
    )
}
export default GradientBack;