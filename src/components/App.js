import React, { Component } from 'react';
import { StatusBar, Platform, StyleSheet, Text, View} from 'react-native';
import Navigator from './Navigator';
import { Provider } from 'react-redux';
import configStore from '../store/configStore';
const store = configStore();
import registerScreens from './screens';
import { Navigation } from 'react-native-navigation';
import COMMON_STYLE from '../common/CommonStyle';
registerScreens(store, Provider);
const { THEME_COLOR, navigatorStyle } = COMMON_STYLE;


export default class App extends Component {
  static startApp() {
    Navigation.startTabBasedApp({
      tabs: [
        {
          label: 'Explore',
          screen: 'global.FirstView',
          icon: require('../common/Images/compass_gray.png'),
          selectedIcon: require('../common/Images/compass_active.png'),
          navigatorStyle: {
            ...navigatorStyle,
            navBarHidden: true,
            tabBarHidden: false
          }
        },
        {
          label: 'InBox',
          title: 'Inbox',
          screen: 'global.SecondView',
          icon: require('../common/Images/envelop_gray.png'),
          selectedIcon: require('../common/Images/envelop_active.png'),
          navigatorStyle,
          navigatorButtons: {
            rightButtons: [
              {
                icon: require('../common/Images/tune.png'), // for icon button, provide the local image asset name
                id: 'filter' // id for this button, given in onNavigatorEvent(event) to help understand which button was clicked
              },
              {
                icon: require('../common/Images/search.png'), // for icon button, provide the local image asset name
                id: 'search' // id for this button, given in onNavigatorEvent(event) to help understand which button was clicked
              }
            ]
          }
        },
        {
          label: 'Profile',
          screen: 'global.ThirdView',
          icon: require('../common/Images/profile_gray.png'),
          selectedIcon: require('../common/Images/profile_active.png'),
          navigatorStyle
        }
      ],
      tabsStyle: {
        tabBarTextFontFamily: 'Avenir-Medium',
        tabBarSelectedButtonColor: THEME_COLOR.color,
        tabBarBackgroundColor: '#fff'
      },
      appStyle: {
        tabBarBackgroundColor: '#fff',
        tabBarButtonColor: THEME_COLOR.lightGrey,
        navBarTextFontSize: 34,
        forceTitlesDisplay: true,
        tabFontFamily: 'Avenir-Medium',
        tabBarSelectedButtonColor: THEME_COLOR.color,
      },
      animationType: 'fade'
    });
  }
   render () {
      return (
        <Provider store={store}>
          { this.startApp() }
         </Provider>

      );
   }
}
