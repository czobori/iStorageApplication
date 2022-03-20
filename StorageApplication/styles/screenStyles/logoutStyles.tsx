import { StyleSheet,Dimensions} from 'react-native';
import * as Colors from "../../const/colors";
const logoutPageStyles = StyleSheet.create({
  button: {
    backgroundColor: Colors.sidebar,
    padding:10,
    margin:10,
    marginTop:0,
    borderRadius:10,
    borderWidth: 1,
    borderColor:Colors.white
  },
  text: {
    fontSize:16,
    marginTop:10,
    marginBottom:10,
    textAlign:'center',
    fontWeight:"bold"
  },
  white:{
    color:Colors.white,
    fontSize:16
  },
});
export {logoutPageStyles};
