import React, {Component} from 'react';
import {Text, View,Dimensions} from 'react-native';
import * as Progress from 'react-native-progress';
import { warehousefullStyle } from '../styles/element/progressbarStyle';
import { url } from '../const/url';

export default class WarehouseSaturation extends Component{
    state ={
        num:0,
    }
    fetchData= async()=>{
        const currently = await (await fetch (url+'/currentlyInStock')).json();
        this.setState({num:currently.number/5000});
    }
    componentDidMount(){this.fetchData();}
    
    render(){
        const szazalekkerekitve = Math.round((this.state.num*100)*100)/100;
        return(
            <View style={warehousefullStyle.div}>
                <Text style={warehousefullStyle.text}>Raktár teltsége: {szazalekkerekitve}%</Text>
                <Progress.Bar progress={this.state.num} width={Dimensions.get('window').width - 100} style={warehousefullStyle.bar} />
            </View>
        )
    }
}