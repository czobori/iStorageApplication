import React, {Component} from 'react';
import {View,Dimensions} from 'react-native';
import {ProgressChart} from 'react-native-chart-kit'
import { progressCartConfig } from '../const/ChartKitConfig';
import { homePageStyles } from '../styles/screenStyles/homeStyle';
import BrandInfoText from '../components/texts/BrandProgressInfoTextCom';
import { url } from '../const/url';
export default class ChartBrand extends Component {
  state ={
    data:[],
    osszes:0
  }
  fetchData= async()=>{
    const response = await fetch(url+'/accordingToTheBrand');
    const diagramdata = await response.json();
    this.setState({data: diagramdata});
    const currently = await (await fetch (url+'/currentlyInStock')).json();
    this.setState({osszes:currently.number});
  }
  componentDidMount(){this.fetchData();}

  render() {
    const arr = this.state.data;
    const brandNames = () => {return arr.map(x => x.brand_name);}
    const berendeltDbs = () => {return arr.map(x => x.berendeltDb/this.state.osszes);}
    const data = {labels: brandNames(),data: berendeltDbs(),};
    return (
      <View style={homePageStyles.div}>
        <BrandInfoText/>
        <ProgressChart data={data}
          width={Dimensions.get('window').width-70 } height={180} 
          chartConfig={progressCartConfig} style={{borderRadius: 16}} strokeWidth= {10}/>
      </View>
    )
  }
}