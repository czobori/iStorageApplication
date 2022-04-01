import { StyleSheet,Dimensions} from 'react-native';
import * as Colors from "../../const/colors";
const warehousefullStyle = StyleSheet.create({
    bar:{
        backgroundColor:Colors.sidebar,color:Colors.sidebar,opacity:0.9,
        borderRadius:5, borderColor:Colors.sidebar,
        height:10,
    },
    text:{textAlign:'center',fontSize:22,paddingBottom:2},
    div:{
        alignItems:"center",
        backgroundColor:Colors.extralightblue,
        borderRadius:15,
        width:Dimensions.get('window').width - 40,
        paddingTop:3,paddingBottom:10
    }
});
export {warehousefullStyle};