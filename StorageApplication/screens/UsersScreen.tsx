import { View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import { containerStyles } from '../styles/element/containerStyle';
import { ScrollView } from 'react-native-gesture-handler';
import * as Elements from "../const/allElements";
import GradientBack from '../components/linegradient/linegradent';

export default function UsersScreen({ navigation }: RootTabScreenProps<'UsersScreen'>) {
  return(
    <View style={containerStyles.container}>
      <GradientBack/>
      <ScrollView showsHorizontalScrollIndicator={false}>
        <Elements.User/>
      </ScrollView>
    </View>
  )
}