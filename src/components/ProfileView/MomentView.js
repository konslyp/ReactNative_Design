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

export default class MomentView extends Component {

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
          <View style={{backgroundColor: 'red'}}>
            <Animated.Image resizeMode={Image.resizeMode.cover} source={require('../../common/Images/dogtrain.jpg')} style={{width: windowWidth,height: this.state.profileTopHeight}}/>
            <View style={Styles.profileViewTop} />
            <Text style={Styles.labelScreen} visible={this.state.visibleTitle}>{this.state.titleScreen}</Text>

            <TouchableHighlight style={Styles.imgTopLeft} activeOpacity={0.6} underlayColor={'rgba(255,255,255,0.1)'}
              onPress={()=>
                  this.props.navigator.pop()
                }>
                <Image resizeMode={Image.resizeMode.cover} source={require('../../common/Images/backWhite.png')} style={{width:20,height:20}}/>
            </TouchableHighlight>

            <TouchableHighlight style={Styles.imgTopRight} activeOpacity={0.6} underlayColor={'rgba(255,255,255,0.1)'} onPress={this.onTestBtn}>
                <Image resizeMode={Image.resizeMode.stretch} source={require('../../common/Images/settingWhite.png')} style={{width:20,height:20}}/>
            </TouchableHighlight>
            <View style={{width: windowWidth,position: 'absolute',bottom:this.state.bottomValue}}>
              <Text style={Styles.labelProfileFooterBold}>Shutter Edge Photography</Text>
              <Text style={Styles.labelProfileFooter}>ABN 90 000 345 23</Text>
            </View>
          </View>
          <View style={{flex:1}}>
            <ScrollView
            onScroll={(event) => {

              var currentOffset = event.nativeEvent.contentOffset.y;
              var direction = currentOffset > this.offset ? 'down' : 'up';
              if (currentOffset > this.offset)
              {
                Animated.timing(
                  this.state.profileTopHeight,
                  {
                    toValue: 50,
                    duration: 1000,
                  }
                ).start()
                this.state.bottomValue = 5;
                this.setState({bottomValue: this.state.bottomValue});
                this.setState({titleScreen: ""});
              }
              else {
                if (currentOffset == 0)
                {
                  Animated.timing(
                    this.state.profileTopHeight,
                    {
                      toValue: 200,
                      duration: 1000,
                    }
                  ).start()
                  this.state.bottomValue = 20;
                  this.setState({bottomValue: this.state.bottomValue});
                  this.setState({titleScreen: "Profile"});
                }
              }
              this.offset = currentOffset;
            }}
            scrollEventThrottle={100}>
            <View style={{flexDirection:'row', height:70,alignItems:'center',marginTop:10}}>
                <Image resizeMode={Image.resizeMode.cover} source={require('../../common/Images/dogtrain.jpg')} style={Styles.circleImageView}/>
                <View style={{marginLeft:10}}>
                    <Text style={Styles.labelGrayBold14}>ABN 90 000 345 23</Text>
                    <Text style={Styles.labelGray12}>Photographer</Text>
                    <Text style={Styles.labelGray12}>Melbourne, VIC</Text>
                </View>
            </View>

            <View style={{margin:10}}>
              <TouchableHighlight style={{flex:1}} activeOpacity={0.6} underlayColor={'white'}
              onPress={()=>
                  this.props.navigator.push({
                            screen: 'AddMomentView'
                        })
                }>
                  <View style={Styles.btnFullYellow}>
                    <Image resizeMode={Image.resizeMode.stretch} source={require('../../common/Images/camera_white@2x.png')} style={{marginRight:10,marginTop:3,width:25,height:20}}/>
                    <Text style={{color:'white'}}>Add Moment</Text>
                  </View>
              </TouchableHighlight>
            </View>
            <View style={{marginTop:10,height:1,backgroundColor:'rgb(217,217,217)'}}/>

