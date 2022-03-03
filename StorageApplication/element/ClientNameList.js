import React, {Component} from 'react';
import {Text, View,FlatList} from 'react-native';
import { partnersStyle } from '../styles/element/PartnersStyle';
import { AntDesign } from '@expo/vector-icons';

export default class ClientName extends Component {
  state ={
    data:[]
  }

  fetchData= async()=>{
    const response = await fetch('http://localhost:4550/clientNames');
    const clients = await response.json();
    this.setState({data: clients});
  }
  componentDidMount(){
    this.fetchData();
  }
  render() {
    return (
      <View>
        <FlatList
          data={this.state.data}
          keyExtractor={(item,index) => index.toString()}
          renderItem={({item}) =>
            <View>
              <Text style={partnersStyle.nevek}><AntDesign name="rightcircle" style={partnersStyle.listicon} />{item.client_name}</Text>
            </View>
          }  
        />
      </View>
    );
  }
}