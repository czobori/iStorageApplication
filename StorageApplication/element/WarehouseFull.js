import React, {Component} from 'react';
import {Text, View} from 'react-native';
import * as Progress from 'react-native-progress';


export default class WarehouseSaturation extends Component{
    state ={
        szam:0
    }
    
    fetchData= async()=>{
        const currently = await (await fetch ('http://localhost:4550/currentlyInStock')).json();
        this.setState({szam:currently.number/5000});
        console.log(currently.number);
    }
    componentDidMount(){
        this.fetchData();
    }
    render(){
        console.log(this.state.szam);
        return(
            <View>
                <Text>Raktár teltsége</Text>
                <Text>{this.state.szam}</Text>
                <Progress.Bar progress={this.state.szam} width={240}/>
            </View>
        )
    }
}