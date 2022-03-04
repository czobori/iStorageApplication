import { View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import { containerStyles } from '../styles/element/containerStyle';
import WarehouseSaturation from '../element/WarehouseFull';
import ChartBrand from '../element/BrandProgressChart';
import OnDelivery from '../element/DeliveryToStore';
import Warehouse from '../element/WarehouseData';
import { ScrollView } from 'react-native-gesture-handler';
import { LinearGradient } from 'expo-linear-gradient';
import UsersNumber from '../element/WorkersNumber';
import Partners from '../element/Partners';

export default function HomeScreen({ navigation }: RootTabScreenProps<'HomeScreen'>) {
  return(
    <View style={containerStyles.container}>
      <LinearGradient colors={['rgba(0,0,0,0.8)', 'transparent']} style={containerStyles.background}/>
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