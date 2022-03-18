import React, {Component} from 'react';
import {Text, View,FlatList} from 'react-native';
import { stockComponentStyles } from '../styles/componentStyles/StockDataComponentStyle';
import Moment from 'moment';
import OrderInText from '../components/texts/OrderInTextComp';
import { url } from '../const/url';

export default class Stocks extends Component {
  state ={
    data:[]
  }
  fetchData= async()=>{
    const response = await fetch(url+'/stock');
    const stock = await response.json();
    this.setState({data: stock});
  }
  componentDidMount(){this.fetchData();}
 
  render() {
    Moment.locale('en');
    return (
      <View>
        <OrderInText/>
        <FlatList
          data={this.state.data}
          keyExtractor={(item,index) => index.toString()}
          renderItem={({item}) =>
            <View style={stockComponentStyles.div}>
              <Text  style={stockComponentStyles.phonedata}>{(item.brand_name).toUpperCase()} {(item.model_name).toUpperCase()} {item.phone_color} {item.capacity}GB ({item.amount} db)</Text>
              <Text style={stockComponentStyles.orderd}> {item.username} - {Moment(item.date).format('YYYY.MM.DD HH:mm')}</Text>
            </View>
          }  
        />
      </View>
    );
  }
}