import { StyleSheet} from 'react-native';
import * as Colors from '../../const/colors';
const soldsComponentStyles = StyleSheet.create({
  div:{
    backgroundColor:Colors.backcolor,
    paddingHorizontal:10,
    paddingVertical:2,
    marginHorizontal:5,
    marginVertical:5,
    borderRadius:15,
    borderWidth:2,
    borderBottomColor:Colors.sidebar
  },
  phonedata:{fontWeight: "bold"},
  soldstext:{
    fontSize:24,
    fontWeight:"bold",
    textAlign:"center",
    color:Colors.black,
  },
  actualmonth:{
    textAlign:"center",
    marginBottom:10,
    color:Colors.black,
    fontSize:20
  },
  data:{textAlign:"right"}
});
export {soldsComponentStyles};