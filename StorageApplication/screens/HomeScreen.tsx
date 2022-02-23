import { View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import { containerStyles } from '../styles/element/containerStyle';
import WarehouseSaturation from '../element/WarehouseFull';
import ChartBrand from '../element/BrandProgressChart';
import OnDelivery from '../element/DeliveryToStore';

export default function HomeScreen({ navigation }: RootTabScreenProps<'HomeScreen'>) {
  return(
    <View style={containerStyles.container}>
      <WarehouseSaturation/>
      <ChartBrand/>
      <OnDelivery/>
    </View>
  )
}