import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import { containerStyles } from '../styles/element/containerStyle';
import WarehouseSaturation from '../element/WarehouseFull';
import ChartBrand from '../element/BrandProgressChart';

export default function HomeScreen({ navigation }: RootTabScreenProps<'HomeScreen'>) {
  return(
    <View style={containerStyles.container}>
      <WarehouseSaturation/>
      <ChartBrand/>
    </View>
  )
}