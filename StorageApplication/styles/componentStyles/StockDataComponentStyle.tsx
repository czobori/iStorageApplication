import { StyleSheet} from 'react-native';
const stockComponentStyles = StyleSheet.create({
  div:{
    backgroundColor:'#DCF5FF',
    paddingHorizontal:10,
    paddingVertical:2,
    marginTop:10,
    borderRadius:15,
    borderWidth:2,
    borderBottomColor:'#003247'
  },
  phonedata:{
    fontWeight: "bold"
  },
  orderd:{
    textAlign:'right',
  },
  title:{
    fontSize:24,
    fontWeight:"bold",
    textAlign:"center",
    color:'#fff',
    //marginTop:15
  },
  remark:{
    textAlign:"center",
    color:'#fff'
  }
});
export {stockComponentStyles};