//import { View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import { containerStyles } from '../styles/element/containerStyle';
import { ScrollView } from 'react-native-gesture-handler';
import Stocks from '../element/Stocks';
import { View } from 'react-native';
import GradientBack from '../components/linegradient/linegradent';
import BackButton from '../components/button/backButtonComp';

export default function OrderInScreen({ navigation }: RootTabScreenProps<'OrderInScreen'>) {
  const onBackPressed = () =>{navigation.navigate("StorageScreen");}
  return(
    <View style={containerStyles.container}>
      <GradientBack/>
      <ScrollView showsHorizontalScrollIndicator={false}>
        <BackButton onPress={onBackPressed}/>
        <Stocks/>
      </ScrollView>
    </View>
  )
};