            <View style={{marginLeft:10,marginRight:10,marginTop:10}}>
              <Text style={Styles.labelGrayBold14}>All Moments</Text>
            </View>
            <View style={{backgroundColor:'white'}}>
              <Animated.View  style={[Styles.commentContainer,{flexDirection:'row',height:this.state.momentHeights[0]}]}>
                  <View style={{width:60,alignItems:'center',width:50}}>
                      <Text style={[CommonStyles.medium16,{color:'rgb(106,100,100)'}]}>Jan</Text>
                      <Text style={[CommonStyles.medium18,{fontWeight:'bold',color:'rgb(106,100,100)',fontSize:22}]}>22</Text>
                  </View>
                  <View style={{flex:1,marginLeft:5}} onLayout={(event) => {
                    this.state.contentHeights[0] = event.nativeEvent.layout.height;
                  }}>
                      <View style={{minHeight:50,alignItems:'center'}}>
                        <Text style={[CommonStyles.book,{color:'rgb(106,100,100)',fontSize:14}]}>Nullam id dolor id nibh ultricies vehicula ut id elit. Cum sociis natoque penatibus et magnis dis mus.</Text>
                      </View>
                      <View flexDirection='row' style={{marginTop:5}} >
                        <Image resizeMode={Image.resizeMode.stretch} source={require('../../common/Images/dogtrain_thumb.png')} style={Styles.imgCommentThumb}/>
                        <Image resizeMode={Image.resizeMode.stretch} source={require('../../common/Images/dogtrain_thumb.png')} style={Styles.imgCommentThumb}/>
                        <Image resizeMode={Image.resizeMode.stretch} source={require('../../common/Images/dogtrain_thumb.png')} style={Styles.imgCommentThumb}/>
                      </View>
                      <View flexDirection='row'  style={{marginTop:5}}>
                        <Image resizeMode={Image.resizeMode.stretch} source={require('../../common/Images/dogtrain_thumb.png')} style={Styles.imgCommentThumb}/>
                        <Image resizeMode={Image.resizeMode.stretch} source={require('../../common/Images/dogtrain_thumb.png')} style={Styles.imgCommentThumb}/>
                        <Image resizeMode={Image.resizeMode.stretch} source={require('../../common/Images/dogtrain_thumb.png')} style={Styles.imgCommentThumb}/>
                      </View>
                      <Text>
                            Nullam id dolor id nibh ultricies vehicula ut id elit. Cum sociis natoque penatibus et magnis dis mus.
                            Nullam id dolor id nibh ultricies vehicula ut id elit. Cum sociis natoque penatibus et magnis dis mus.
                            Nullam id dolor id nibh ultricies vehicula ut id elit. Cum sociis natoque penatibus et magnis dis mus.
                      </Text>
                  </View>

                  <View style={{width:windowWidth,backgroundColor:'white', height:40,position:'absolute',bottom:0,alignItems:'center',justifyContent:'center'}}
                  onLayout={(event) => {
                    this.state.contentHeights[0] = 15 + this.state.contentHeights[0] + event.nativeEvent.layout.height;
                  }}>
                    <TouchableHighlight activeOpacity={0.6} underlayColor={'white'}
                    onPress={()=>
                      {
                        if (this.state.titleExpand == "Expand")
                        {
                          Animated.timing(
                            this.state.momentHeights[0],
                            {
                              toValue: this.state.contentHeights[0],
                              duration: 1000,
                            }
                          ).start()
                          this.state.titleExpand = "Show Less";
                          this.setState({momentHeights: this.state.momentHeights,titleExpand:this.state.titleExpand});
                        }
                        else {
                          Animated.timing(
                            this.state.momentHeights[0],
                            {
                              toValue: 310,
                              duration: 1000,
                            }
                          ).start()
                          this.state.titleExpand = "Expand";
                          this.setState({momentHeights: this.state.momentHeights,titleExpand:this.state.titleExpand});
                        }
                      }
                      }>
                        <Text style={[CommonStyles.medium14,{color:'rgb(243,145,28)'}]}>{this.state.titleExpand}</Text>
                    </TouchableHighlight>
                  </View>


