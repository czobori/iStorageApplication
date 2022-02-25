import { View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import { containerStyles } from '../styles/element/containerStyle';
import { ScrollView } from 'react-native-gesture-handler';
import SoldsThisMonth from '../element/SoldsInMonth';

export default function OrderOutScreen({ navigation }: RootTabScreenProps<'OrderOutScreen'>) {
  return(
    <View style={containerStyles.container}>
      <ScrollView showsHorizontalScrollIndicator={false}>
          <SoldsThisMonth/>
      </ScrollView>
    </View>
  )
}