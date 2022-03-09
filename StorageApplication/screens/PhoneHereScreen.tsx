import {RootTabScreenProps} from '../types';
import {ScrollView} from 'react-native-gesture-handler';
import {View} from 'react-native';
import {containerStyles} from '../styles/element/containerStyle';
import Phones from '../element/PhonesIn';
import PhoneHereText from '../components/texts/PhoneHereTextComp';
import GradientBack from '../components/linegradient/linegradent';
import BackButton from '../components/button/backButtonComp';

export default function PhoneHereScreen({ navigation }: RootTabScreenProps<'PhoneHereScreen'>) {
  const onBackPressed = () =>{navigation.navigate("StorageScreen");}
  return(
    <View style={containerStyles.container}>
        <GradientBack/>
        <ScrollView showsHorizontalScrollIndicator={false}>
          <BackButton onPress={onBackPressed}/>
          <PhoneHereText/>
          <Phones/>
        </ScrollView>
    </View>
  )
};