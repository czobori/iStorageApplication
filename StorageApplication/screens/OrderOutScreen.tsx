//import { View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import { containerStyles } from '../styles/element/containerStyle';
import { ScrollView } from 'react-native-gesture-handler';
import SoldsThisMonth from '../element/SoldsInMonth';
import { View } from 'react-native';
import GradientBack from '../components/linegradient/linegradent';

export default function OrderOutScreen({ navigation }: RootTabScreenProps<'OrderOutScreen'>) {
  return(
    <View style={containerStyles.container}>
      <GradientBack/>
      <ScrollView showsHorizontalScrollIndicator={false}>
          <SoldsThisMonth/>
      </ScrollView>
    </View>
  )
}