import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,FlatList} from 'react-native';
export default class App extends Component {

  state ={
    data:[]
  }

  fetchData= async()=>{
    const response = await fetch('http://192.168.1.73:1348/user');
    const users = await response.json();
    this.setState({data: users});
    
  }
componentDidMount(){
  this.fetchData();
}
  render() {
    return (
      <View >
       <Text>Welcome</Text>

       <FlatList
       data={this.state.data}
       keyExtractor={(item,index) => index.toString()}
       renderItem={({item}) =>

        <View style={{backgroundColor:'#abc123',padding:10,margin:10}}>
          <Text style={{color:'#fff', fontWeight:'bold'}}>{item.username}</Text>
          <Text style={{color:'#fff'}}>{item.email}</Text>
          <Text>City: {item.address.city}</Text>
        </View>

       }

       />
      </View>
    );
  }
}