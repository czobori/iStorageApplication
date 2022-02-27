import React, {Component} from 'react';
import {Text, View,FlatList} from 'react-native';
import { stockComponentStyles } from '../styles/componentStyles/StockDataComponentStyle';
import Moment from 'moment';
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
    Moment.locale('en');
    return (
      <View>
      <Text style={stockComponentStyles.title}>Berendelt készülékek</Text>
      <Text style={stockComponentStyles.megjegyzes}>(hamarosan érkeznek)</Text>
        <FlatList
          data={this.state.data}
          keyExtractor={(item,index) => index.toString()}
          renderItem={({item}) =>
            <View style={stockComponentStyles.div}>
              <Text  style={stockComponentStyles.telefonadat}>{(item.brand_name).toUpperCase()} {(item.model_name).toUpperCase()} {item.phone_color} {item.capacity}GB ({item.amount} db)</Text>
             
              <Text style={stockComponentStyles.rendelt}> {item.username} - {Moment(item.date).format('YYYY.MM.DD HH:mm')}</Text>
            </View>
          }  
        />
      </View>
    );
  }
}