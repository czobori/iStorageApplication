import React, {Component} from 'react';
import {Text, View, Dimensions} from 'react-native';

export default class UsersNumber extends Component{
    state={
        ember:0
    }
    fetchData = async()=>{
        const person = await(await fetch ('http://localhost:4550/workersNumber')).json();
        this.setState({ember:person.workersCount});
    }
    componentDidMount(){
        this.fetchData();
    }
    render(){
        return(
            <View>
                <Text>A raktárban {this.state.ember} fő dolgozik</Text>
            </View>
        )
    }
}