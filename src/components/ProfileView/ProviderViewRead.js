import React, { Component } from 'react';
import { AppRegistry, Navigator } from 'react-native';
import {
  TouchableHighlight,
  Modal,
  TextInput,
  Dimensions,
  ScrollView,
  Animated,
  View,
  Image,
  Text,
  Alert
} from 'react-native';



import Rating from '../../common/Rating';



import Styles from './styles';
import CommonStyles from '../../common/CommonStyle';

const windowWidth = Dimensions.get('window').width;
import MapView from 'react-native-maps';

export default class ProviderViewRead extends Component {

  static navigatorStyle = {
        tabBarHidden: true,
        navBarHidden:true
  };


  state = {
    inputTagModalVisible: false,
    bottomValue :20,
    profileTopHeight: new Animated.Value(200),
    resizeAnim: new Animated.Value(200),
    momentVisible:[new Animated.Value(310),new Animated.Value(310)],
    dataService:[
      {
        heights:new Animated.Value(60),
        contentHeights:0,
        isExpand:0,
        arrowImage:require('./../../common/Images/downarrrow.png')
      },
      {
        heights:new Animated.Value(60),
        contentHeights:0,
        isExpand:0,
        arrowImage:'./../../common/Images/downarrrow.png'
      }
    ],
    titleScreen:"Profile",
    region:{
      latitude: 37.78825,
      longitude: -122.4324,
      latitudeDelta: 0.015,
      longitudeDelta: 0.0121,
    }
  };

  onTestBtn()
  {

  };
  modalInputTag(visible) {
    this.setState({inputTagModalVisible: visible});
  };



  renderMap(isVisible) {
    if (isVisible == 1)
    {
      return(
        <View style={{height:250}}>
          <MapView
            style={{flex:1}}
            region={{
              latitude: 37.78825,
              longitude: -122.4324,
              latitudeDelta: 0.03,
              longitudeDelta: 0.03,
            }}
          >
            <MapView.Marker
              coordinate={{latitude: 37.78825,longitude: -122.4324}}
            />
          </MapView>
        </View>
      );
    }
  };

