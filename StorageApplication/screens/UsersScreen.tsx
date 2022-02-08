import { StyleSheet,TextInput,TouchableOpacity,Button } from 'react-native';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import { profilePageStyles } from '../styles/profileStyles';


export default function UsersScreen({ navigation }: RootTabScreenProps<'UsersScreen'>) {
  return(
    <View style={profilePageStyles.container}>
      <Text>ITT LESZNEK A FELHASZNÁLÓK ADATAI</Text>
     
    </View>
  );
}