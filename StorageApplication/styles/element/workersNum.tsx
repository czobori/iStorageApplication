import { StyleSheet,Dimensions} from 'react-native';
const workersNStyle = StyleSheet.create({
    div:{
        backgroundColor:"#fff",
        borderRadius:15,
        width:Dimensions.get('window').width - 40,
        paddingBottom:10,
        paddingTop:2,
        marginTop:15,
        marginBottom:15,
        textAlign:"center",
        color:"#1e2833"
    },
});
export {workersNStyle};