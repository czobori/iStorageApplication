import React, {Component} from 'react';
import {Text, View,FlatList} from 'react-native';
import { userComponentStyles } from '../styles/componentStyles/UserDataComponentStyle';
export default class User extends Component {

  state ={
    data:[]
  }

  fetchData= async()=>{
    const response = await fetch('http://localhost:4550/user');
    const users = await response.json();
    this.setState({data: users});
    
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

        <View style={userComponentStyles.div}>
          <Text>{item.full_name}</Text>
          <Text>  felhasználónév: {item.username}</Text>
          <Text>  email: {item.email}</Text>
          <Text>  telefon: {item.phone_number}</Text>
        </View>

       }
       />
      </View>
    );
  }
}

