import React, {Component} from 'react';
import {Text, View,FlatList} from 'react-native';

export default class Stocks extends Component {
  state ={
    data:[]
  }

  fetchData= async()=>{
    const response = await fetch('http://localhost:4550/stock');
    const stock = await response.json();
    this.setState({data: stock});
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
              <Text>Dátum szarul: {item.date}</Text>
              <Text></Text>
            </View>
          }  
        />
      </View>
    );
  }
}