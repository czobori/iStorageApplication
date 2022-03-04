import { StyleSheet,Dimensions} from 'react-native';
const homePageStyles = StyleSheet.create({
    title:{
        textAlign:'center',
        fontSize:24
    },
    info:{
        textAlign:'center',
        fontSize:12
    },
    div:{
        backgroundColor:"#DCF5FF",
        borderRadius:15,
        width:Dimensions.get('window').width - 40,
        marginTop:15,
    }
});
export {homePageStyles};
