import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import { homePageStyles } from '../styles/screenStyles/homeStyle';
import { containerStyles } from '../styles/element/containerStyle';
import WarehouseSaturation from '../element/WarehouseFull';
import {SafeAreaView,StyleSheet,Dimensions,ScrollView,} from 'react-native';
import ChartBrand from '../element/BrandProgressChart';

//import React Native chart Kit for different kind of Chart
import {LineChart,BarChart,PieChart,ProgressChart,ContributionGraph,StackedBarChart,} from 'react-native-chart-kit';

export default function HomeScreen({ navigation }: RootTabScreenProps<'HomeScreen'>) {
  return(
    <View style={containerStyles.container}>
    <WarehouseSaturation/>
    <ChartBrand/>
    </View>
  )
}