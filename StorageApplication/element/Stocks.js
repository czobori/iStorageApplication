import React, {Component} from 'react';
import {Text, View,FlatList} from 'react-native';
import { stockComponentStyles } from '../styles/componentStyles/StockDataComponentStyle';

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
  // https://stackoverflow.com/questions/34590369/formatting-a-date-string-in-react-native
  render() {
    return (
      <View>
        <FlatList
          data={this.state.data}
          keyExtractor={(item,index) => index.toString()}
          renderItem={({item}) =>
            <View style={stockComponentStyles.div}>
              <Text style={stockComponentStyles.text}>{item.date} - {item.username}</Text>
            </View>
          }  
        />
      </View>
    );
  }
}