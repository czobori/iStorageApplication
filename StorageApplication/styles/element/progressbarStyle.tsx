import { StyleSheet} from 'react-native';

const progressBarStyles = StyleSheet.create({
    bar:{
        borderRadius:5,
        height:10,
        color:'#003247',
        borderColor:'#003247',
        backgroundColor:'#003247',
        opacity:0.9,
    },
    text:{
        textAlign:'center',
        fontSize:24
    }
});
export {progressBarStyles};