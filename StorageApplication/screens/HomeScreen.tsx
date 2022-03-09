import {View} from '../components/Themed';
import {RootTabScreenProps} from '../types';
import {containerStyles} from '../styles/element/containerStyle';
import {ScrollView} from 'react-native-gesture-handler';
import WarehouseSaturation from '../element/WarehouseFull';
import ChartBrand from '../element/BrandProgressChart';
import OnDelivery from '../element/DeliveryToStore';
import Warehouse from '../element/WarehouseData';
import UsersNumber from '../element/WorkersNumber';
import Partners from '../element/Partners';
import GradientBack from '../components/linegradient/linegradent';

export default function HomeScreen({ navigation }: RootTabScreenProps<'HomeScreen'>) {
  return(
    <View style={containerStyles.container}>
     <GradientBack/>
      <ScrollView showsHorizontalScrollIndicator={false}>
        <Warehouse/>
        <WarehouseSaturation/>
        <ChartBrand/>
        <OnDelivery/>
        <UsersNumber/>
        <Partners/>
      </ScrollView>
    </View>
  )
}