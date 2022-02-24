import React, {Component} from 'react';
import {Text, View,Dimensions} from 'react-native';
import * as Progress from 'react-native-progress';
import { warehousefullStyle } from '../styles/element/progressbarStyle';
export default class WarehouseSaturation extends Component{
    state ={
        szam:0,
    }
    
    fetchData= async()=>{
        const currently = await (await fetch ('http://localhost:4550/currentlyInStock')).json();
        this.setState({szam:currently.number/5000});
    }
    componentDidMount(){
        this.fetchData();
    }
    
    render(){
        const szazalekkerekitve = Math.round((this.state.szam*100)*100)/100;
        return(
            <View style={warehousefullStyle.div}>
                <Text style={warehousefullStyle.text}>Raktár teltsége: {szazalekkerekitve}%</Text>
                <Progress.Bar progress={this.state.szam} width={Dimensions.get('window').width - 100} style={warehousefullStyle.bar} />
            </View>
        )
    }
}