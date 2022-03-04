import { StyleSheet,Dimensions} from 'react-native';
const deliveryCompStyles = StyleSheet.create({
  text:{
    fontSize:18,
    color:'#fff',
    textAlign:'center',
    paddingHorizontal:10
  },
  icons:{
    fontSize:35,
    color:'#fff',
    textAlign:"center"
  },
  div:{
    backgroundColor:"#506479",
    borderRadius:15,
    width:Dimensions.get('window').width - 40,
    paddingBottom:10,
    paddingTop:10,
    marginTop:15
  },
  info:{
    textAlign:'center',
    fontSize:12,
    color:"#fff"
},
});
export {deliveryCompStyles};