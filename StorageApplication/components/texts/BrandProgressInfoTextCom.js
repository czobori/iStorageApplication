import {Text,View } from 'react-native';
import { homePageStyles } from '../../styles/screenStyles/homeStyle';
import React from 'react';

const BrandInfoText = () =>{
    return (
        <View>
            <Text style={homePageStyles.title}>Márkák a raktárban</Text>
            <Text style={homePageStyles.info}>(A diagram belülről kifelé, a magyarázat fentről lefelé)</Text>
            <Text style={homePageStyles.info}>Bővebb információ a "Raktáron" menüpontban található</Text>
        </View>
    )
}
export default BrandInfoText;