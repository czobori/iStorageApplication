import { StatusBar } from 'expo-status-bar';
import { Platform} from 'react-native';
import ScreenInfo from '../components/ScreenInfo';
import { Text, View } from '../components/Themed';
import { containerStyles } from '../styles/element/containerStyle';
import { infoPageStyles } from '../styles/screenStyles/infoStyles';

export default function InfoScreen() {
  return (
    <View style={containerStyles.container}>
      <Text style={infoPageStyles.title}>Információ</Text>
      <View style={infoPageStyles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <ScreenInfo path="/screens/InfoScreen.tsx" />

      {/* Use a light status bar on iOS to account for the black space above the modal */}
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
    </View>
  );
}

