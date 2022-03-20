import { StyleSheet,Dimensions} from 'react-native';
import * as Colors from "../../const/colors";
const warehousefullStyle = StyleSheet.create({
    bar:{
        borderRadius:5,
        height:10,
        color:Colors.sidebar,
        borderColor:Colors.sidebar,
        backgroundColor:Colors.sidebar,
        opacity:0.9,
    },
    text:{
        textAlign:'center',
        fontSize:22,
        paddingBottom:2
    },
    div:{
        alignItems:"center",
        backgroundColor:Colors.extralightblue,
        borderRadius:15,
        width:Dimensions.get('window').width - 40,
        paddingTop:3,
        paddingBottom:10
    }
});
export {warehousefullStyle};