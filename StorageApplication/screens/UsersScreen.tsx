import { StyleSheet,TextInput,TouchableOpacity,Button } from 'react-native';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import { profilePageStyles } from '../styles/screenStyles/profileStyles';
import { State } from 'react-native-gesture-handler';
import {} from '..//server/User';


export default function UsersScreen({ navigation }: RootTabScreenProps<'UsersScreen'>) {
 //https://www.youtube.com/watch?v=MY_DEKLQiOU&t=59s
  /*state ={
    data:[]
  }*/
  return(
    <View style={profilePageStyles.container}>
      <Text>Felhasználók adatai</Text>
      
    </View>
  );
}