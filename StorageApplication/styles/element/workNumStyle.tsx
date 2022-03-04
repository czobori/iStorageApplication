import { StyleSheet,Dimensions } from "react-native";
const workersCountStyle = StyleSheet.create({
    div:{
        backgroundColor:'#013F5A',
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
    textinfo:{
        fontSize:15,
        color:'#fff',
        textAlign:'center',
        paddingHorizontal:10
    },
    icons:{
        fontSize:28,
        color:'#fff',
        textAlign:"center",
        paddingBottom:10
    },
})
export {workersCountStyle};
