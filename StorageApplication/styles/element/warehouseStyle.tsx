import { StyleSheet,Dimensions} from 'react-native';
const warehouseStyle = StyleSheet.create({
    div:{
        backgroundColor:"#fff",
        borderRadius:15,
        width:Dimensions.get('window').width - 40,
        marginTop:15,
        marginBottom:15,
        textAlign:"center",
        color:"#1e2833"
    },
    name:{
        fontSize:26
    }
});
export {warehouseStyle};