import { View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import { containerStyles } from '../styles/element/containerStyle';
import { ScrollView } from 'react-native-gesture-handler';
import User from "../element/User";

export default function UsersScreen({ navigation }: RootTabScreenProps<'UsersScreen'>) {
  return(
    <View style={containerStyles.container}>
      <ScrollView showsHorizontalScrollIndicator={false}>
        <User/>
      </ScrollView>
    </View>
  )
}