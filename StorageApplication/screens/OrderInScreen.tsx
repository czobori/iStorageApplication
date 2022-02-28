//import { View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import { containerStyles } from '../styles/element/containerStyle';
import { ScrollView } from 'react-native-gesture-handler';
import Stocks from '../element/Stocks';
import { LinearGradient } from 'expo-linear-gradient';
import { View } from 'react-native';

export default function OrderInScreen({ navigation }: RootTabScreenProps<'OrderInScreen'>) {
  return(
    <View style={containerStyles.container}>
      <LinearGradient colors={['rgba(0,0,0,0.8)', 'transparent']} style={containerStyles.background}/>
      <ScrollView showsHorizontalScrollIndicator={false}>
          <Stocks/>
      </ScrollView>
    </View>
  )
};