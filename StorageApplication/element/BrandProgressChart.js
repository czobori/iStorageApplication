import React, {Component} from 'react';
import {Text, View,Dimensions} from 'react-native';
import {ProgressChart} from 'react-native-chart-kit'
import { progressCartConfig } from '../const/ChartKitConfig';
import { homePageStyles } from '../styles/screenStyles/homeStyle';
export default class ChartBrand extends Component {

  state ={
    data:[],
    osszes:0
  }

  fetchData= async()=>{
    const response = await fetch('http://localhost:4550/accordingToTheBrand');
    const diagramdata = await response.json();
    this.setState({data: diagramdata});
    const currently = await (await fetch ('http://localhost:4550/currentlyInStock')).json();
    this.setState({osszes:currently.number});
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
      return arr.map(x => x.berendeltDb/this.state.osszes);
    }
    
    const data = {
      labels: brandNames(),
      data: berendeltDbs(),
    };

    return (
      <View style={homePageStyles.div}>
        <Text style={homePageStyles.title}>Márkák a raktárban</Text>
        <Text style={homePageStyles.info}>(A diagram belülről kifelé, a magyarázat pfentről lefelé)</Text>
        <Text style={homePageStyles.info}>Bővebb információ a "Raktáron" menüpontban található</Text>
        <ProgressChart
          data={data}
          width={Dimensions.get('window').width-70 }
          height={180}
          chartConfig={progressCartConfig}
          style={{borderRadius: 16}}
          strokeWidth= {11}
        />
      </View>
    )
  }
}




