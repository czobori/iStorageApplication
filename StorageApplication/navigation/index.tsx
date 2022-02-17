import { FontAwesome } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { ColorSchemeName, Pressable } from 'react-native';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import InfoScreen from '../screens/InfoScreen';
import NotFoundScreen from '../screens/NotFoundScreen';
import LoginScreen from '../screens/LoginScreen';
import UsersScreen from '../screens/UsersScreen';
import HomeScreen from '../screens/HomeScreen';
import { RootStackParamList, RootTabParamList, RootTabScreenProps } from '../types';
import LinkingConfiguration from './LinkingConfiguration';

import { AntDesign,FontAwesome5,MaterialCommunityIcons } from '@expo/vector-icons';

export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Root" component={BottomTabNavigator} options={{ headerShown: false }} />
      <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
      <Stack.Group screenOptions={{ presentation: 'modal' }}>
        <Stack.Screen name="Info" component={InfoScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
}

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const BottomTab = createBottomTabNavigator<RootTabParamList>();

function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="LoginScreen"
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme].tint,
      }}>
      <BottomTab.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={({ navigation }: RootTabScreenProps<'LoginScreen'>) => ({
          title: 'Bejelentkezés',
          tabBarIcon: ({ color }) => <MaterialCommunityIcons name="login-variant" size={24} color="black" />,
          headerRight: () => (
            <Pressable
              onPress={() => navigation.navigate('Info')}
              style={({ pressed }) => ({
                opacity: pressed ? 0.5 : 1,
              })}>
              <FontAwesome
                name="info-circle"
                size={25}
                color={Colors[colorScheme].text}
                style={{ marginRight: 15 }}
              />
            </Pressable>
          ),
        })}
      />
      <BottomTab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={({ navigation }: RootTabScreenProps<'HomeScreen'>) => ({
          title: 'Kezdőlap',
          tabBarIcon: ({ color }) => <FontAwesome5 name="home" size={24} color="black" />,
        })}
      />
      <BottomTab.Screen
        name="UsersScreen"
        component={UsersScreen}
        options={({ navigation }: RootTabScreenProps<'UsersScreen'>) => ({
          title: 'Felhasználók',
          tabBarIcon: ({ color }) => <FontAwesome5 name="users" size={24} color="black" />,
        })}
      />
    </BottomTab.Navigator>
    
  );
}

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}){
  return <FontAwesome size={30} style={{ marginBottom: -3 }} {...props} />;
}
