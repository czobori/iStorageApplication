import { StyleSheet,Dimensions } from "react-native";
const partnersStyle = StyleSheet.create({
    div:{
        backgroundColor:'#003247',
        borderRadius:15,
        width:Dimensions.get('window').width - 40,
        paddingBottom:10,
        paddingTop:10,
        marginTop:15,
        textAlign:'center'
    },
    text:{
        fontSize:18,
        color:'#fff',
        textAlign:'center',
        paddingBottom:10
    },
    icons:{
        fontSize:32,
        color:'#fff',
        textAlign:"center"
    },
    clientnames:{
        color:'#fff'
    },
    nevek:{
        fontSize:16,
        color:'#fff',
        textAlign:"left",
        paddingLeft:25
    },
    listicon:{
        fontSize:14,
        color:"#fff",
        paddingRight:10
    }
})
export {partnersStyle};