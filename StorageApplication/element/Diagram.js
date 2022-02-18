import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {LineChart,BarChart,PieChart,ProgressChart,ContributionGraph,StackedBarChart} from "react-native-chart-kit";
import PieChart from 'react-native-pie-chart';
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


    return (
        <View>
            <Text>Berendelt márkáink</Text>
            //https://bestofreactjs.com/repo/indiespirit-react-native-chart-kit-react-charts
        </View>
       
    )
  }
}
