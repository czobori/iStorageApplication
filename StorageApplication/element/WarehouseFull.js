import React, {Component} from 'react';
import {Text, View} from 'react-native';
import * as Progress from 'react-native-progress';
import { progressBarStyles } from '../styles/element/progressbarStyle';
export default class WarehouseSaturation extends Component{
    state ={
        szam:0
    }
    
    fetchData= async()=>{
        const currently = await (await fetch ('http://localhost:4550/currentlyInStock')).json();
        this.setState({szam:currently.number/5000});
    }
    componentDidMount(){
        this.fetchData();
    }
    render(){
        return(
            <View>
                <Text>Raktár teltsége: {this.state.szam*100}%</Text>
                <Progress.Bar progress={this.state.szam} width={240} style={progressBarStyles.bar} />
            </View>
        )
    }
}