  render() {
    return (
      <View style={{flex:1}}>
          <View style={{backgroundColor: 'red'}}>
            <Animated.Image resizeMode={Image.resizeMode.cover} source={require('../../common/Images/dogtrain.jpg')} style={{width: windowWidth,height: this.state.profileTopHeight}}/>
            <View style={Styles.profileViewTop} />
            <Text style={Styles.labelScreen} visible={this.state.visibleTitle}>{this.state.titleScreen}</Text>

            <TouchableHighlight style={Styles.imgTopRight} activeOpacity={0.6} underlayColor={'rgba(255,255,255,0.1)'}
              onPress={()=>
                this.props.navigator.push({
                          screen: 'ContactListView'
                      })
              }>
                <Image resizeMode={Image.resizeMode.stretch} source={require('../../common/Images/settingWhite.png')} style={{width:20,height:20}}/>
            </TouchableHighlight>
            <View style={{width: windowWidth,position: 'absolute',bottom:this.state.bottomValue}}>
              <Text style={Styles.labelProfileFooterBold}>Shutter Edge Photography</Text>
              <Text style={Styles.labelProfileFooter}>ABN 90 000 345 23</Text>
            </View>

            <View style={{width: windowWidth,position: 'absolute',top:10,height:10}}>
              <TouchableHighlight activeOpacity={0.6} underlayColor={'rgba(255,255,255,0.1)'}
                onPress={()=>
                  this.props.navigator.push({
                            screen: 'ContactListView'
                        })
                }>
                  <Text style={{color:'white'}}>Provider Edit</Text>
              </TouchableHighlight>
              <TouchableHighlight activeOpacity={0.6} underlayColor={'rgba(255,255,255,0.1)'}
                onPress={()=>
                  this.props.navigator.push({
                            screen: 'ContactListView'
                        })
                }>
                  <Text style={{color:'white'}}>Provider View</Text>
              </TouchableHighlight>
              <TouchableHighlight activeOpacity={0.6} underlayColor={'rgba(255,255,255,0.1)'}
                onPress={()=>
                  this.props.navigator.push({
                            screen: 'ContactListView'
                        })
                }>
                  <Text style={{color:'white'}}>User Edit</Text>
              </TouchableHighlight>
              <TouchableHighlight activeOpacity={0.6} underlayColor={'rgba(255,255,255,0.1)'}
                onPress={()=>
                  this.props.navigator.push({
                            screen: 'ContactListView'
                        })
                }>
                  <Text style={{color:'white'}}>User View</Text>
              </TouchableHighlight>


            </View>

          </View>
          <View style={{flex:1}}>
          <ScrollView onScroll={(event) => {

            // var currentOffset = event.nativeEvent.contentOffset.y;
            // var direction = currentOffset > this.offset ? 'down' : 'up';
            // if (currentOffset > this.offset)
            // {
            //   Animated.timing(
            //     this.state.profileTopHeight,
            //     {
            //       toValue: 50,
            //       duration: 1000,
            //     }
            //   ).start()
            //   this.state.bottomValue = 5;
            //   this.setState({bottomValue: this.state.bottomValue});
            //   this.setState({titleScreen: ""});
            // }
            // else {
            //   if (currentOffset == 0)
            //   {
            //     Animated.timing(
            //       this.state.profileTopHeight,
            //       {
            //         toValue: 200,
            //         duration: 1000,
            //       }
            //     ).start()
            //     this.state.bottomValue = 20;
            //     this.setState({bottomValue: this.state.bottomValue});
            //     this.setState({titleScreen: "Profile"});
            //   }
            // }
            // this.offset = currentOffset;
          }}
          scrollEventThrottle={100}>

          <View style={{flexDirection:'row', marginTop:10,height:70,alignItems:'center'}}>
              <Image resizeMode={Image.resizeMode.cover} source={require('../../common/Images/dogtrain.jpg')} style={Styles.circleImageView}/>
              <TouchableHighlight style={{flex:1}} activeOpacity={0.6} underlayColor={'white'}
                    onPress={()=>
                        this.props.navigator.push({
                                  screen: 'EditProfileView'
                              })
                      }>
                    <View style={{marginLeft:10}}>
                        <Text style={[Styles.labelGrayBold14,{fontSize:16}]}>ABN 90 000 345 23</Text>
                        <Text style={Styles.labelGray12}>Photographer</Text>
                        <Text style={Styles.labelGray12}>Melbourne, VIC</Text>
                    </View>
              </TouchableHighlight>
          </View>

          <View style={{flexDirection:'row', marginTop:20,height:60,alignItems:'center'}}>
            <Image resizeMode={Image.resizeMode.cover} source={require('../../common/Images/certified1@2x.png')} style={Styles.iconButton35}/>
            <View style={{marginLeft:10,flex:1}}>
                <Text style={Styles.labelGrayBold14}>Satisfaction Guard</Text>
                <Text style={Styles.labelGray12}>100% satisfaction or money back</Text>
            </View>
            <View style={{marginLeft:10,marginRight:10,flexDirection:'row'}}>
                <Image resizeMode={Image.resizeMode.stretch} source={require('../../common/Images/backright.png')} style={{width:7,height:15,marginRight:10}}/>
            </View>
        </View>

        <View style={{flexDirection:'row', height:60,alignItems:'center'}}>
            <Image resizeMode={Image.resizeMode.stretch} source={require('../../common/Images/timer.png')} style={Styles.iconButton35}/>
            <View style={{marginLeft:10,flex:1}}>
                <Text style={Styles.labelGrayBold14}>Turn around</Text>
                <Text style={Styles.labelGray12}>Usually within 3 days</Text>
            </View>
            <View style={{marginLeft:10,marginRight:10,flexDirection:'row'}}>
                <Image resizeMode={Image.resizeMode.stretch} source={require('../../common/Images/backright.png')} style={{width:7,height:15,marginRight:10}}/>
            </View>
        </View>

        <View style={{flexDirection:'row', height:60,alignItems:'center'}}>
            <Image resizeMode={Image.resizeMode.stretch} source={require('../../common/Images/24h_support@2x.png')} style={Styles.iconButton35}/>
            <View style={{marginLeft:10,flex:1}}>
                <Text style={Styles.labelGrayBold14}>Availability</Text>
                <Text style={Styles.labelGray12}>Evenings & weekends</Text>
            </View>
            <View style={{marginLeft:10,marginRight:10,flexDirection:'row'}}>
                <Image resizeMode={Image.resizeMode.stretch} source={require('../../common/Images/backright.png')} style={{width:7,height:15,marginRight:10}}/>
            </View>
        </View>

        <View style={{flexDirection:'row', height:60,alignItems:'center'}}>
            <Image resizeMode={Image.resizeMode.stretch} source={require('../../common/Images/trusted@2x.png')} style={Styles.iconButton35}/>
            <View style={{marginLeft:10,flex:1}}>
                <Text style={Styles.labelGrayBold14}>Trusted</Text>
                <Text style={Styles.labelGray12}>Uploaded & Verified</Text>
            </View>
            <View style={{marginLeft:10,marginRight:10,flexDirection:'row'}}>
                <Image resizeMode={Image.resizeMode.stretch} source={require('../../common/Images/backright.png')} style={{width:7,height:15,marginRight:10}}/>
            </View>
        </View>

        <View style={{flexDirection:'row', height:60,alignItems:'center'}}>
            <TouchableHighlight style={{flex:1}} activeOpacity={0.6} underlayColor={'white'}
                  onPress={()=>
                      this.props.navigator.push({
                                screen: 'CertsAwardReadView'
                            })
                    }>
                  <View style={{flexDirection:'row', height:50,alignItems:'center'}}>
                    <Image resizeMode={Image.resizeMode.cover} source={require('../../common/Images/awards@2x.png')} style={Styles.iconButton35}/>
                    <View style={{flex:1,marginLeft:10}}>
                        <Text style={Styles.labelGrayBold14}>Certs & Awards</Text>
                        <Text style={Styles.labelGray12}>VET NSW, CCNA, CPA..</Text>
                    </View>
                  </View>
            </TouchableHighlight>

            <View style={{marginLeft:10,marginRight:10,marginTop:0,flexDirection:'row'}}>
                <Image resizeMode={Image.resizeMode.stretch} source={require('../../common/Images/cert.jpg')} style={Styles.imgThumbMargin3}/>
                <Image resizeMode={Image.resizeMode.stretch} source={require('../../common/Images/cert2.jpg')} style={Styles.imgThumbMargin3}/>
            </View>
        </View>

        <View style={{flexDirection:'row', height:60,alignItems:'center'}}>
            <TouchableHighlight style={{flex:1}} activeOpacity={0.6} underlayColor={'white'}
                  onPress={()=>
                      this.props.navigator.push({
                                screen: 'MomentView'
                            })
                    }>
                  <View style={{flexDirection:'row', height:50,alignItems:'center'}}>
                    <Image resizeMode={Image.resizeMode.cover} source={require('../../common/Images/shutter@2x.png')} style={Styles.iconButton35}/>
                    <View style={{flex:1,marginLeft:10}}>
                        <Text style={Styles.labelGrayBold14}>Recent moments</Text>
                        <Text style={Styles.labelGray12}></Text>
                    </View>
                  </View>
            </TouchableHighlight>

            <View style={{marginLeft:10,marginRight:10,marginTop:10,flexDirection:'row'}}>
                <Image resizeMode={Image.resizeMode.cover} source={require('../../common/Images/dogtrain.jpg')} style={Styles.imgThumbMargin3}/>
                <Image resizeMode={Image.resizeMode.cover} source={require('../../common/Images/dogtrain.jpg')} style={Styles.imgThumbMargin3}/>
                <Image resizeMode={Image.resizeMode.cover} source={require('../../common/Images/dogtrain.jpg')} style={Styles.imgThumbMargin3}/>
            </View>
        </View>
            <View style={{marginTop:10,height:1,backgroundColor:'rgb(217,217,217)'}}/>
            <Text style={Styles.textCommentGrayWithPadding10}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut.
            </Text>
            <View style={{marginLeft:10,marginRight:10}}>
              <View style={{flexDirection:'row'}}>
                  <View style={Styles.interestViewContainerGray}>
                    <Text style={Styles.labelInterestTextGray}>Photography</Text>
                  </View>
                  <View style={Styles.interestViewContainerGray}>
                    <Text style={Styles.labelInterestTextGray}>Travel Photography</Text>
                  </View>
                  <View style={Styles.interestViewContainerGray}>
                    <Text style={Styles.labelInterestTextGray}>Fashion Photography</Text>
                  </View>
              </View>
            </View>
            <View style={{marginTop:10,height:1,backgroundColor:'rgb(217,217,217)'}}/>
            <View style={{marginLeft:10,marginRight:10,marginTop:10}}>
              <Text style={Styles.labelGrayBold14}>Services:</Text>
              <TouchableHighlight style={{flex:1}} activeOpacity={0.6} underlayColor={'white'}
                  onPress={()=>
                      this.props.navigator.push({
                                screen: 'FeedbackView'
                            })
                    }>
                    <View style={{alignItems:'center'}}>
                        <View style={Styles.btnBorderYellow}>
                          <Image resizeMode={Image.resizeMode.cover} source={require('../../common/Images/starfull.png')} style={Styles.imgStar}/>
                          <Image resizeMode={Image.resizeMode.cover} source={require('../../common/Images/starfull.png')} style={Styles.imgStar}/>
                          <Image resizeMode={Image.resizeMode.cover} source={require('../../common/Images/starfull.png')} style={Styles.imgStar}/>
                          <Image resizeMode={Image.resizeMode.cover} source={require('../../common/Images/starfull.png')} style={Styles.imgStar}/>
                          <Image resizeMode={Image.resizeMode.cover} source={require('../../common/Images/starempty.png')} style={Styles.imgStar}/>
                          <Text style={Styles.labelStarReview}>（350）</Text>
                        </View>
                    </View>
              </TouchableHighlight>
            </View>
            <Animated.View style={{backgroundColor:'white',height:this.state.dataService[0].heights}}>
              <View onLayout={(event) => {
                this.state.dataService[0].contentHeights = event.nativeEvent.layout.height + 260;
              }}>
                <View style={{flexDirection:'row',marginTop:10,marginBottom:10,marginLeft:20,marginRight:20,alignItems:'flex-end'}}>
                  <Text style={[CommonStyles.medium12,{marginLeft:3,color:'rgb(243, 129, 24)',textAlignVertical:'bottom'}]}>
                    <Text style={{fontSize:20}}>
                      $30
                    </Text>
                    <Text style={{fontSize:14}}>
                      /hour
                    </Text>
                  </Text>
                  <Text style={[CommonStyles.medium12,{flex:1,marginLeft:10,color:'rgb(142,142,142)',textAlignVertical:'bottom',fontSize:14}]}>Weekend Pet Training Starter Class for Small Dogs</Text>
                  <TouchableHighlight activeOpacity={0.6} underlayColor={'white'}
                  onPress={()=>
                    {
                      if (this.state.dataService[0].isExpand == 0)
                      {
                        Animated.timing(
                          this.state.dataService[0].heights,
                          {
                            toValue: this.state.dataService[0].contentHeights,
                            duration: 1000,
                          }
                        ).start()
                        this.state.dataService[0].isExpand = 1;
                        this.state.dataService[0].arrowImage = require('./../../common/Images/uparrow.png');
                        this.setState({dataService: this.state.dataService});
                      }
                      else if (this.state.dataService[0].isExpand == 1)
                      {
                        Animated.timing(
                          this.state.dataService[0].heights,
                          {
                            toValue: 60,
                            duration: 1000,
                          }
                        ).start()
                        this.state.dataService[0].isExpand = 0;
                        this.state.dataService[0].arrowImage = require('./../../common/Images/downarrrow.png');
                        this.setState({dataService: this.state.dataService});
                      }
                    }
                    }>
                      <Image resizeMode={Image.resizeMode.stretch} source={this.state.dataService[0].arrowImage} style={{width:20,height:13}}/>
                  </TouchableHighlight>
                </View>
                <View style={{marginTop:10,marginBottom:10,marginLeft:20,marginRight:20}}>
                    <View style={{height: 250}}>
                      <Image resizeMode={Image.resizeMode.cover} source={require('../../common/Images/dogtrain.jpg')} style={{position:'absolute',top:15,width: windowWidth,marginLeft:-20,height: 235}}/>
                      <Text style={[Styles.serviceDetailViewBg,CommonStyles.medium12,{color:'rgb(243, 129, 24)',textAlignVertical:'bottom',width:100}]}>Service Details</Text>
                    </View>
                    <Text style={[CommonStyles.medium12,{marginLeft:3,marginTop:5,color:'rgb(142,142,142)',textAlignVertical:'bottom'}]}>
                        This class will help you socialize your puppy to people, places, strange objects, and other puppies—so they will grow up to be friendly and easy to take anywhere. We cover puppy basics, such as sit, down, polite greetings, walking nicely on a leash and come when called. Included is vital information about behavior management, preventing problems and general health. We can help with biting, toilet training, chewing, digging and more.
                        {'\n'}{'\n'}
                        For: Pups aged 7-15 weeks at start of program
                        Duration: 1 hour lessons, 4 consecutive weeks
                        Size: Class is limited to 6 pups
                        Prerequisites: Had first vaccination

                    </Text>
                </View>


                <View style={{marginTop:10,marginBottom:10,marginLeft:20,marginRight:20}}>
                    <Text style={[Styles.serviceDetailViewBg,CommonStyles.medium12,{color:'rgb(243, 129, 24)',textAlignVertical:'bottom',width:120}]}>Service Location</Text>
                    <Text style={[CommonStyles.medium12,{marginLeft:3,marginTop:5,color:'rgb(142,142,142)',textAlignVertical:'bottom'}]}>
                      Middle entrance of Ramsgate Beach {'\n'}
                      Cook Park, Brighton Le sands, NSW 2217
                    </Text>
                </View>
                {
                  this.renderMap(this.state.dataService[0].isExpand)
                }
              </View>
            </Animated.View>
          </ScrollView>
          </View>
      </View>
    );
  }
}
