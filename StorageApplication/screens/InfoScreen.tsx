import { StatusBar } from 'expo-status-bar';
import { Platform} from 'react-native';
import ScreenInfo from '../components/ScreenInfo';
import { Text, View } from '../components/Themed';
import { containerStyles } from '../styles/element/containerStyle';
import { infoPageStyles } from '../styles/screenStyles/infoStyles';
import { LinearGradient } from 'expo-linear-gradient';

export default function InfoScreen() {
  return (
    <View style={containerStyles.container}>
      <LinearGradient colors={['rgba(0,0,0,0.8)', 'transparent']} style={containerStyles.background}/>
      <Text style={infoPageStyles.title}>Információ</Text>
      <View style={infoPageStyles.separator} />
      <ScreenInfo path="/screens/InfoScreen.tsx" />
      {/*<StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />*/}
    </View>
  );
}

