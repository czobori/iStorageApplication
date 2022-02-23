import { StyleSheet,Dimensions} from 'react-native';
const deliveryCompStyles = StyleSheet.create({
  text:{
    fontSize:18,
    color:'#fff',
    textAlign:'center'
  },
  icons:{
    fontSize:35,
    color:'#fff',
    textAlign:"center"
  },
  div:{
    backgroundColor:"#1e2833",
    borderRadius:16,
    width:Dimensions.get('window').width - 40,
    paddingBottom:10,
    paddingTop:10,
    marginTop:15
  }
});
export {deliveryCompStyles};