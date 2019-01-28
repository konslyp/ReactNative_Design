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

export default class UserProfileEditView extends Component {




  static navigatorStyle = {
        tabBarHidden: true,
        navBarHidden:true
  };

  state = {
    inputTagModalVisible: false,
    bottomValue :20,
    profileTopHeight: new Animated.Value(200),
    resizeAnim: new Animated.Value(200),
    titleScreen:"Profile"
  };

  onTestBtn()
  {

  };
  modalInputTag(visible) {
    this.setState({inputTagModalVisible: visible});
  };



  render() {
    return (
      <View style={{flex:1}}>
          <View>
            <Text style={{color:'rgb(106,100,100)',fontSize:15,width:windowWidth,textAlign:'center',marginTop:15}}>Profile</Text>
            <TouchableHighlight style={Styles.imgTopRight} activeOpacity={0.6} underlayColor={'rgba(255,255,255,0.1)'}
              onPress={()=>
                  this.props.navigator.pop()
                }>
                <Image resizeMode={Image.resizeMode.stretch} source={require('../../common/Images/settings_gray@2x.png')} style={{width:20,height:20}}/>
            </TouchableHighlight>
          </View>
          <View style={{marginTop:10,height:1,backgroundColor:'rgb(217,217,217)'}}/>
          <View style={{flex:1}}>
          <ScrollView onScroll={(event) => {
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
                            <Text style={Styles.labelGrayBold14}>ABN 90 000 345 23</Text>
                            <Text style={Styles.labelGray12}>Photographer</Text>
                            <Text style={Styles.labelGray12}>Melbourne, VIC</Text>
                        </View>
                  </TouchableHighlight>
            </View>

            <View style={{marginLeft:10,marginRight:10,marginTop:10}}>
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
                  <View style={Styles.interestViewContainer}>
                    <Image resizeMode={Image.resizeMode.cover} source={require('../../common/Images/closewhite.png')} style={Styles.iconButton15}/>
                    <Text style={Styles.labelInterestText}>Fashion Photography</Text>
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
