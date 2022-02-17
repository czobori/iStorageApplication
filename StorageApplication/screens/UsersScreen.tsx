import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import { userPageStyles } from '../styles/screenStyles/userStyles';
import User from "../element/User";

export default function UsersScreen({ navigation }: RootTabScreenProps<'UsersScreen'>) {
  //AppRegistry.registerComponent("", () => User);
  return(
    <View style={userPageStyles.container}>
      <Text style={userPageStyles.text}>Felhasználók adatai</Text>
      <User/>
    </View>
    
  )
}