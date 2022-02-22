import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import { containerStyles } from '../styles/element/containerStyle';
import { userPageStyles } from '../styles/screenStyles/userStyles';
import { ScrollView } from 'react-native-gesture-handler';
import User from "../element/User";

export default function UsersScreen({ navigation }: RootTabScreenProps<'UsersScreen'>) {
  return(
    <View style={containerStyles.container}>
      <Text style={userPageStyles.text}>Raktárosok</Text>
      <ScrollView showsHorizontalScrollIndicator={false}>
        <User/>
      </ScrollView>
    </View>
  )
}