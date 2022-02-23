import { StyleSheet,Dimensions} from 'react-native';
const homePageStyles = StyleSheet.create({
    cim:{
        textAlign:'center',
        fontSize:24
    },
    informacio:{
        textAlign:'center',
        fontSize:12
    },
    div:{
        backgroundColor:"#DCF5FF",
        borderRadius:16,
        width:Dimensions.get('window').width - 40,
        marginTop:15
    }
});
export {homePageStyles};
