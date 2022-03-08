import ScreenInfo from '../components/ScreenInfo';
import { Text, View } from '../components/Themed';
import { containerStyles } from '../styles/element/containerStyle';
import { infoPageStyles } from '../styles/screenStyles/infoStyles';
import GradientBack from '../components/linegradient/linegradent';

export default function InfoScreen() {
  return (
    <View style={containerStyles.container}>
      <GradientBack/>
      <Text style={infoPageStyles.title}>Információ</Text>
      <View style={infoPageStyles.separator} />
      <ScreenInfo path="/screens/InfoScreen.tsx" />
      {/*<StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />*/}
    </View>
  );
}

