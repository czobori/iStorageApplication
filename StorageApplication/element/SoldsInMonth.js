import React, {Component} from 'react';
import {Text, View,FlatList} from 'react-native';
import Moment from 'moment';
import { format } from "date-fns";
import { soldsComponentStyles } from '../styles/componentStyles/SoldsDataComponent';

export default class SoldsThisMonth extends Component {
  state ={
    data:[],
    idotartam:""
  }

  fetchData= async()=>{
    const response = await fetch('http://localhost:4550/sold');
    const solds = await response.json();
    this.setState({data: solds});
    this.setState({idotartam: solds[0].date});

  }
  componentDidMount(){
    this.fetchData();
  }
 
  render() {
    Moment.locale('hu');
    return (
      <View>
      <Text style={soldsComponentStyles.idotartamT}>{Moment(this.state.idotartam).format('YYYY.MMMM')}</Text>
        <FlatList
          data={this.state.data}
          keyExtractor={(item,index) => index.toString()}
          renderItem={({item}) =>
            <View style={soldsComponentStyles.div}>
              <Text>{Moment(item.date).format('YYYY.MM.DD hh:mm')} - {item.client_name}</Text>
              <Text style={soldsComponentStyles.telefonadat}>{item.brand_name} {item.model_name} {item.phone_color} {item.capacity}GB ({item.amount} db)</Text>
            </View>
          }  
        />
      </View>
    );
  }
}