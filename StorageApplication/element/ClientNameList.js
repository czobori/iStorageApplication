import React, {Component} from 'react';
import {Text, View,FlatList} from 'react-native';
import { partnersStyle } from '../styles/element/PartnersStyle';
import { url } from '../const/url';

export default class ClientName extends Component {
  state ={
    data:[]
  }

  fetchData= async()=>{
    const response = await fetch(url+'/clientNames');
    const clients = await response.json();
    this.setState({data: clients});
  }
  componentDidMount(){this.fetchData();}
  
  render() {
    return (
      <View>
        <FlatList
          data={this.state.data}
          keyExtractor={(item,index) => index.toString()}
          renderItem={({item}) =>
            <View style={partnersStyle.listnames}>
              <Text style={partnersStyle.names}>{item.client_name}</Text>
            </View>
          }  
        />
      </View>
    );
  }
}