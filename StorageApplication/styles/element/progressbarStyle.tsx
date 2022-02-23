import { StyleSheet,Dimensions} from 'react-native';
const warehousefullStyle = StyleSheet.create({
    bar:{
        borderRadius:5,
        height:10,
        color:'#003247',
        borderColor:'#003247',
        backgroundColor:'#003247',
        opacity:0.9,
    },
    text:{
        textAlign:'center',
        fontSize:22,
        paddingBottom:2
    },
    div:{
        alignItems:"center",
        backgroundColor:'#E7F2FD',
        borderRadius:16,
        width:Dimensions.get('window').width - 40,
        paddingTop:3,
        paddingBottom:10
    }
});
export {warehousefullStyle};