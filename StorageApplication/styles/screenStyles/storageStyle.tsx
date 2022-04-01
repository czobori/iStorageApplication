import { StyleSheet,Dimensions} from 'react-native';
import * as Colors from "../../const/colors";
const storagePageStyles = StyleSheet.create({
  button:{
    borderWidth:2,borderColor:Colors.topnavbar,borderRadius:15,
    marginHorizontal:10,marginTop:15,
    padding:10, 
    alignItems:"center"
  },
  text:{fontSize:10,color:Colors.topnavbar,fontWeight:"bold",},
  icon:{fontSize:50,color:Colors.topnavbar},
  title:{color:Colors.black,fontWeight:"bold",fontSize:26}
});
export {storagePageStyles};
