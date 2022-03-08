import {Text,View } from 'react-native';
import { stockComponentStyles } from '../../styles/componentStyles/StockDataComponentStyle';
import React from 'react';

const OrderInText = () =>{
    return (
        <View>
            <Text style={stockComponentStyles.title}>Berendelt készülékek</Text>
            <Text style={stockComponentStyles.remark}>(hamarosan érkeznek)</Text>
        </View>
    )
}
export default OrderInText;