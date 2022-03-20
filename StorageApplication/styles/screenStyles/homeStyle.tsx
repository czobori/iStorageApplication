import { StyleSheet,Dimensions} from 'react-native';
import * as Colors from "../../const/colors";
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
        backgroundColor:Colors.lightblue,
        borderRadius:15,
        width:Dimensions.get('window').width - 40,
        marginTop:15,
    }
});
export {homePageStyles};
