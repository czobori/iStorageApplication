import { StyleSheet,Dimensions } from "react-native";
import * as Colors from "../../const/colors";
const partnersStyle = StyleSheet.create({
    div:{
        backgroundColor:Colors.sidebar,
        borderRadius:15,
        width:Dimensions.get('window').width - 40,
        paddingBottom:10,paddingTop:10,
        marginTop:15,marginBottom:15
    },
    text:{
        fontSize:18,
        color:Colors.white,
        textAlign:'center',
        paddingBottom:10
    },
    icons:{fontSize:32,color:Colors.white,textAlign:"center"},
    clientnames:{color:Colors.white},
    names:{
        borderWidth:1,borderRadius:15,
        padding:5,
        backgroundColor:Colors.white,
        marginVertical:1,
        textAlign:"center",alignItems:"center"
    },
    listnames:{marginHorizontal:30}
})
export {partnersStyle};