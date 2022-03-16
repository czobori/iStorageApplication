import React, {Component} from 'react';
import {Text, View} from 'react-native';
import { MaterialCommunityIcons} from '@expo/vector-icons';
import { deliveryCompStyles } from '../styles/element/ondeliveryStyle';

export default class OnDelivery extends Component{
    state ={
        come:0
    }
    fetchData= async()=>{
        const darab = await (await fetch ('http://localhost:4550/deliveryToStorage')).json();
        this.setState({come:darab.raktarbaJon});
    }
    componentDidMount(){this.fetchData();}
    
    render(){
        return(
            <View style={deliveryCompStyles.div}>
                <MaterialCommunityIcons name="truck-fast-outline" style={deliveryCompStyles.icons} />
                <Text style={deliveryCompStyles.text}>Beérkező készülékek száma {this.state.come} db</Text>
                <Text style={deliveryCompStyles.info}>Bővebb információ a "Raktár/Beérkező" menüpontban</Text>
            </View>
        )
    }
}