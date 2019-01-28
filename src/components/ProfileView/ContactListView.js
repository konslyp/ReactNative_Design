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

export default class ContactListView extends Component {

  static navigatorStyle = {
        tabBarHidden: true,
        navBarHidden:true
  };
  state = {
    dataSource: ds.cloneWithRows([{name:'Jackson',comment:'Duis mollis sagittsdfksld',reply:[{name:'John',comment:'Very good'},{name:'John',comment:'Very good'}]}, {name:'Jackson',comment:'Dummy Test for comment.',reply:[]},{name:'Jackson',comment:'Duis mollis sagittsdfksld',reply:[{name:'John',comment:'Very good'}]}]),
    bioCharacters:"0/100 characters",
    bioHeight:50
  };

  render() {
    var offset = 0;
    return (
      <View style={{flex:1}}>
          <View>
            <Text style={{color:'rgb(106,100,100)',fontSize:15,width:windowWidth,textAlign:'center',marginTop:15}}>Contact List</Text>
            <TouchableHighlight style={Styles.imgTopLeft} activeOpacity={0.6} underlayColor={'rgba(255,255,255,0.1)'}
              onPress={()=>
                  this.props.navigator.pop()
                }>
                <Image resizeMode={Image.resizeMode.stretch} source={require('../../common/Images/backIcon@2x.png')} style={{width:10,height:20}}/>
            </TouchableHighlight>

            <TouchableHighlight style={Styles.imgTopRight} activeOpacity={0.6} underlayColor={'rgba(255,255,255,0.1)'}
              onPress={()=>
                this.props.navigator.push({
                          screen: 'SearchContactView'
                      })
              }>
                <Image resizeMode={Image.resizeMode.stretch} source={require('../../common/Images/search@2x.png')} style={{width:20,height:20}}/>
            </TouchableHighlight>


          </View>
          <View style={{marginTop:10,height:1,backgroundColor:'rgb(217,217,217)'}}/>
          <View style={{flex:1}}>
              <ScrollView>
                  <View>
                    <View style={{padding:10,backgroundColor:'rgb(244,244,244)'}}>
                      <Text style={CommonStyles.medium16}>Pending</Text>
                    </View>
                    <View>
                      <View flexDirection='row' style={{padding:10}}>
                          <Image resizeMode={Image.resizeMode.cover} source={require('../../common/Images/dogtrain_thumb.png')} style={{width:36,height:36,borderRadius:18}}/>
                          <View flexDirection='row' style={{alignItems:'center',marginLeft:10,flex:1}}>
                              <View>
                                <Text style={[CommonStyles.medium12,{color:'rgb(106,106,106)'}]}>Jing Tai Piao</Text>
                                <Text style={[CommonStyles.medium12,{color:'rgb(142,142,142)'}]}>Senior developer at Soft</Text>
                              </View>
                              <View flexDirection='row' style={{marginRight:10,justifyContent:'flex-end',alignItems:'center',flex:1}}>
                                <View style={[{paddingLeft:10,paddingRight:10,paddingTop:5,paddingBottom:5,borderRadius:0}]}>
                                  <Text style={[Styles.labelStarReview,{color:'rgb(108,108,108)'}]}> Reject </Text>
                                </View>
                                <View style={[Styles.btnBorderYellow,{paddingLeft:10,paddingRight:10,marginLeft:10,paddingTop:5,borderRadius:4,paddingBottom:5,borderWidth:1,borderRadius:2}]}>
                                  <Text style={Styles.labelStarReview}> Accept </Text>
                                </View>
                              </View>
                          </View>
                        </View>
                        <View style={{height:1,backgroundColor:'rgb(217,217,217)'}}/>

                        <View flexDirection='row' style={{padding:10}}>
                            <Image resizeMode={Image.resizeMode.cover} source={require('../../common/Images/dogtrain_thumb.png')} style={{width:36,height:36,borderRadius:18}}/>
                            <View flexDirection='row' style={{alignItems:'center',marginLeft:10,flex:1}}>
                                <View>
                                  <Text style={[CommonStyles.medium12,{color:'rgb(106,106,106)'}]}>Jing Tai Piao</Text>
                                  <Text style={[CommonStyles.medium12,{color:'rgb(142,142,142)'}]}>Senior developer at Soft</Text>
                                </View>
                                <View flexDirection='row' style={{marginRight:10,justifyContent:'flex-end',alignItems:'center',flex:1}}>
                                  <View style={[{paddingLeft:10,paddingRight:10,paddingTop:5,paddingBottom:5,borderRadius:0}]}>
                                    <Text style={[Styles.labelStarReview,{color:'rgb(108,108,108)'}]}> Reject </Text>
                                  </View>
                                  <View style={[Styles.btnBorderYellow,{paddingLeft:10,paddingRight:10,marginLeft:10,paddingTop:5,paddingBottom:5,borderWidth:1,borderRadius:2}]}>
                                    <Text style={Styles.labelStarReview}> Accept </Text>
                                  </View>
                                </View>
                            </View>
                          </View>

                    </View>
                  </View>
                  <View>
                    <View style={{padding:10,backgroundColor:'rgb(244,244,244)'}}>
                      <Text style={CommonStyles.medium16}>Contacts</Text>
                    </View>
                    <View flexDirection='row' style={{padding:10}}>
                        <Image resizeMode={Image.resizeMode.cover} source={require('../../common/Images/dogtrain_thumb.png')} style={{width:36,height:36,borderRadius:18}}/>
                        <View flexDirection='row' style={{alignItems:'center',marginLeft:10,flex:1}}>
                            <View>
                              <Text style={[CommonStyles.medium12,{color:'rgb(106,106,106)'}]}>Jing Tai Piao</Text>
                              <Text style={[CommonStyles.medium12,{color:'rgb(142,142,142)'}]}>Senior developer at Soft</Text>
                            </View>
                        </View>
                      </View>
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
              </ScrollView>
          </View>
      </View>
    );
  }
}
AppRegistry.registerComponent('MomentView', () => MomentView);
