import React, {Component} from 'react';
import {Text, View} from 'react-native';
import * as Progress from 'react-native-progress';
import WarehouseSaturation from './WarehouseFull';
import {SafeAreaView,StyleSheet,Dimensions, ScrollView,} from 'react-native';
import {LineChart,BarChart,PieChart,ProgressChart,ContributionGraph,StackedBarChart,} from 'react-native-chart-kit';
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
      data: berendeltDbs()
    };

    return (
      <View>
        <Text>Márkák</Text>
        <ProgressChart
          data={data}
          width={Dimensions.get('window').width - 16}
          height={220}
          chartConfig={{
            backgroundColor: '#1cc910',
            backgroundGradientFrom: '#eff3ff',
            backgroundGradientTo: '#bdedfe',
            decimalPlaces: 2,
            color: (opacity = 1) => `rgba(30, 40, 51, ${opacity})`,
            style: {
              borderRadius: 16,
            },
          }}
          style={{
            marginVertical: 8,
            borderRadius: 16,
          }}
        />
      </View>
       
    )
  }
}




