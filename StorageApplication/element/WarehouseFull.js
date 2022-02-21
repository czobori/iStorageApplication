import React, {Component} from 'react';
import {Text, View} from 'react-native';
import * as Progress from 'react-native-progress';


export default class WarehouseSaturation extends Component{
    state ={
        szam:0
    }
    
    fetchData= async()=>{
        const currently = await (await fetch ('http://localhost:4550/currentlyInStock')).json();
        const somuch = await (await fetch('http://localhost:4550/soMuchSpace')).json();
        this.setState({szam:currently/5000});
        console.log(somuch);
        console.log(currently);
    }
    componentDidMount(){
        this.fetchData({szam:100});
    }
    render(){

        return(
            <View>
                <Text>Raktár teltsége</Text>
                <Text>{this.state.szam}</Text>
                {/*<Progress.Bar progress={this.state.szam} width={240}/>*/}
                <Progress.Bar progress={0.3} maxwidth={240}/>
            </View>
        )
    }
}