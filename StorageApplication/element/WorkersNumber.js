import React, {Component} from 'react';
import {Text, View} from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { workersCountStyle } from '../styles/element/workNumStyle';

export default class UsersNumber extends Component{
    state={
        people:0
    }
    fetchData = async()=>{
        const person = await(await fetch ('http://localhost:4550/workersNumber')).json();
        this.setState({people:person.workersCount});
    }
    componentDidMount(){
        this.fetchData();
    }
    render(){
        return(
            <View style={workersCountStyle.div}>
                <FontAwesome5 name="house-user" style={workersCountStyle.icons} />
                <Text style={workersCountStyle.text}>A raktárban dolgozók száma {this.state.people} fő</Text>
                <Text style={workersCountStyle.textinfo}>Bővebb információ a "Raktárosok" menüpontban található</Text>
            </View>
        )
    }
}