import { StyleSheet, TouchableOpacity } from 'react-native';
import { Text, View } from '../components/Themed';
import { RootStackScreenProps } from '../types';
import { containerStyles } from '../styles/element/containerStyle';
import { notFoundPageStyles } from '../styles/screenStyles/notfoundStyles';

export default function NotFoundScreen({ navigation }: RootStackScreenProps<'NotFound'>) {
  return (
    <View style={containerStyles.container}>
      <Text style={notFoundPageStyles.title}>This screen doesn't exist.</Text>
      <TouchableOpacity onPress={() => navigation.replace('Root')} style={notFoundPageStyles.link}>
        <Text style={notFoundPageStyles.linkText}>Go to home screen!</Text>
      </TouchableOpacity>
    </View>
  );
}

