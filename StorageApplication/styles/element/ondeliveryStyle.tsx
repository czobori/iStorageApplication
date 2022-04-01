import { StyleSheet,Dimensions} from 'react-native';
import * as Colors from "../../const/colors";
const deliveryCompStyles = StyleSheet.create({
  text:{
    fontSize:18,
    color:Colors.white,
    textAlign:'center',
    paddingHorizontal:10
  },
  icons:{fontSize:35,color:Colors.white,textAlign:"center"},
  div:{
    backgroundColor:Colors.grayblue,
    borderRadius:15,
    width:Dimensions.get('window').width - 40,
    paddingBottom:10,paddingTop:10,
    marginTop:15
  },
  info:{textAlign:'center',fontSize:12,color:Colors.white},
});
export {deliveryCompStyles};