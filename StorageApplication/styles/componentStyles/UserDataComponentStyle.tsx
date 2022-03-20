import { StyleSheet} from 'react-native';
import * as Colors from "../../const/colors";
const userComponentStyles = StyleSheet.create({
  div:{
    backgroundColor: Colors.black,
    padding:10,
    margin:10,
    borderRadius:15,
    paddingRight:20,
  },
  text:{
    color:Colors.white,
    paddingLeft:15,
  },
  names:{
    color:Colors.white,
    fontWeight: "bold",
    textAlign:"center",
    paddingBottom:5,
    fontSize:16
  },
  icons:{
    fontSize:12,
    color:Colors.white,
  },
  info:{
    textAlign:'center',
    fontSize:12,
    color:Colors.white
  },
});
export {userComponentStyles};