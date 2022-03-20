import { StyleSheet,Dimensions} from 'react-native';
import * as Colors from "../../const/colors";
const phoneStyles = StyleSheet.create({
  div:{
    backgroundColor:Colors.backcolor,
    borderRadius:15,
    width:Dimensions.get('window').width - 40,
    padding:15,
    marginTop:15,
    fontWeight:"bold",
    alignItems:"center"
  },
  title:{
    fontSize:24,
    fontWeight:"bold",
    textAlign:"center",
    color:Colors.white,
  },
  remark:{
    fontSize:14,
    color:Colors.white,
    textAlign:"center"
  },
  today:{
    fontSize:20,
    color:Colors.white,
    textAlign:"center"
  },
  rows:{
    borderWidth:1,
    padding:5,
    paddingLeft:15,
    width:Dimensions.get('window').width - 60,
    backgroundColor:Colors.sidebar,
    borderColor:Colors.white,
    borderRadius:15,
    marginVertical:2
  },
  data:{color:Colors.white}
});
export {phoneStyles};