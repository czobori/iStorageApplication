import { StyleSheet,Dimensions } from "react-native";
const partnersCountStyle = StyleSheet.create({
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
        textAlign:'center'
    },
    icons:{
        fontSize:32,
        color:'#fff',
        textAlign:"center"
    },
    clientnames:{
        color:'#fff'
    }
})
export {partnersCountStyle};