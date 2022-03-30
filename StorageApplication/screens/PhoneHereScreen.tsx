import {RootTabScreenProps} from '../types';
import {ScrollView} from 'react-native-gesture-handler';
import {View} from 'react-native';
import {containerStyles} from '../styles/element/containerStyle';
import GradientBack from '../components/linegradient/linegradent';
import * as Elements from "../const/allElements";
import * as Components from '../const/allComponents';

export default function PhoneHereScreen({ navigation }: RootTabScreenProps<'PhoneHereScreen'>) {
  const onBackPressed = () =>{navigation.navigate("StorageScreen");}
  return(
    <View style={containerStyles.container}>
        <GradientBack/>
        <ScrollView showsHorizontalScrollIndicator={false}>
          <Components.BackButton onPress={onBackPressed}/>
          <Components.PhoneHereText/>
          <Elements.Phones/>
          
        </ScrollView>
    </View>
  )
};