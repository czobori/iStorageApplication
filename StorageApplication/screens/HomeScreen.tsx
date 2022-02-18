import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import { homePageStyles } from '../styles/screenStyles/homeStyle';
import { containerStyles } from '../styles/element/containerStyle';
import AccordingToTheBrand from '../element/Diagram';

export default function HomeScreen({ navigation }: RootTabScreenProps<'HomeScreen'>) {
  return(
    <View style={containerStyles.container}>
    <AccordingToTheBrand/>
      
    </View>
    
  )
}