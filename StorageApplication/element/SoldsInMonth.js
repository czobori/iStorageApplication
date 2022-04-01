import React, {Component} from 'react';
import {Text, View,FlatList} from 'react-native';
import Moment from 'moment';
import { soldsComponentStyles } from '../styles/componentStyles/SoldsDataComponent';
import SoldInMonthText from '../components/texts/SoldInMonthTextComp';
import { url } from '../const/url';

export default class SoldsThisMonth extends Component {
  state ={data:[]}
  fetchData= async()=>{
    const response = await fetch(url+'/sold');
    const solds = await response.json();
    this.setState({data: solds});
  }
  componentDidMount(){this.fetchData();}

  render() {
    return (
      <View>
        <SoldInMonthText/>
        <FlatList data={this.state.data}
          keyExtractor={(item,index) => index.toString()}
          renderItem={({item}) =>
            <View style={soldsComponentStyles.div}>
              <Text style={soldsComponentStyles.data}>{item.client_name} - {Moment(item.date).format('YYYY.MM.DD HH:mm')}</Text>
              <Text style={soldsComponentStyles.phonedata}>{(item.brand_name).toUpperCase()} {(item.model_name).toUpperCase()} {item.phone_color} {item.capacity}GB ({item.amount} db)</Text>
            </View>
          }  
        />
      </View>
    );
  }
}