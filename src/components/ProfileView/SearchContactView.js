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
  ListView,
  Image,
  Text,
  Alert
} from 'react-native';

import LocationSelector from '../../common/LocationSelector/index.js';
import ImageCropper from '../../common/ImageCropper/index.js';

import Styles from './styles';
import CommonStyles from '../../common/CommonStyle';

const windowWidth = Dimensions.get('window').width;
const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

export default class SearchContactView extends Component {

  static navigatorStyle = {
        tabBarHidden: true,
        navBarHidden:true
  };
  state = {
    dataSource: ds.cloneWithRows([{name:'Jackson',comment:'Duis mollis sagittsdfksld',reply:[{name:'John',comment:'Very good'},{name:'John',comment:'Very good'}]}, {name:'Jackson',comment:'Dummy Test for comment.',reply:[]},{name:'Jackson',comment:'Duis mollis sagittsdfksld',reply:[{name:'John',comment:'Very good'}]}]),
    bioCharacters:"0/100 characters",
    bioHeight:50,
    inputTagModalVisible:false
  };

  render() {
    var offset = 0;
    return (
      <View style={{flex:1}}>
          <View>
            <Text style={{color:'rgb(106,100,100)',fontSize:15,width:windowWidth,textAlign:'center',marginTop:15}}>Find Contacts</Text>
            <TouchableHighlight style={Styles.imgTopLeft} activeOpacity={0.6} underlayColor={'rgba(255,255,255,0.1)'}
              onPress={()=>
                  this.props.navigator.pop()
                }>
                <Image resizeMode={Image.resizeMode.stretch} source={require('../../common/Images/backIcon@2x.png')} style={{width:10,height:20}}/>
            </TouchableHighlight>
          </View>
          <View style={{marginTop:10,height:1,backgroundColor:'rgb(217,217,217)'}}/>
          <View style={{marginLeft:10,marginRight:10,marginTop:10,flexDirection:'row',alignItems:'center'}} >
            <Image resizeMode={Image.resizeMode.stretch} source={require('../../common/Images/search@2x.png')} style={{paddingTop:10,width:20,height:20}}/>
            <TextInput autoFocus = {true} underlineColorAndroid='transparent' placeholderTextColor='rgb(184,184,184)' placeholder='Type a user name here...' selectionColor='rgb(243,145,28)' style={{marginLeft:10,flex:1,paddingBottom:0,paddingTop:0,borderBottomWidth:1,borderColor: 'rgb(184,184,184)',color:'rgb(184,184,184)',fontSize:14}}
            onChange={(event) => {
            }
          }></TextInput>
          </View>
          <View style={{flex:1}}>
              <ScrollView>
                  <View>
                    <TouchableHighlight activeOpacity={0.6} underlayColor={'rgba(255,255,255,0.1)'}
                      onPress={()=>
                        {
                          this.setState({inputTagModalVisible: true});
                        }
                        }>
                        <View flexDirection='row' style={{padding:10}}>
                            <Image resizeMode={Image.resizeMode.cover} source={require('../../common/Images/dogtrain_thumb.png')} style={{width:36,height:36,borderRadius:18}}/>
                            <View flexDirection='row' style={{alignItems:'center',marginLeft:10,flex:1}}>
                                <View>
                                  <Text style={[CommonStyles.medium12,{color:'rgb(106,106,106)'}]}>Jing Tai Piao</Text>
                                  <Text style={[CommonStyles.medium12,{color:'rgb(142,142,142)'}]}>Senior developer at Soft</Text>
                                </View>
                            </View>
                          </View>
                      </TouchableHighlight>
                      <View style={{height:1,backgroundColor:'rgb(217,217,217)'}}/>
                      <View flexDirection='row' style={{padding:10}}>
                          <Image resizeMode={Image.resizeMode.cover} source={require('../../common/Images/dogtrain_thumb.png')} style={{width:36,height:36,borderRadius:18}}/>
                          <View flexDirection='row' style={{alignItems:'center',marginLeft:10,flex:1}}>
                              <View>
                                <Text style={[CommonStyles.medium12,{color:'rgb(106,106,106)'}]}>Jing Tai Piao</Text>
                                <Text style={[CommonStyles.medium12,{color:'rgb(142,142,142)'}]}>Senior developer at Soft</Text>
                              </View>
                          </View>
                        </View>
                  </View>

                  <Modal
                    animationType={"fade"}
                    transparent={true}
                    visible={this.state.inputTagModalVisible}
                    onRequestClose={() => {alert("Modal has been closed.")}}
                    >
                       <View style={Styles.modalMaskBg}>
                          <View style={Styles.modalViewRequestContact}>
                          <View flexDirection='row' style={{marginTop:10}}>
                              <Image resizeMode={Image.resizeMode.cover} source={require('../../common/Images/dogtrain_thumb.png')} style={{width:36,height:36,borderRadius:18}}/>
                              <View flexDirection='row' style={{alignItems:'center',marginLeft:10,flex:1}}>
                                  <View>
                                    <Text style={[CommonStyles.medium12,{color:'rgb(106,106,106)'}]}>Jing Tai Piao</Text>
                                    <Text style={[CommonStyles.medium12,{color:'rgb(142,142,142)'}]}>Senior developer at Soft</Text>
                                  </View>
                              </View>
                            </View>
                            <TextInput underlineColorAndroid='transparent' multiline={true} selectionColor='rgb(243,145,28)' style={{ height:80,paddingBottom:5,paddingTop:5,borderBottomWidth:1,marginTop:10,borderColor: 'rgb(243,145,28)'}} placeholder="Message">Hi, this is Peter Jason, I would like to add you my contact list</TextInput>



                            <TouchableHighlight activeOpacity={0.6} underlayColor={'white'} onPress={() => {
                              this.setState({inputTagModalVisible: false});
                            }}>
                              <Text style={[Styles.btnBorderYellow,{paddingTop:15,textAlign:'center',alignItems:'center',justifyContent:'center',height:50,borderRadius:0,fontWeight:'bold',borderWidth:1,marginTop:10,backgroundColor:'rgb(243,145,28)',color:'white'}]}>Send</Text>
                            </TouchableHighlight>

                            <TouchableHighlight activeOpacity={0.6} underlayColor={'white'} onPress={() => {
                              this.setState({inputTagModalVisible: false});
                            }}>
                              <Text style={[Styles.btnBorderYellow,{paddingTop:15,textAlign:'center',alignItems:'center',justifyContent:'center',height:50,borderRadius:0,fontWeight:'bold',borderWidth:1,marginTop:10,color:'rgb(243,145,28)'}]}>Cancel</Text>
                            </TouchableHighlight>
                        </View>
                       </View>
                  </Modal>


              </ScrollView>
          </View>
      </View>
    );
  }
}
AppRegistry.registerComponent('MomentView', () => MomentView);
