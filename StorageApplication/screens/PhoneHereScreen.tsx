import { RootTabScreenProps } from '../types';
import { containerStyles } from '../styles/element/containerStyle';
import { ScrollView } from 'react-native-gesture-handler';
import { View} from 'react-native';
import Phones from '../element/PhonesIn';
import PhoneHereText from '../components/texts/PhoneHereTextComp';
import GradientBack from '../components/linegradient/linegradent';

export default function PhoneHereScreen({ navigation }: RootTabScreenProps<'PhoneHereScreen'>) {
  return(
    <View style={containerStyles.container}>
        <GradientBack/>
        <ScrollView showsHorizontalScrollIndicator={false}>
            <PhoneHereText/>
            <Phones/>
        </ScrollView>
    </View>
  )
};