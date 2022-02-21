import React, {Component} from 'react';
import {Text, View} from 'react-native';
import * as Progress from 'react-native-progress';
import WarehouseSaturation from './WarehouseFull';
export default class AccordingToTheBrand extends Component {

  state ={
    data:[]
  }

  fetchData= async()=>{
    const response = await fetch('http://localhost:4550/accordingToTheBrand');
    const diagramdata = await response.json();
    this.setState({data: diagramdata});
    
  }
  componentDidMount(){
    this.fetchData();
  }

  render() {
    const arr = this.state.data;
    const brandNames = () => {
      return arr.map(x => x.brand_name);
    }
    
    const berendeltDbs = () => {
      return arr.map(x => x.berendeltDb);
    }
    
    console.log(brandNames());
    console.log(berendeltDbs());

    const data = {
      labels: brandNames,
      data: berendeltDbs
    };
    console.log(data);
    
    return (
        <View>
            <Text>Raktár teltsége</Text>
            <Progress.Bar progress={0.3}/>
        </View>
       
    )
  }
}

