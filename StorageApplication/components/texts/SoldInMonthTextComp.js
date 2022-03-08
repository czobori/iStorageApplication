import {Text,View } from 'react-native';
import { soldsComponentStyles } from '../../styles/componentStyles/SoldsDataComponent';
import React from 'react';
import Moment from 'moment';

let today = new Date().toLocaleDateString();

const SoldInMonthText = () =>{
    return (
        <View>
            <Text style={soldsComponentStyles.soldstext}>ELADOTT TERMÉKEK</Text>
            <Text style={soldsComponentStyles.actualmonth}>{Moment(today).format('YYYY.MMMM')}</Text>
        </View>
    )
}
export default SoldInMonthText;