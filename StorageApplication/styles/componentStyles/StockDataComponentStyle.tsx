import { StyleSheet} from 'react-native';
const stockComponentStyles = StyleSheet.create({
  div:{
    //backgroundColor: '#003247',
    backgroundColor:'#DCF5FF',
    paddingHorizontal:10,
    paddingVertical:2,
    marginHorizontal:5,
    marginVertical:5,
    borderRadius:5,
    borderWidth:2,
    borderBottomColor:'#003247'
  },
  telefonadat:{
    fontWeight: "bold"
  },
  rendelt:{
    textAlign:'right',
    //paddingRight:5
  },
  title:{
    fontSize:24,
    fontWeight:"bold",
    textAlign:"center"
  },
  megjegyzes:{
    textAlign:"center",
    marginBottom:10
  }
});
export {stockComponentStyles};