import { StyleSheet,Dimensions } from "react-native";
import * as Colors from "../../const/colors";
const workersCountStyle = StyleSheet.create({
    div:{
        backgroundColor:Colors.darkersidebar,
        borderRadius:15,
        width:Dimensions.get('window').width - 40,
        paddingBottom:10,
        paddingTop:10,
        marginTop:15,
        textAlign:'center'
    },
    text:{
        fontSize:18,
        color:Colors.white,
        textAlign:'center'
    },
    textinfo:{
        fontSize:12,
        color:Colors.white,
        textAlign:'center',
        paddingHorizontal:10
    },
    icons:{
        fontSize:28,
        color:Colors.white,
        textAlign:"center",
        paddingBottom:10
    },
})
export {workersCountStyle};
