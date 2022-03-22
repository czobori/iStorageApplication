import { FontAwesome } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { ColorSchemeName, Pressable} from 'react-native';
import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import * as Screens from '../const/allScreen';
import { RootStackParamList, RootTabParamList, RootTabScreenProps } from '../types';
import LinkingConfiguration from './LinkingConfiguration';
import { FontAwesome5,MaterialCommunityIcons,Entypo,Fontisto,MaterialIcons} from '@expo/vector-icons';
import { Text } from '../components/Themed';
import * as myColors from "../const/colors";
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
      <Stack.Screen name="Root" component={BottomTabNavigator} options={{ headerShown: false }} />
      <Stack.Screen name="NotFound" component={Screens.NotFoundScreen} options={{ title: 'Oops!' }} />
      <Stack.Group screenOptions={{ presentation: 'modal' }}>
        <Stack.Screen name="Info" component={Screens.InfoScreen} />
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
        name="LoginScreen" component={Screens.LoginScreen} 
        options={({ navigation}: RootTabScreenProps<'LoginScreen'>) => ({
          title: 'Bejelentkezés',
          tabBarStyle: { display: "none" },
          tabBarButton: () => null,
          tabBarIcon: ({ }) => <Entypo name="login" size={24} color={myColors.topnavbar} />,
          headerRight: () => (
            <Pressable
              onPress={() => navigation.navigate('Info')}
              style={({ pressed }) => ({ opacity: pressed ? 0.5 : 1,})}>
              <FontAwesome name="info-circle" size={25} color={myColors.topnavbar} style={{ marginRight: 15 }} />
            </Pressable>
          ),
        })}
      />
      <BottomTab.Screen
        name="HomeScreen" component={Screens.HomeScreen}
        options={({ navigation }: RootTabScreenProps<'HomeScreen'>) => ({
          title: 'Statisztikák',
          tabBarIcon: ({ color }) => <MaterialIcons name="storage" size={27} color={myColors.topnavbar} />,
        })}
      />
      <BottomTab.Screen
        name="OrderInScreen" component={Screens.OrderInScreen}
        options={({ navigation }: RootTabScreenProps<'OrderInScreen'>) => ({
          tabBarButton: () => null,
          title: 'Beérkező',
          tabBarIcon: ({ color }) => <Fontisto name="truck" size={24} color={myColors.topnavbar} />,
        })}
      />
      <BottomTab.Screen
        name="StorageScreen" component={Screens.StorageScreen}
        options={({ navigation }: RootTabScreenProps<'StorageScreen'>) => ({
          title: 'Raktár',
          tabBarIcon: ({ color }) => <FontAwesome name="inbox" size={26} color={myColors.topnavbar} />,
        })}
      />
      <BottomTab.Screen
        name="PhoneHereScreen" component={Screens.PhoneHereScreen}
        options={({ navigation }: RootTabScreenProps<'PhoneHereScreen'>) => ({
          tabBarButton: () => null,
          title: 'Raktáron',
          tabBarIcon: ({ color }) => <FontAwesome name="inbox" size={26} color={myColors.topnavbar} />,
        })}
      />
      <BottomTab.Screen
        name="OrderOutScreen" component={Screens.OrderOutScreen}
        options={({ navigation }: RootTabScreenProps<'OrderOutScreen'>) => ({
          tabBarButton: () => null,
          title: 'Kimenő',
          tabBarIcon: ({ color }) => <MaterialCommunityIcons name="truck-check-outline" size={29} color={myColors.topnavbar} />,
        })}
      />
      <BottomTab.Screen
        name="UsersScreen" component={Screens.UsersScreen}
        options={({ navigation }: RootTabScreenProps<'UsersScreen'>) => ({
          title: 'Raktárosok',
          tabBarIcon: ({ color }) => <FontAwesome5 name="users" size={24} color={myColors.topnavbar} />,
        })}
      />
      <BottomTab.Screen
        name="LogoutScreen" component={Screens.LogoutScreen}
        options={({ navigation }: RootTabScreenProps<'LogoutScreen'>) => ({
          title: 'Kijelentkezés',
          tabBarIcon: ({ color }) => <Entypo name="log-out" size={24} color={myColors.topnavbar} />,
        })}
      />
    </BottomTab.Navigator>
    
  );
}

function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}){return <FontAwesome size={30} style={{ marginBottom: -3}} {...props} />;}