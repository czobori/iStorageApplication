import { StyleSheet,Dimensions} from 'react-native';
const phoneStyles = StyleSheet.create({
  div:{
    backgroundColor:'#DCF5FF',
    borderRadius:15,
    width:Dimensions.get('window').width - 40,
    padding:15,
    marginTop:15,
  },
  title:{
    fontSize:24,
    fontWeight:"bold",
    textAlign:"center",
    paddingBottom:10
  },
});
export {phoneStyles};