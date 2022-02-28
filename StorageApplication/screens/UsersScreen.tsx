import { View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import { containerStyles } from '../styles/element/containerStyle';
import { ScrollView } from 'react-native-gesture-handler';
import User from "../element/User";
import { LinearGradient } from 'expo-linear-gradient';

export default function UsersScreen({ navigation }: RootTabScreenProps<'UsersScreen'>) {
  return(
    <View style={containerStyles.container}>
      <LinearGradient colors={['rgba(0,0,0,0.8)', 'transparent']} style={containerStyles.background}/>
      <ScrollView showsHorizontalScrollIndicator={false}>
        <User/>
      </ScrollView>
    </View>
  )
}