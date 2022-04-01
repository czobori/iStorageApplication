import {TouchableOpacity } from 'react-native';
import {Text, View } from '../components/Themed';
import {RootStackScreenProps } from '../types';
import {containerStyles} from '../styles/element/containerStyle';
import {notFoundPageStyles} from '../styles/screenStyles/notfoundStyles';
import GradientBack from '../components/linegradient/linegradent';

export default function NotFoundScreen({ navigation }: RootStackScreenProps<'NotFound'>) {
  return (
    <View style={containerStyles.container}>
      <GradientBack/>
      <Text style={notFoundPageStyles.title}>Az keresett oldal nem található.</Text>
      <TouchableOpacity onPress={() => navigation.replace('Root')} style={notFoundPageStyles.link}>
        <Text style={notFoundPageStyles.linkText}>Ide kattintva visszajut a bejelentkezési felületre!</Text>
      </TouchableOpacity>
    </View>
  );
}

