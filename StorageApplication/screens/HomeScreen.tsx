import {View} from '../components/Themed';
import {RootTabScreenProps} from '../types';
import {containerStyles} from '../styles/element/containerStyle';
import {ScrollView} from 'react-native-gesture-handler';
import GradientBack from '../components/linegradient/linegradent';
import * as Elements from "../const/allElements";

export default function HomeScreen({ navigation }: RootTabScreenProps<'HomeScreen'>) {
  return(
    <View style={containerStyles.container}>
     <GradientBack/>
      <ScrollView showsHorizontalScrollIndicator={false}>
        <Elements.Warehouse/>
        <Elements.WarehouseSaturation/>
        <Elements.ChartBrand/>
        <Elements.OnDelivery/>
        <Elements.UsersNumber/>
        <Elements.Partners/>
      </ScrollView>
    </View>
  )
}