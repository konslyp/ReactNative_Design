import { Navigation } from 'react-native-navigation';

import FirstViewContainer from './containers/FirstViewContainer';
import SecondViewContainer from './containers/SecondViewContainer';
import ThirdViewContainer from './containers/ThirdViewContainer';
import ProfileView from './components/ProfileView/index';
import MomentView from './components/ProfileView/MomentView';
import EditProfileView from './components/ProfileView/EditProfileView';
import AddMomentView from './components/ProfileView/AddMomentView';
import CommentsView from './components/ProfileView/CommentsView';
import FeedbackView from './components/ProfileView/FeedbackView';
import ContactListView from './components/ProfileView/ContactListView';
import SearchContactView from './components/ProfileView/SearchContactView';
import CreateServiceViewStep1 from './components/ProfileView/CreateServiceViewStep1';
import CreateServiceViewStep2 from './components/ProfileView/CreateServiceViewStep2';
import CreateServiceViewStep3 from './components/ProfileView/CreateServiceViewStep3';
import ProviderViewRead from './components/ProfileView/ProviderViewRead';
import UserProfileEditView from './components/ProfileView/UserProfileEditView';
import UserProfileReadView from './components/ProfileView/UserProfileReadView';
import MomentReadView from './components/ProfileView/MomentReadView';
import CertsAwardView from './components/ProfileView/CertsAwardView';
import CertsAwardReadView from './components/ProfileView/CertsAwardReadView';
import UploadIdentityView from './components/ProfileView/UploadIdentityView';
import EditStoreView from './components/ProfileView/EditStoreView';
import EditHeaderImageView from './components/ProfileView/EditHeaderImageView';
import EditStorefrontTagView from './components/ProfileView/EditStorefrontTagView';
import ChatView from './components/ProfileView/ChatView';
import Inbox from './components/Inbox/index';
import InboxTaskDetailView from './components/Inbox/TaskDetail';





const registerScreens = (store, Provider) => {
  Navigation.registerComponent('global.FirstView', () => FirstViewContainer, store, Provider);
  Navigation.registerComponent('global.SecondView', () => SecondViewContainer, store, Provider);
  Navigation.registerComponent('global.ThirdView', () => ThirdViewContainer, store, Provider);
  Navigation.registerComponent('ProfileView', () => ProfileView, store, Provider);
  Navigation.registerComponent('MomentView', () => MomentView, store, Provider);
  Navigation.registerComponent('EditProfileView', () => EditProfileView, store, Provider);
  Navigation.registerComponent('AddMomentView', () => AddMomentView, store, Provider);
  Navigation.registerComponent('CommentsView', () => CommentsView, store, Provider);
  Navigation.registerComponent('FeedbackView', () => FeedbackView, store, Provider);
  Navigation.registerComponent('ContactListView', () => ContactListView, store, Provider);
  Navigation.registerComponent('SearchContactView', () => SearchContactView, store, Provider);
  Navigation.registerComponent('CreateServiceViewStep1', () => CreateServiceViewStep1, store, Provider);
  Navigation.registerComponent('CreateServiceViewStep2', () => CreateServiceViewStep2, store, Provider);
  Navigation.registerComponent('CreateServiceViewStep3', () => CreateServiceViewStep3, store, Provider);
  Navigation.registerComponent('ProviderViewRead', () => ProviderViewRead, store, Provider);
  Navigation.registerComponent('UserProfileEditView', () => UserProfileEditView, store, Provider);
  Navigation.registerComponent('UserProfileReadView', () => UserProfileReadView, store, Provider);
  Navigation.registerComponent('MomentReadView', () => MomentReadView, store, Provider);
  Navigation.registerComponent('CertsAwardView', () => CertsAwardView, store, Provider);
  Navigation.registerComponent('CertsAwardReadView', () => CertsAwardReadView, store, Provider);
  Navigation.registerComponent('UploadIdentityView', () => UploadIdentityView, store, Provider);
  Navigation.registerComponent('EditStoreView', () => EditStoreView, store, Provider);
  Navigation.registerComponent('EditHeaderImageView', () => EditHeaderImageView, store, Provider);
  Navigation.registerComponent('EditStorefrontTagView', () => EditStorefrontTagView, store, Provider);
  Navigation.registerComponent('ChatView', () => ChatView, store, Provider);
  Navigation.registerComponent('Inbox', () => Inbox, store, Provider);
  Navigation.registerComponent('global.InboxTaskDetailView', () => InboxTaskDetailView, store, Provider);


};

export default registerScreens;
