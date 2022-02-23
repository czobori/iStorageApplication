import { View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import { containerStyles } from '../styles/element/containerStyle';
import WarehouseSaturation from '../element/WarehouseFull';
import ChartBrand from '../element/BrandProgressChart';
import OnDelivery from '../element/DeliveryToStore';
import Warehouse from '../element/WarehouseData';
import { ScrollView } from 'react-native-gesture-handler';

export default function HomeScreen({ navigation }: RootTabScreenProps<'HomeScreen'>) {
  return(
    <View style={containerStyles.container}>
      <ScrollView showsHorizontalScrollIndicator={false}>
        <Warehouse/>
        <WarehouseSaturation/>
        <ChartBrand/>
        <OnDelivery/>
      </ScrollView>
    </View>
  )
}