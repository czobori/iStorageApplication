import React, {Component} from 'react';
import {Text, View} from 'react-native';
import { warehouseStyle } from '../styles/element/warehouseStyle';

export default class Warehouse extends Component {
  state ={
    data:[]
  }

  fetchData= async()=>{
    const response = await fetch('http://localhost:4550/warehouseData');
    const warehouse = await response.json();
    this.setState({data: warehouse});
  }
  componentDidMount(){
    this.fetchData();
  }
  render() {
    return (
      <View style={warehouseStyle.div}>
        <Text style={warehouseStyle.name}>{this.state.data.wh_name}</Text>
        <Text>{this.state.data.location}</Text>
        <Text>Raktár teljes kapacitása: 5000</Text>
      </View>
    );
  }
}