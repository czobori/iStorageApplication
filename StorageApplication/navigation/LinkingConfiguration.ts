import { LinkingOptions } from '@react-navigation/native';
import * as Linking from 'expo-linking';
import { RootStackParamList } from '../types';

const linking: LinkingOptions<RootStackParamList> = {
  prefixes: [Linking.makeUrl('/')],
  config: {
    screens: {
      Root: {
        screens: {
          LoginScreen:{ screens:{LoginScreen: 'login'}},
          HomeScreen:{screens:{HomeScreen: 'home'}},
          UsersScreen:{screens:{UsersScreen: 'users'}},
          OrderInScreen:{screens:{OrderInScreen : 'orderIn'}},
          OrderOutScreen:{screens:{ OrderOutScreen: 'orderOut'}},
          PhoneHereScreen:{screens:{PhoneHereScreen: 'phoneHere'}},
          LogoutScreen:{screens:{LogoutScreen: 'logout'}},
          StorageScreen:{screens:{StorageScreen: 'storage'}}
        },
      },
      Info: 'info',
      NotFound: '*',
    },
  },
};
export default linking;