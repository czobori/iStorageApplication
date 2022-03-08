import { StyleSheet,Dimensions} from 'react-native';
const phoneStyles = StyleSheet.create({
  div:{
    backgroundColor:'#DCF5FF',
    borderRadius:15,
    width:Dimensions.get('window').width - 40,
    padding:15,
    marginTop:15,
    fontWeight:"bold",
    //opacity:0.85,
    alignItems:"center"
  },
  title:{
    fontSize:24,
    fontWeight:"bold",
    textAlign:"center",
    color:'#fff',
  },
  remark:{
    fontSize:14,
    color:"#fff",
    textAlign:"center"
  },
  today:{
    fontSize:20,
    color:'#fff',
    textAlign:"center"
  },
  rows:{
    borderWidth:1,
    padding:5,
    paddingLeft:15,
    width:Dimensions.get('window').width - 60,
    backgroundColor:"#003247",
    borderColor:"#fff",
    borderRadius:15,
    marginVertical:2
  },
  data:{
    color:"#fff"
  }
});
export {phoneStyles};