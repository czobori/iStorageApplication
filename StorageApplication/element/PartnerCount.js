import React, {Component} from 'react';
import {Text, View,FlatList} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { partnersCountStyle } from '../styles/element/PartnerCountStyle';

export default class PartnersCount extends Component{
    state={
        ember:0,
        data:[]
    }
    fetchData = async()=>{
        const client = await(await fetch ('http://localhost:4550/partnerNumber')).json();
        this.setState({ember:client.clientDB});
    }
    componentDidMount(){
        this.fetchData();
    }
    render(){
        return(
            <View style={partnersCountStyle.div}>
                <AntDesign name="contacts" style={partnersCountStyle.icons} />
                <Text style={partnersCountStyle.text}>{this.state.ember} cégnek szállítunk be jelenleg</Text>
            </View>
        )
    }
}