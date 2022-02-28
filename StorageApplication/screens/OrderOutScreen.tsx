//import { View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import { containerStyles } from '../styles/element/containerStyle';
import { ScrollView } from 'react-native-gesture-handler';
import SoldsThisMonth from '../element/SoldsInMonth';
import { LinearGradient } from 'expo-linear-gradient';
import { View } from 'react-native';

export default function OrderOutScreen({ navigation }: RootTabScreenProps<'OrderOutScreen'>) {
  return(
    <View style={containerStyles.container}>
      <LinearGradient colors={['rgba(0,0,0,0.8)', 'transparent']} style={containerStyles.background}/>
      <ScrollView showsHorizontalScrollIndicator={false}>
          <SoldsThisMonth/>
      </ScrollView>
    </View>
  )
}