              </Animated.View>
              <View style={{marginLeft:70,marginTop:10,marginRight:20}}>
                <View flexDirection='row' style={{}}>
                  <View flexDirection='row'>
                    <Image resizeMode={Image.resizeMode.stretch} source={require('../../common/Images/like.png')} style={{width:20,height:20}}/>
                    <Text style={[CommonStyles.book,{marginLeft:10,color:'rgb(184,184,184)'}]}>320 Likes</Text>
                  </View>
                  <View flexDirection='row' style={{flex:1}}>
                    <TouchableHighlight activeOpacity={0.6} underlayColor={'rgba(255,255,255,0.1)'}
                    onPress={()=>
                        this.props.navigator.push({
                                screen: 'CommentsView'
                        })
                      }>
                      <View flexDirection='row' style={{flex:1}}>
                        <Image resizeMode={Image.resizeMode.stretch} source={require('../../common/Images/chat.png')} style={{marginLeft:10,width:20,height:20}}/>
                        <Text style={[CommonStyles.book,{marginLeft:10,color:'rgb(184,184,184)'}]}>5 Comments</Text>
                      </View>
                    </TouchableHighlight>
                  </View>

                  <View flexDirection='row'>
                    <Image resizeMode={Image.resizeMode.stretch} source={require('../../common/Images/heart_dark@2x.png')} style={{marginLeft:10,width:20,height:20}}/>
                  </View>
                </View>

                <View flexDirection='row' style={{marginTop:10}}>
                    <Image resizeMode={Image.resizeMode.cover} source={require('../../common/Images/dogtrain_thumb.png')} style={{width:28,height:28,borderRadius:14}}/>
                    <View flexDirection='row' style={{alignItems:'center',marginLeft:10,marginRight:10}}>
                        <Text style={[CommonStyles.medium12,{fontWeight:'bold'}]}>Selly:</Text>
                        <Text style={[CommonStyles.medium12,{marginLeft:5,color:'rgb(106,100,100)'}]}>They look so cute! I love~ them!</Text>
                    </View>
                </View>
                <View flexDirection='row' style={{marginTop:10}}>
                    <Image resizeMode={Image.resizeMode.cover} source={require('../../common/Images/dogtrain_thumb.png')} style={{width:28,height:28,borderRadius:14}}/>
                    <View flexDirection='row' style={{alignItems:'center',marginLeft:10,marginRight:10}}>
                        <Text style={[CommonStyles.medium12,{fontWeight:'bold'}]}>Selly:</Text>
                        <Text style={[CommonStyles.medium12,{marginLeft:5,color:'rgb(106,100,100)'}]}>They look so cute! I love~ them!</Text>
                    </View>
                </View>


                <View style={{alignItems:'center',marginTop:10}}>
                  <TouchableHighlight activeOpacity={0.6} underlayColor={'rgba(255,255,255,0.1)'}
                  onPress={()=>
                      this.props.navigator.push({
                              screen: 'CommentsView'
                      })
                    }>
                    <Text style={[CommonStyles.medium14,{color:'rgb(243,145,28)'}]}>Show All Comments</Text>
                  </TouchableHighlight>
                </View>
              </View>

            </View>

            <Modal
              animateionType={'slide'}
              transparent={false}
              visible={this.state.openCorpModal}
              onRequestClose={() => {alert("Modal has been closed.")}}
            >
              <View style={Styles.container}>
                <ImageCropper
                  image={this.state.avatarSource}
                  style={Styles.corpView}
                  cancel={this.closeModal}
                  onCropFinished={uri => this.getCroppedImg(uri)}
                  // onImgLoadEnd={this.openModal}
                />
              </View>
            </Modal>
          </ScrollView>
        </View>
      </View>
    );
  }
}
AppRegistry.registerComponent('MomentView', () => MomentView);
