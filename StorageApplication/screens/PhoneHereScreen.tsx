import { RootTabScreenProps } from '../types';
import { containerStyles } from '../styles/element/containerStyle';
import { ScrollView } from 'react-native-gesture-handler';
import { LinearGradient } from 'expo-linear-gradient';
import { View} from 'react-native';
import Phones from '../element/PhonesIn';
import PhoneHereText from '../components/texts/PhoneHereTextComp';

export default function PhoneHereScreen({ navigation }: RootTabScreenProps<'PhoneHereScreen'>) {
  return(
    <View style={containerStyles.container}>
        <LinearGradient colors={['rgba(0,0,0,0.8)', 'transparent']} style={containerStyles.background}/>
        <ScrollView showsHorizontalScrollIndicator={false}>
            <PhoneHereText/>
            <Phones/>
        </ScrollView>
    </View>
  )
};