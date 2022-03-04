import { StyleSheet,Dimensions} from 'react-native';
const userComponentStyles = StyleSheet.create({
  div:{
    backgroundColor: '#000',
    padding:10,
    margin:10,
    borderRadius:15,
    paddingRight:20,
    opacity:0.80
  },
  text:{
    color:'#fff',
    paddingLeft:15,
  },
  names:{
    color:'#fff',
    fontWeight: "bold",
    textAlign:"center",
    paddingBottom:5,
    fontSize:16
  },
  icons:{
    fontSize:15,
    color:'#fff',
  }
});
export {userComponentStyles};