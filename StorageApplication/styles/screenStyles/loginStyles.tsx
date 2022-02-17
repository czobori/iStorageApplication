import { StyleSheet} from 'react-native';

const loginPageStyles = StyleSheet.create({
    button: {
      backgroundColor: "#ffffff",
      padding:10,
      margin:10,
      borderRadius:5,
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
      width: 200,
      textAlign: 'center',
      borderColor:'#FDFEFE',
      borderRadius:5,
      backgroundColor: '#7B7D7D',
    },
    istorage:{
      fontSize:30,
      marginBottom:20,
      fontFamily:"Cochin-Italic",
    }
  });
export {loginPageStyles};
