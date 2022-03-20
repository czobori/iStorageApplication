import { StyleSheet,Dimensions} from 'react-native';
const screenInfoTextStyles = StyleSheet.create({
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 20,
  },
  getStartedText: {
    fontSize: 17,
    lineHeight: 24,
    marginTop:15,
    textAlign: 'justify',
    marginBottom:10
  },
  helpContainer: {
    marginTop: 15,
    marginHorizontal: 20,
    alignItems: 'center',
  },
  helpLink: {paddingVertical: 15},
  helpLinkText: {textAlign: 'center'},
  div:{
    width:Dimensions.get('window').width - 40,
    borderRadius:10,
    opacity:0.8
  }
});
export {screenInfoTextStyles};
