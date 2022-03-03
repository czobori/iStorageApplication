import React, {Component} from 'react';
import {Text, View,FlatList} from 'react-native';
import { phoneStyles } from '../styles/element/phoneInStyles';
export default class Phones extends Component {
  state ={
    data:[]
  }

  fetchData= async()=>{
    const response = await fetch('http://localhost:4550/phoneTypes');
    const phones = await response.json();
    this.setState({data: phones});
  }
  componentDidMount(){
    this.fetchData();
  }
  render() {
    return (
      <View style={phoneStyles.div}>
        <Text style={phoneStyles.title}>Raktáron lévő készülékek</Text>
        <FlatList
          data={this.state.data}
          keyExtractor={(item,index) => index.toString()}
          renderItem={({item}) =>
            <View>
              <Text>{(item.brand_name).toUpperCase()} {(item.model_name).toUpperCase()}</Text>
            </View>
          }  
        />
      </View>
    );
  }
}