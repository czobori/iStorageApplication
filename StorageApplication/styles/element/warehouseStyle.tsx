import { StyleSheet,Dimensions} from 'react-native';
import * as Colors from "../../const/colors";
const warehouseStyle = StyleSheet.create({
    div:{
        backgroundColor:Colors.white, color:Colors.topnavbar,
        borderRadius:15,
        width:Dimensions.get('window').width - 40,
        marginTop:15,marginBottom:15,
        textAlign:"center",
    },
    name:{fontSize:26}
});
export {warehouseStyle};