import { StyleSheet} from 'react-native';
import * as Colors from "../../const/colors";
const infoPageStyles = StyleSheet.create({
    title: {fontSize: 20,fontWeight: 'bold',},
    separator: {marginVertical: 30,height: 1,width: '80%',}, 
    darkblue:{backgroundColor: Colors.topnavbar,}
});
export {infoPageStyles};