import { StyleSheet,Dimensions} from 'react-native';
const phoneStyles = StyleSheet.create({
  div:{
    backgroundColor:'#DCF5FF',
    borderRadius:15,
    width:Dimensions.get('window').width - 40,
    padding:15,
    marginTop:15,
    fontWeight:"bold",
    opacity:0.75
  },
  title:{
    //backgroundColor:'#fff',
    fontSize:24,
    fontWeight:"bold",
    textAlign:"center",
    paddingTop:10,
    marginTop:15,
    color:'#fff',
  },
  megjegyzes:{
    fontSize:14,
    color:"#fff",
    textAlign:"center"
  },
  today:{
    fontSize:20,
    color:'#fff',
    textAlign:"center"
  },
});
export {phoneStyles};