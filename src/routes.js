import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';
import Icon from 'react-native-vector-icons/MaterialIcons';
import SignIn from '~/pages/SignIn';
import Dashboard from '~/pages/Dashboard';
import Account from '~/pages/Account';
import DeliveryDetail from '~/pages/DeliveryDetail';
import ProblemReport from '~/pages/ProblemReport';
import ProblemList from '~/pages/ProblemList';
import DeliveryConfirm from '~/pages/DeliveryConfirm';
import Main from '~/pages/Main';

export default (isSigned = false) =>

createAppContainer(
  createSwitchNavigator(
    {
      Sign: createSwitchNavigator({
        SignIn,
      }),
      App: createBottomTabNavigator(
        {
          Dashboard: {
            screen: FeedStack,
            navigationOptions: {
              tabBarLabel: 'Entregas',
              tabBarIcon: ({tintColor}) => (
                <Icon name="reorder" size={24} color={tintColor} />
              ),
            },
          },
          Account: {
            screen: Account,
            navigationOptions: {
              tabBarLabel: 'Meu Perfil',
              tabBarIcon: ({tintColor}) => (
                <Icon name="account-circle" size={24} color={tintColor} />
              ),
            },
          },
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
        },
    )
    },
    {
      initialRouteName: isSigned ? 'App' : 'Sign',
    }
  ),
);

const FeedStack = createStackNavigator({
  Dashboard: {
    screen: Dashboard,
    navigationOptions: {
      headerShown: false,
    }
  },
  DeliveryDetail: {
    screen: DeliveryDetail,
    navigationOptions: {
      headerShown: false,
    }
  },
  DeliveryConfirm: {
    screen: DeliveryConfirm,
    navigationOptions: {
      headerShown: false,
    }
  },
  ProblemReport: {
    screen: ProblemReport,
    navigationOptions: {
      headerShown: false,
    }
  },
  ProblemList: {
    screen: ProblemList,
    navigationOptions: {
      headerShown: false,
    }
  },
});


