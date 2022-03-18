import React, {Component} from 'react';
import {Text, View,FlatList} from 'react-native';
import { phoneStyles } from '../styles/element/phoneInStyles';
import { url } from '../const/url';

export default class Phones extends Component {
  state ={
    data:[]
  }

  fetchData= async()=>{
    const response = await fetch(url+'/phoneTypes');
    const phones = await response.json();
    this.setState({data: phones});
  }
  componentDidMount(){this.fetchData();}
  
  render() {
    return (
      <View style={phoneStyles.div}>
        <FlatList
          data={this.state.data}
          keyExtractor={(item,index) => index.toString()}
          renderItem={({item}) =>
            <View style={phoneStyles.rows}>
              <Text style={phoneStyles.data}>{(item.brand_name).toUpperCase()} {(item.model_name).toUpperCase()}</Text>
            </View>
          }  
        />
      </View>
    );
  }
}