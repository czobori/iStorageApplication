import React, {Component} from 'react';
import {Text, View} from 'react-native';
import * as Progress from 'react-native-progress';
import WarehouseSaturation from './WarehouseFull';
import {SafeAreaView,StyleSheet,Dimensions, ScrollView,} from 'react-native';
import {LineChart,BarChart,PieChart,ProgressChart,ContributionGraph,StackedBarChart,} from 'react-native-chart-kit';
export default class ChartBrand extends Component {

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
        <ProgressChart
          data={[0.4, 0.6, 0.8]}
          width={Dimensions.get('window').width - 16}
          height={220}
          chartConfig={{
            backgroundColor: '#1cc910',
            backgroundGradientFrom: '#eff3ff',
            backgroundGradientTo: '#efefef',
            decimalPlaces: 2,
            color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
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




