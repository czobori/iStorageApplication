import { View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import { containerStyles } from '../styles/element/containerStyle';
import { ScrollView } from 'react-native-gesture-handler';

export default function OrderInScreen({ navigation }: RootTabScreenProps<'OrderInScreen'>) {
  return(
    <View style={containerStyles.container}>
      <ScrollView showsHorizontalScrollIndicator={false}>
          
      </ScrollView>
    </View>
  )
}