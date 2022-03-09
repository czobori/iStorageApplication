import {RootTabScreenProps} from '../types';
import {containerStyles} from '../styles/element/containerStyle';
import {ScrollView} from 'react-native-gesture-handler';
import {View} from 'react-native';
import SoldsThisMonth from '../element/SoldsInMonth';
import GradientBack from '../components/linegradient/linegradent';
import BackButton from '../components/button/backButtonComp';

export default function OrderOutScreen({ navigation }: RootTabScreenProps<'OrderOutScreen'>) {
  const onBackPressed = () =>{navigation.navigate("StorageScreen");}
  return(
    <View style={containerStyles.container}>
      <GradientBack/>
      <ScrollView showsHorizontalScrollIndicator={false}>
        <BackButton onPress={onBackPressed}/>
        <SoldsThisMonth/>
      </ScrollView>
    </View>
  )
}