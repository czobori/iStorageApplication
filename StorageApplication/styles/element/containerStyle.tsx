import { StyleSheet} from 'react-native';
import * as Colors from '../../const/colors';
const containerStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:Colors.backcolor,
    alignItems: 'center',
    justifyContent: 'center',
  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: 300,
  }
});
export {containerStyles};