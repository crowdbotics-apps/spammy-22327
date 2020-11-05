import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile168217Navigator from '../features/UserProfile168217/navigator';
import Tutorial168216Navigator from '../features/Tutorial168216/navigator';
import NotificationList168188Navigator from '../features/NotificationList168188/navigator';
import Settings168187Navigator from '../features/Settings168187/navigator';
import Settings168179Navigator from '../features/Settings168179/navigator';
import UserProfile168177Navigator from '../features/UserProfile168177/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
UserProfile168217: { screen: UserProfile168217Navigator },
Tutorial168216: { screen: Tutorial168216Navigator },
NotificationList168188: { screen: NotificationList168188Navigator },
Settings168187: { screen: Settings168187Navigator },
Settings168179: { screen: Settings168179Navigator },
UserProfile168177: { screen: UserProfile168177Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
