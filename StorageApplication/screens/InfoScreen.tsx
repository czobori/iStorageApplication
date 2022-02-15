import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet } from 'react-native';
import ScreenInfo from '../components/ScreenInfo';
import { Text, View } from '../components/Themed';
import { infoPageStyles } from '../styles/screenStyles/infoStyles';

export default function ModalScreen() {
  return (
    <View style={infoPageStyles.container}>
      <Text style={infoPageStyles.title}>Információ</Text>
      <View style={infoPageStyles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <ScreenInfo path="/screens/InfoScreen.tsx" />

      {/* Use a light status bar on iOS to account for the black space above the modal */}
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
    </View>
  );
}

