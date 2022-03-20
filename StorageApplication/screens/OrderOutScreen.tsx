import {RootTabScreenProps} from '../types';
import {containerStyles} from '../styles/element/containerStyle';
import {ScrollView} from 'react-native-gesture-handler';
import {View} from 'react-native';
import GradientBack from '../components/linegradient/linegradent';
import * as Elements from "../const/allElements";
import * as Components from '../const/allComponents';

export default function OrderOutScreen({ navigation }: RootTabScreenProps<'OrderOutScreen'>) {
  const onBackPressed = () =>{navigation.navigate("StorageScreen");}
  return(
    <View style={containerStyles.container}>
      <GradientBack/>
      <ScrollView showsHorizontalScrollIndicator={false}>
        <Components.BackButton onPress={onBackPressed}/>
        <Elements.SoldsThisMonth/>
      </ScrollView>
    </View>
  )
}