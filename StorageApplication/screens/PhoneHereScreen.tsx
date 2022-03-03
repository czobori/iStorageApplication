import { RootTabScreenProps } from '../types';
import { containerStyles } from '../styles/element/containerStyle';
import { ScrollView } from 'react-native-gesture-handler';
import { LinearGradient } from 'expo-linear-gradient';
import { View,Text } from 'react-native';
import Phones from '../element/PhonesIn';
import { phoneStyles } from '../styles/element/phoneInStyles';
import Moment from 'moment';

let today = new Date().toLocaleDateString();
export default function PhoneHereScreen({ navigation }: RootTabScreenProps<'PhoneHereScreen'>) {
  return(
    <View style={containerStyles.container}>
        <LinearGradient colors={['rgba(0,0,0,0.8)', 'transparent']} style={containerStyles.background}/>
        <ScrollView showsHorizontalScrollIndicator={false}>
            <Text style={phoneStyles.title}>Raktáron lévő készülékek</Text>
            <Text style={phoneStyles.megjegyzes}>Különböző kapacitással és színnel</Text>
            <Text style={phoneStyles.today}>{Moment(today).format('YYYY.MM.DD')}</Text>
            <Phones/>
        </ScrollView>
    </View>
  )
};