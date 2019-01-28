import React, { Component } from 'react';
import { AppRegistry, Navigator } from 'react-native';
import {
  TouchableHighlight,
  Modal,
  TextInput,
  Dimensions,
  ScrollView,
  Animated,
  Easing,
  View,
  Image,
  Text,
  Alert
} from 'react-native';

import Styles from './styles';
import CommonStyles from '../../common/CommonStyle';
import ImagePicker from 'react-native-image-picker';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import ImageCropper from '../../common/ImageCropper';


const options = {
  title: 'Select Avatar',
  storageOptions: {
    skipBackup: true,
    path: 'images'
  }
}


const windowWidth = Dimensions.get('window').width;
const windowWidth85 = Dimensions.get('window').width * 0.85;

export default class CertsAwardReadView extends Component {

  static navigatorStyle = {
        tabBarHidden: true,
        navBarHidden:true
    };
  getCroppedImg(uri) {
    this.setState(() => ({
      avatarCropped: {
        uri
      },
      openCorpModal: false
    }));
  }

  openModal = () => {
    this.setState({
      openCorpModal: true
    });
  }

  closeModal = () => {
    this.setState({
      openCorpModal: false
    });
  }

  pickAvatar = () => {
    ImagePicker.showImagePicker(options, (response) => {
      console.log('Response = ', response);
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePickerManager Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        const avatarSource = { uri: response.uri, width: response.width, height: response.height };
        this.setState({
          avatarSource,
          openCorpModal: true
        });
      }
    });
  }


  state = {
    avatarSource: null,
    avatarCropped: {
      uri: null
    },
    openCorpModal: false,
    bottomValue :20,
    profileTopHeight: new Animated.Value(200),
    resizeAnim: new Animated.Value(200),
    titleScreen:"Profile",
    momentVisible:[new Animated.Value(310),new Animated.Value(310)],
    momentHeights:[new Animated.Value(310),new Animated.Value(310)],
    contentHeights:[0,0],
    exampleContentHeight:0,
    minMomentHeight: new Animated.Value(300),
    titleExpand:'Expand'
  };
  onTestBtn()
  {

  };
  modalInputTag(visible) {
    this.setState({inputTagModalVisible: visible});
  };




  render() {
    var offset = 0;
    return (
      <View style={{flex:1,backgroundColor:'white'}}>
          <View>
            <Text style={{color:'rgb(106,100,100)',fontSize:18,width:windowWidth,textAlign:'center',marginTop:15,paddingBottom:10}}>Certs & Awards</Text>
            <TouchableHighlight style={[Styles.imgTopLeft,{width:50}]} activeOpacity={0.6} underlayColor={'rgba(255,255,255,0.1)'}
              onPress={()=>
                  this.props.navigator.pop()
                }>
                <Image resizeMode={Image.resizeMode.stretch} source={require('../../common/Images/close@2x.png')} style={{width:20,height:20}}/>
            </TouchableHighlight>
          </View>
          <View style={{flex:1}}>
            <ScrollView
            onScroll={(event) => {

            }}
            scrollEventThrottle={100}>
            <View style={{flexDirection:'row', height:70,alignItems:'center',marginTop:10}}>
                <Image resizeMode={Image.resizeMode.cover} source={require('../../common/Images/awards@2x.png')} style={Styles.iconButton35}/>
                <View style={{marginLeft:10}}>
                    <Text style={[CommonStyles.medium18,{color:'rgb(184,184,184)',fontSize:18}]}>Maryilyn Wedge</Text>
                </View>
            </View>
            <View style={{backgroundColor:'white'}}>
              <View style={{marginTop:10,marginLeft:30,marginRight:30,flex:1}}>
                <Text style={[CommonStyles.medium18,{fontSize:18,color:'rgb(106,100,100)'}]}>BRITH CERTIFICATE</Text>
                <View style={{marginTop:2,height:1,width:200,backgroundColor:'rgb(247,148,29)'}}/>
                <View style={{minHeight:50,marginTop:10,alignItems:'center',marginTop:5}}>
                  <Text style={[CommonStyles.book,{color:'rgb(106,100,100)',fontSize:14}]}>The documentation of births is a practice widely
                  held throughout human civilization.
                  Births were initially registered with churches, who
                  maintained registers of births.
                  </Text>
                </View>

                <Image resizeMode={Image.resizeMode.contain} source={require('../../common/Images/cert.jpg')} style={{flex:1,height:300,width:200}}/>

              </View>

              <View style={{marginTop:10,marginLeft:30,marginRight:30,flex:1}}>
                <Text style={[CommonStyles.medium18,{fontSize:18,color:'rgb(106,100,100)',maxWidth:230}]}>Southern Woods University of
                Year 1989 June
                </Text>
                <View style={{marginTop:2,height:1,width:200,backgroundColor:'rgb(247,148,29)'}}/>
                <View style={{minHeight:50,marginTop:10,alignItems:'center',marginTop:5}}>
                  <Text style={[CommonStyles.book,{color:'rgb(106,100,100)',fontSize:14}]}>The documentation of births is a practice widely
                  held throughout human civilization.
                  Births were initially registered with churches, who
                  maintained registers of births.
                  </Text>
                </View>
                <Image resizeMode={Image.resizeMode.contain} source={require('../../common/Images/cert2.jpg')} style={{flex:1,height:230,width:300}}/>
              </View>
            </View>
          </ScrollView>
        </View>
      </View>
    );
  }
}
