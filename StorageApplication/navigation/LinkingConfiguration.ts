import { LinkingOptions } from '@react-navigation/native';
import * as Linking from 'expo-linking';

import { RootStackParamList } from '../types';

const linking: LinkingOptions<RootStackParamList> = {
  prefixes: [Linking.makeUrl('/')],
  config: {
    screens: {
      Root: {
        screens: {
          LoginScreen:{
            screens:{
              LoginScreen: 'login',
            }
          },
          HomeScreen:{
            screens:{
              HomeScreen: 'home',
            }
          },
          UsersScreen:{
            screens:{
              UsersScreen: 'users',
            }
          }
        },
      },
      Info: 'info',
      NotFound: '*',
    },
  },
};

export default linking;
