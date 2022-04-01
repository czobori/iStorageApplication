import { StyleSheet,Dimensions} from 'react-native';
import * as Colors from "../../const/colors";
const workersNStyle = StyleSheet.create({
    div:{
        backgroundColor:Colors.white, color:Colors.topnavbar,
        borderRadius:15,
        width:Dimensions.get('window').width - 40,
        paddingBottom:10,paddingTop:2,
        marginTop:15,marginBottom:15,
        textAlign:"center",
    },
});
export {workersNStyle};