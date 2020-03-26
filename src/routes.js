import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import SignIn from '~/pages/SignIn';
import Dashboard from '~/pages/Dashboard';
import Account from '~/pages/Account';

export default createAppContainer(
  createSwitchNavigator({
    Sign: createSwitchNavigator({
      SignIn,
    }),
    App: createBottomTabNavigator(
      {
        Dashboard,
        Account,
      },
      {
        tabBarOptions: {
          keyboardHidesTabBar: true,
          activeTintColor: '#7d40e7',
          inactiveBackgroundColor: 'rgba(255, 255, 255, 0.6)',
          style: {
            backgroundColor: '#ffffff'
          },
        },
      }
    ),
  }),
);
  // {
  //   defaultNavigationOptions: {
  //     headerStyle: {
  //       backgroundColor: '#7d40e7',
  //     },
  //     headerTitleAlign: 'center',
  //   },
  // }

// export default createAppContainer(Routes);
