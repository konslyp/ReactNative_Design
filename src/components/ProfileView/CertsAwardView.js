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

export default class CertsAwardView extends Component {

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


  addImageWithRealSize(){
    var srcImg = require('../../common/Images/cert2.jpg');
    Image.getSize(srcImg, (width, height) =>
      {
        var widthImage = windowWidth85 * (windowWidth / width)
        return (
          <Image resizeMode={Image.resizeMode.contain} source={srcImg} style={{flex:1,width:widthImage,height:300}}/>
        );
      }
    );
  };

  render() {
    var offset = 0;
    return (
      <View style={{flex:1,backgroundColor:'white'}}>
          <View>
            <Text style={{color:'rgb(106,100,100)',fontSize:18,width:windowWidth,textAlign:'center',marginTop:15,paddingBottom:10}}>Certs & Awards</Text>
            <TouchableHighlight style={Styles.imgTopLeft} activeOpacity={0.6} underlayColor={'rgba(255,255,255,0.1)'}
              onPress={()=>
                  this.props.navigator.pop()
                }>
                <Image resizeMode={Image.resizeMode.stretch} source={require('../../common/Images/backIcon@2x.png')} style={{width:10,height:20}}/>
            </TouchableHighlight>
          </View>
          <View style={{flex:1}}>
            <ScrollView
            style={{marginBottom:70}}
            onScroll={(event) => {

            }}
            scrollEventThrottle={100}>
            <View style={{flexDirection:'row', height:70,alignItems:'center',marginTop:10}}>
                <Image resizeMode={Image.resizeMode.cover} source={require('../../common/Images/awards@2x.png')} style={Styles.iconButton35}/>
                <View style={{marginLeft:10}}>
                    <Text style={[CommonStyles.medium18,{color:'rgb(184,184,184)',fontSize:20,fontWeight:'bold'}]}>Maryilyn Wedge</Text>
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

            </View>
            <View>
            <View style={{flexDirection:'row',margin:10}}>
              <View style={{flex:1}}>
                <TextInput underlineColorAndroid='transparent' selectionColor='rgb(243,145,28)' style={{fontWeight:'bold',paddingBottom:0,borderBottomWidth:1,borderColor: 'rgb(184,184,184)',color:'rgb(184,184,184)',fontSize:20}} placeholder='Cert title here' placeholderTextColor='rgb(184,184,184)'></TextInput>
              </View>
            </View>

            <View style={{marginTop:0,marginLeft:10,marginRight:10,marginBottom:10}}>
                <TextInput underlineColorAndroid='transparent' selectionColor='rgb(243,145,28)' style={{height: Math.max(35, this.state.bioHeight),flex:1,paddingBottom:0,borderBottomWidth:1,fontSize:14,borderColor: 'rgb(184,184,184)',color:'rgb(184,184,184)'}} placeholderTextColor='rgb(184,184,184)' placeholder='Description here...' maxLength = {200} multiline = {true}
                onChange={(event) => {
                  this.setState({
                    bioHeight: event.nativeEvent.contentSize.height
                  });

                }
              }></TextInput>
            </View>
            <View style={{flexDirection:'row',flex:1}}>
              <TouchableHighlight style={{marginLeft:10}} activeOpacity={0.6} underlayColor={'white'}
                  onPress={this.onTestBtn}>
                  <Image resizeMode={Image.resizeMode.stretch} source={require('../../common/Images/camera@3x.png')} style={{width:25,height:20}}/>
              </TouchableHighlight>
              <Text style={[CommonStyles.book,{marginRight:10,flex:1,textAlign:'right',color:'rgb(184,184,184)',fontSize:14}]}>1/9</Text>
            </View>
            </View>
          </ScrollView>

          <View style={{flexDirection:'row',bottom:10,marginLeft:10,marginRight:10,position:'absolute'}}>
            <TouchableHighlight style={{flex:1}} activeOpacity={0.6} underlayColor={'white'}
                onPress={this.onTestBtn}>
                <View style={[Styles.btnFullYellow,{height:50}]}>
                  <Text style={{color:'white'}}>Apply</Text>
                </View>
            </TouchableHighlight>
          </View>


        </View>
      </View>
    );
  }
}
