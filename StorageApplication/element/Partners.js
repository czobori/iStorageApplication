import React, {Component} from 'react';
import {Text, View} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { partnersStyle } from '../styles/element/PartnersStyle';
import ClientName from './ClientNameList';
import { url } from '../const/url';

export default class Partners extends Component{
    state={
        ember:0,
        data:[]
    }
    fetchData = async()=>{
        const client = await(await fetch (url+'/partnerNumber')).json();
        this.setState({ember:client.clientDB});
    }
    componentDidMount(){this.fetchData();}
    
    render(){
        return(
            <View style={partnersStyle.div}>
                <AntDesign name="contacts" style={partnersStyle.icons} />
                <Text style={partnersStyle.text}>{this.state.ember} cégnek szállítunk be jelenleg</Text>
                <ClientName/>
            </View>
        )
    }
}