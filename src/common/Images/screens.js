import { Navigation } from 'react-native-navigation';

import FirstViewContainer from './containers/FirstViewContainer';
import SecondViewContainer from './containers/SecondViewContainer';
import ThirdViewContainer from './containers/ThirdViewContainer';
import ProfileView from './components/ProfileView/index';


const registerScreens = (store, Provider) => {
  Navigation.registerComponent('global.FirstView', () => FirstViewContainer, store, Provider);
  Navigation.registerComponent('global.SecondView', () => SecondViewContainer, store, Provider);
  Navigation.registerComponent('global.ThirdView', () => ThirdViewContainer, store, Provider);
  Navigation.registerComponent('ProfileView', () => ProfileView, store, Provider);

};

export default registerScreens;
