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

import LocationSelector from '../../common/LocationSelector/index.js';
import WheelSelector from '../../common/WheelSelector/index.js';
import InfiniteWheelSelector from '../../common/InfiniteWheelSelector/index.js';
import ImageCropper from '../../common/ImageCropper/index.js';
import RNGooglePlacePicker from 'react-native-google-place-picker';


import Styles from './styles';
import CommonStyles from '../../common/CommonStyle';

const windowWidth = Dimensions.get('window').width;

export default class CreateServiceViewStep2 extends Component {

  static navigatorStyle = {
        tabBarHidden: true,
        navBarHidden:true
  };
  state = {

  };
  pickLocation()
  {

  };
  render() {
    var offset = 0;
    return (
      <View style={{flex:1}}>
          <View style={{flex:1}}>
            <ScrollView>
                <View>
                  <Text style={{color:'rgb(106,100,100)',fontSize:18,width:windowWidth,textAlign:'center',marginTop:15}}>Create New Service</Text>
                  <TouchableHighlight style={Styles.imgTopLeft} activeOpacity={0.6} underlayColor={'rgba(255,255,255,0.1)'}
                    onPress={()=>
                        this.props.navigator.pop()
                      }>
                      <Image resizeMode={Image.resizeMode.stretch} source={require('../../common/Images/backIcon@2x.png')} style={{width:10,height:20}}/>
                  </TouchableHighlight>
                </View>
                <View style={{marginTop:10,height:1,backgroundColor:'rgb(217,217,217)'}}/>
                <View style={{flexDirection:'row',margin:10}}>
                  <View style={{flex:1,marginRight:10}}>
                    <Text style={[CommonStyles.medium12,{marginLeft:3,color:'rgb(142,142,142)',fontSize:16,textAlign:'center'}]}>Service Location</Text>
                    <LocationSelector style={{marginTop:10}} text='North Melbourne' onPress={()=>
                      RNGooglePlacePicker.show((response) => {
                        if (response.didCancel) {
                          console.log('User cancelled GooglePlacePicker');
                        }
                        else if (response.error) {
                          console.log('GooglePlacePicker Error: ', response.error);
                        }
                        else {
                          this.setState({
                            location: response
                          });
                        }
                      })
                    }/>
                  </View>
                </View>
                <View style={{marginTop:10,height:1,backgroundColor:'rgb(217,217,217)'}}/>

                <View style={{flexDirection:'row',margin:10}}>
                  <View style={{flex:1,marginRight:10}}>
                    <Text style={[CommonStyles.medium12,{marginLeft:3,color:'rgb(142,142,142)',fontSize:16,textAlign:'center'}]}>Service Price</Text>
                    <View style={{flexDirection:'row',flex:1,alignItems:'center',marginTop:10}}>
                      <Text style={[CommonStyles.medium12,{flex:1,marginLeft:10,color:'rgb(184,184,184)',fontSize:16}]}>Service Unit Price (Inc tax)</Text>
                      <Text style={[CommonStyles.medium12,{marginLeft:10,color:'rgb(184,184,184)',fontSize:16}]}>$</Text>
                      <TextInput underlineColorAndroid='transparent' selectionColor='rgb(243,145,28)' style={{marginLeft:10, paddingTop:0, width:70,textAlign:'right',paddingBottom:0,borderBottomWidth:1,borderColor: 'rgb(184,184,184)',color:'rgb(184,184,184)',fontSize:14}}>$80</TextInput>
                    </View>
                  </View>
                </View>
                <View style={{marginTop:10,height:1,backgroundColor:'rgb(217,217,217)'}}/>

                <View style={{flexDirection:'row',margin:10}}>
                  <View style={{flex:1,marginRight:10}}>
                    <Text style={[CommonStyles.medium12,{marginLeft:3,color:'rgb(142,142,142)',fontSize:16,textAlign:'center'}]}>Service Unit</Text>
                    <InfiniteWheelSelector
                      options={[
                        'Per Hour',
                        'Per Day'
                      ]}
                      displayNumber={5}
                      onSelectChange={this.onTimeframeChange}
                    />
                  </View>
                </View>
                <View style={{height:1,backgroundColor:'rgb(217,217,217)'}}/>
            </ScrollView>
            <View style={{flexDirection:'row',bottom:10,marginLeft:10,marginRight:10,position:'absolute'}}>
              <TouchableHighlight style={{flex:1}} activeOpacity={0.6} underlayColor={'white'}
                  onPress={()=>
                        this.props.navigator.push({
                                  screen: 'CreateServiceViewStep3'
                              })
                  }>
                  <View style={[Styles.btnFullYellow,{height:50}]}>
                    <Text style={{color:'white'}}>Next</Text>
                  </View>
              </TouchableHighlight>
            </View>
          </View>
      </View>
    );
  }
}
AppRegistry.registerComponent('MomentView', () => MomentView);
