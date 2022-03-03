import React, {Component} from 'react';
import {Text, View} from 'react-native';
import { MaterialCommunityIcons} from '@expo/vector-icons';
import { deliveryCompStyles } from '../styles/element/ondeliveryStyle';

export default class OnDelivery extends Component{
    state ={
        erkezik:0
    }
    fetchData= async()=>{
        const darab = await (await fetch ('http://localhost:4550/deliveryToStorage')).json();
        this.setState({erkezik:darab.raktarbaJon});
    }
    componentDidMount(){
        this.fetchData();
    }
    render(){
        return(
            <View style={deliveryCompStyles.div}>
                <MaterialCommunityIcons name="truck-fast-outline" style={deliveryCompStyles.icons} />
                <Text style={deliveryCompStyles.text}>Hamarosan új készülékek érkeznek</Text>
                <Text style={deliveryCompStyles.text}>({this.state.erkezik} darab)</Text>
            </View>
        )
    }
}