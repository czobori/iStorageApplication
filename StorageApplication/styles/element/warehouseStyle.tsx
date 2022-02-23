import { StyleSheet,Dimensions} from 'react-native';
const warehouseStyle = StyleSheet.create({
    div:{
        backgroundColor:"#fff",
        borderRadius:16,
        width:Dimensions.get('window').width - 40,
        paddingBottom:10,
        paddingTop:2,
        marginTop:15,
        marginBottom:15,
        textAlign:"center",
        color:"#1e2833"
    },
    nev:{
        fontSize:26
    }
});
export {warehouseStyle};