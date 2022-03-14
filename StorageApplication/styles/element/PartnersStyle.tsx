import { StyleSheet,Dimensions } from "react-native";
const partnersStyle = StyleSheet.create({
    div:{
        backgroundColor:'#003247',
        borderRadius:15,
        width:Dimensions.get('window').width - 40,
        paddingBottom:10,
        paddingTop:10,
        marginTop:15,
        marginBottom:15
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
    names:{
        borderWidth:1,
        borderRadius:15,
        padding:5,
        backgroundColor:"#fff",
        marginVertical:1,
        textAlign:"center",
        alignItems:"center"
    },
    listnames:{
        marginHorizontal:30
    }
})
export {partnersStyle};