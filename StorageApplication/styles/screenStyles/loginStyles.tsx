import { StyleSheet,Dimensions} from 'react-native';

const loginPageStyles = StyleSheet.create({
  button: {
    backgroundColor: "#003247",
    padding:10,
    margin:10,
    borderRadius:10,
    borderWidth: 1,
    borderColor:'#fff'
  },
  buttonText: {
    fontSize: 20,
  },
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
    textAlign: 'center',
    borderColor:'#FDFEFE',
    borderRadius:15,
    backgroundColor: '#003247',
    color:'#fff'
  },
  istorage:{
    fontSize:34,
    marginBottom:15,
    fontFamily:"Cochin-Italic",
    textAlign:"center"
  },
  feher:{
    color:'#fff'
  }
});
export {loginPageStyles};
