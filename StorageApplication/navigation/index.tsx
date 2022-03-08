import { FontAwesome } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { ColorSchemeName, Pressable} from 'react-native';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import InfoScreen from '../screens/InfoScreen';
import NotFoundScreen from '../screens/NotFoundScreen';
import LoginScreen from '../screens/LoginScreen';
import UsersScreen from '../screens/UsersScreen';
import HomeScreen from '../screens/HomeScreen';
import OrderInScreen from '../screens/OrderInScreen';
import OrderOutScreen from '../screens/OrderOutScreen';
import PhoneHereScreen from '../screens/PhoneHereScreen';
import LogoutScreen from '../screens/LogoutScreen copy';
import { RootStackParamList, RootTabParamList, RootTabScreenProps } from '../types';
import LinkingConfiguration from './LinkingConfiguration';
import { FontAwesome5,MaterialCommunityIcons,Entypo,Fontisto,MaterialIcons} from '@expo/vector-icons';

export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer linking={LinkingConfiguration} theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator>
      {/*alapból a login scrren latszik csak - eredetileg BottomTaabNavigator*/}
      <Stack.Screen name="Root" component={BottomTabNavigator} options={{ headerShown: false }} />
      <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
      <Stack.Group screenOptions={{ presentation: 'modal' }}>
        <Stack.Screen name="Info" component={InfoScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
}

const BottomTab = createBottomTabNavigator<RootTabParamList>();

function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="LoginScreen"
      screenOptions={{tabBarActiveTintColor: Colors[colorScheme].tint,}}>
      <BottomTab.Screen
        name="LoginScreen" component={LoginScreen} 
        options={({ navigation}: RootTabScreenProps<'LoginScreen'>) => ({
          title: 'Bejelentkezés',
          tabBarStyle: { display: "none" },
          tabBarButton: () => null,
          tabBarIcon: ({ }) => <Entypo name="login" size={24} color="#1e2833" />,
          headerRight: () => (
            <Pressable
              onPress={() => navigation.navigate('Info')}
              style={({ pressed }) => ({ opacity: pressed ? 0.5 : 1,})}>
              <FontAwesome name="info-circle" size={25} color="#1e2833" style={{ marginRight: 15 }} />
            </Pressable>
          ),
        })}
      />
      <BottomTab.Screen
        name="HomeScreen" component={HomeScreen}
        options={({ navigation }: RootTabScreenProps<'HomeScreen'>) => ({
          title: 'Statisztikák',
          tabBarIcon: ({ color }) => <MaterialIcons name="storage" size={27} color="#1e2833" />,
        })}
      />
      <BottomTab.Screen
        name="OrderInScreen" component={OrderInScreen}
        options={({ navigation }: RootTabScreenProps<'OrderInScreen'>) => ({
          title: 'Beérkező',
          tabBarIcon: ({ color }) => <Fontisto name="truck" size={24} color="#1e2833" />,
        })}
      />
      <BottomTab.Screen
        name="PhoneHereScreen" component={PhoneHereScreen}
        options={({ navigation }: RootTabScreenProps<'PhoneHereScreen'>) => ({
          title: 'Raktáron',
          tabBarIcon: ({ color }) => <FontAwesome name="inbox" size={26} color="#1e2833" />,
        })}
      />
      <BottomTab.Screen
        name="OrderOutScreen" component={OrderOutScreen}
        options={({ navigation }: RootTabScreenProps<'OrderOutScreen'>) => ({
          title: 'Kimenő',
          tabBarIcon: ({ color }) => <MaterialCommunityIcons name="truck-check-outline" size={29} color="#1e2833" />,
        })}
      />
      <BottomTab.Screen
        name="UsersScreen" component={UsersScreen}
        options={({ navigation }: RootTabScreenProps<'UsersScreen'>) => ({
          title: 'Raktárosok',
          tabBarIcon: ({ color }) => <FontAwesome5 name="users" size={24} color="#1e2833" />,
        })}
      />
      <BottomTab.Screen
        name="LogoutScreen" component={LogoutScreen}
        options={({ navigation }: RootTabScreenProps<'LogoutScreen'>) => ({
          title: 'Kijelentkezés',
          tabBarIcon: ({ color }) => <Entypo name="log-out" size={24} color="#1e2833" />,
        })}
      />
    </BottomTab.Navigator>
    
  );
}
/** You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/  */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}){
  return <FontAwesome size={30} style={{ marginBottom: -3}} {...props} />;
}

