import { StyleSheet} from 'react-native';
import * as Colors from '../../const/colors';
const stockComponentStyles = StyleSheet.create({
  div:{
    backgroundColor:Colors.backcolor,
    paddingHorizontal:10,
    paddingVertical:2,
    marginTop:10,
    borderRadius:15,
    borderWidth:2,
    borderBottomColor:Colors.sidebar,
  },
  phonedata:{fontWeight: "bold"},
  orderd:{textAlign:'right'},
  title:{
    fontSize:24,
    fontWeight:"bold",
    textAlign:"center",
    color:Colors.white
  },
  remark:{
    textAlign:"center",
    color:Colors.white
  }
});
export {stockComponentStyles};