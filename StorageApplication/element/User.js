import React, {Component} from 'react';
import {Text, View,FlatList} from 'react-native';
import { userComponentStyles } from '../styles/componentStyles/UserDataComponentStyle';
import { AntDesign,FontAwesome5,MaterialCommunityIcons,Fontisto,Feather, Entypo } from '@expo/vector-icons';
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
              <Text style={userComponentStyles.nevek}>{item.full_name}</Text>
              <Text style={userComponentStyles.text}><AntDesign name="user" size={15} color="#fff" /> {item.username}</Text>
              <Text style={userComponentStyles.text}><Entypo name="mail" size={15} color="#fff" /> {item.email}</Text>
              <Text style={userComponentStyles.text}><Entypo name="old-phone" size={15} color="#fff" /> {item.phone_number}</Text>
            </View>
          }  
        />
      </View>
    );
  }
}

