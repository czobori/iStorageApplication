import { StyleSheet,TextInput,TouchableOpacity,Button } from 'react-native';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import { profilePageStyles } from '../styles/profileStyles';

export default function ProfileScreen({ navigation }: RootTabScreenProps<'ProfileScreen'>) {
  return(
    <View style={profilePageStyles.container}>
      <Text>LÁTSZIK????</Text>
      
    </View>
  );
}