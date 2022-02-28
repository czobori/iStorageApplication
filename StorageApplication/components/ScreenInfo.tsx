import * as WebBrowser from 'expo-web-browser';
import { TouchableOpacity } from 'react-native';

import Colors from '../constants/Colors';
import { Text, View } from './Themed';
import {screenInfoTextStyles} from '../styles/componentStyles/ScreenInfoComponentStyles'

export default function ScreenInfo({ path }: { path: string }) {
  return (
    <View style={screenInfoTextStyles.div}>
      <View style={screenInfoTextStyles.getStartedContainer}>
        <Text style={screenInfoTextStyles.getStartedText}>
          Üdvözöljük!
        </Text>

        <Text style={screenInfoTextStyles.getStartedText} >
          Bejelentkezni csak azok a dolgozók tudnak, akik már benne vannak a rendszerünkben. Ha még nincs benne, akkor forduljon a raktár vezetőjéhez. Más probléma esetén keresse meg az Admint.
        </Text>
      </View>

      <View style={screenInfoTextStyles.helpContainer}>
        <TouchableOpacity onPress={handleHelpPress} style={screenInfoTextStyles.helpLink}>
          <Text style={screenInfoTextStyles.helpLinkText} lightColor={Colors.light.tint}>
            Az alkalmazás weboldalát ide kattintva megtanálja.
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

function handleHelpPress() {
  WebBrowser.openBrowserAsync(
    'https://docs.expo.io/get-started/create-a-new-app/#opening-the-app-on-your-phonetablet'
  );
}

