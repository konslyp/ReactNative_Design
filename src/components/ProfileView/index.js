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

export default class ProfileView extends Component {




  state = {

  };

  state = {
    inputTagModalVisible: false,
    bottomValue :20,
    profileTopHeight: new Animated.Value(200),
    resizeAnim: new Animated.Value(200),
    titleScreen:"Profile",
    identityText:
    {
      title:'Identity',
      content:'Not Uploaded',
      image: require('../../common/Images/trusted_gray@3x.png')
    }

  };

  onTestBtn()
  {

  };
  modalInputTag(visible) {
    this.setState({inputTagModalVisible: visible});
  };

  componentWillReceiveProps(nextProps)
  {
    alert("Paramter received");
  };
  changeStatusIdentity()
  {
    this.state.identityText.title = "Truested";
    this.state.identityText.content = "Identity Verified";
    this.state.identityText.image = require('../../common/Images/trusted@3x.png');
    this.setState({identityText:this.state.identityText});
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
                          screen: 'Inbox'
                      })
              }>
                <Image resizeMode={Image.resizeMode.stretch} source={require('../../common/Images/settingWhite.png')} style={{width:20,height:20}}/>
            </TouchableHighlight>
            <View style={{width: windowWidth,position: 'absolute',bottom:this.state.bottomValue}}>
              <Text style={Styles.labelProfileFooterBold}>Shutter Edge Photography</Text>
              <Text style={Styles.labelProfileFooter}>ABN 90 000 345 23</Text>
            </View>

            <View style={{width: windowWidth,position: 'absolute',top:20,height:10}}>
              <Text style={{color:'white'}}>Provider Edit</Text>
              <TouchableHighlight activeOpacity={0.6} underlayColor={'rgba(255,255,255,0.1)'}
                onPress={()=>
                  this.props.navigator.push({
                            screen: 'ProviderViewRead'
                        })
                }>
                  <Text style={{color:'white'}}>Provider View</Text>
              </TouchableHighlight>
              <TouchableHighlight activeOpacity={0.6} underlayColor={'rgba(255,255,255,0.1)'}
                onPress={()=>
                  this.props.navigator.push({
                            screen: 'UserProfileEditView'
                        })
                }>
                  <Text style={{color:'white'}}>User Edit</Text>
              </TouchableHighlight>
              <TouchableHighlight activeOpacity={0.6} underlayColor={'rgba(255,255,255,0.1)'}
                onPress={()=>
                  this.props.navigator.push({
                            screen: 'UserProfileReadView'
                        })
                }>
                  <Text style={{color:'white'}}>User View</Text>
              </TouchableHighlight>

              <TouchableHighlight activeOpacity={0.6} underlayColor={'rgba(255,255,255,0.1)'}
                onPress={()=>
                  this.props.navigator.push({
                            screen: 'ChatView'
                        })
                }>
                  <Text style={{color:'white'}}>ChatView</Text>
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
              <TouchableHighlight style={{flex:1}} activeOpacity={0.6} underlayColor={'white'}
                  onPress={()=>
                      {
                        this.props.navigator.push({
                                screen: 'UploadIdentityView',
                                test:'aaa',
                                passProps:
                                {
                                  test:'aaa',
                                  changeStatus:this.changeStatusIdentity.bind(this)
                                }
                            });
                      }
                    }>
                  <View style={{flexDirection:'row', height:50,alignItems:'center'}}>
                    <Image resizeMode={Image.resizeMode.stretch} source={this.state.identityText.image} style={Styles.iconButton35}/>
                    <View style={{marginLeft:10,flex:1}}>
                        <Text style={Styles.labelGrayBold14}>{this.state.identityText.title}</Text>
                        <Text style={Styles.labelGray12}>{this.state.identityText.content}</Text>
                    </View>
                    <View style={{marginLeft:10,marginRight:10,flexDirection:'row'}}>
                        <Image resizeMode={Image.resizeMode.stretch} source={require('../../common/Images/backright.png')} style={{width:7,height:15,marginRight:10}}/>
                    </View>
                  </View>
                  </TouchableHighlight>
            </View>

            <View style={{flexDirection:'row', height:60,alignItems:'center'}}>
                <TouchableHighlight style={{flex:1}} activeOpacity={0.6} underlayColor={'white'}
                      onPress={()=>
                          this.props.navigator.push({
                                    screen: 'CertsAwardView'
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
              <Text style={Styles.labelGrayBold14}>Interested in:</Text>
              <View style={{flexDirection:'row'}}>
                  <View style={Styles.interestViewContainer}>
                    <Image resizeMode={Image.resizeMode.cover} source={require('../../common/Images/closewhite.png')} style={Styles.iconButton15}/>
                    <Text style={Styles.labelInterestText}>Photography</Text>
                  </View>
                  <View style={Styles.interestViewContainer}>
                    <Image resizeMode={Image.resizeMode.cover} source={require('../../common/Images/closewhite.png')} style={Styles.iconButton15}/>
                    <Text style={Styles.labelInterestText}>Travel Photography</Text>
                  </View>
              </View>
            </View>
            <View style={{marginLeft:10,marginRight:10}}>

              <TouchableHighlight activeOpacity={0.6} underlayColor={'white'}
                onPress={() => {
                this.modalInputTag(true)
              }}>
                  <View style={{flexDirection:'row',alignItems:'center',marginTop:10}}>
                      <View style={Styles.viewCircle}>
                        <Text style={{fontSize:14,color:'white'}}>+</Text>
                      </View>
                      <Text style={{fontSize:14,color:'rgb(247, 146, 30)'}}>Add Tags</Text>
                  </View>
              </TouchableHighlight>
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
            <View style={{flexDirection:'row', height:40,alignItems:'center',justifyContent:'center',paddingTop:10,paddingLeft:20,paddingRight:20}}>
              <Text style={{flex:1}}>Weekend Pet Training</Text>
              <Text >$30/hour</Text>
              <Image resizeMode={Image.resizeMode.stretch} source={require('../../common/Images/backright.png')} style={Styles.imgIconSmall}/>
            </View>

            <View style={{flexDirection:'row', height:40,alignItems:'center',justifyContent:'center',paddingTop:10,paddingLeft:20,paddingRight:20}}>
              <Text style={{flex:1}}>Pet Boarding House</Text>
              <Text>$80/day</Text>
              <Image resizeMode={Image.resizeMode.stretch} source={require('../../common/Images/backright.png')} style={Styles.imgIconSmall}/>
            </View>

            <View style={{margin:10}}>
              <TouchableHighlight style={{flex:1}} activeOpacity={0.6} underlayColor={'white'}
                  onPress={()=>
                        this.props.navigator.push({
                                  screen: 'CreateServiceViewStep1'
                              })
                  }>
                  <View style={Styles.btnFullYellow}>
                    <Text style={{color:'white'}}>+ Add Service</Text>
                  </View>
              </TouchableHighlight>
            </View>

            <Modal
              animationType={"fade"}
              transparent={true}
              visible={this.state.inputTagModalVisible}
              onRequestClose={() => {alert("Modal has been closed.")}}
              >
                 <View style={Styles.modalMaskBg}>
                    <View style={Styles.modalViewInput}>
                      <Text style={Styles.labelGrayBold14}>Create a Tag</Text>
                      <TextInput underlineColorAndroid='transparent' selectionColor='rgb(243,145,28)' style={{ paddingBottom:0,borderBottomWidth:1,marginTop:10,borderColor: 'rgb(243,145,28)'}} placeholder="Type here your tag"></TextInput>
                      <View flexDirection='row' style={Styles.modalViewBottomBar}>

                        <TouchableHighlight activeOpacity={0.6} underlayColor={'white'} onPress={() => {
                          this.modalInputTag(!this.state.inputTagModalVisible)
                        }}>
                          <Text style={{fontWeight:'bold',marginRight:10,color:'rgb(243,145,28)'}}>Cancel</Text>
                        </TouchableHighlight>

                        <TouchableHighlight activeOpacity={0.6} underlayColor={'white'} onPress={() => {
                          this.modalInputTag(!this.state.inputTagModalVisible)
                        }}>
                          <Text style={{fontWeight:'bold',marginRight:10,color:'rgb(243,145,28)'}}>Ok</Text>
                        </TouchableHighlight>
                      </View>
                  </View>
                 </View>
            </Modal>

          </ScrollView>
          </View>
      </View>
    );
  }
}
