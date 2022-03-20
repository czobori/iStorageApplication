import { StyleSheet,Dimensions} from 'react-native';
import * as Colors from "../../const/colors";
const loginPageStyles = StyleSheet.create({
  button: {
    backgroundColor: Colors.sidebar,
    padding:10,
    margin:10,
    borderRadius:10,
    borderWidth: 1,
    borderColor:Colors.white
  },
  buttonText: {fontSize: 20},
  text: {
    fontSize:15,
    marginTop:10,
    marginBottom:10,
  },
  input: {
    height: 40,
    margin:5,
    borderWidth:1,
    padding:5,
    width:Dimensions.get('window').width - 100,
    maxWidth:350,
    textAlign: 'center',
    borderColor:Colors.inputborder,
    borderRadius:15,
    backgroundColor: Colors.sidebar,
    color:Colors.white
  },
  istorage:{
    fontSize:34,
    marginBottom:15,
    fontFamily:"Cochin-Italic",
    textAlign:"center"
  },
  feher:{color:Colors.white},
  errortext:{
    color:Colors.errorred,
    alignSelf:"stretch",
    textAlign:"center",
    fontSize:12,
    fontWeight:"bold"
  }
});
export {loginPageStyles};
