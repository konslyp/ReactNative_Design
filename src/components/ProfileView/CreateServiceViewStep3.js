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
import ImageCropper from '../../common/ImageCropper/index.js';
import MapView from 'react-native-maps';

import Styles from './styles';
import CommonStyles from '../../common/CommonStyle';

const windowWidth = Dimensions.get('window').width;

export default class CreateServiceViewStep2 extends Component {

  static navigatorStyle = {
        tabBarHidden: true,
        navBarHidden:true
  };
  state = {
    region:{
      latitude: 37.78825,
      longitude: -122.4324,
      latitudeDelta: 0.015,
      longitudeDelta: 0.0121,
    }
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
                  <Text style={[CommonStyles.medium12,{marginLeft:3,color:'rgb(243, 129, 24)',textAlignVertical:'bottom'}]}>
                    <Text style={{fontSize:20}}>
                      $30
                    </Text>
                    <Text style={{fontSize:14}}>
                      /hour
                    </Text>
                  </Text>
                  <Text style={[CommonStyles.medium12,{marginLeft:10,color:'rgb(142,142,142)',textAlignVertical:'bottom',fontSize:14}]}>Weekend Pet Training Starter Class for Small Dogs</Text>
                </View>
                <View style={{marginLeft:10,marginRight:10}}>
                    <Text style={[CommonStyles.medium12,{marginLeft:3,color:'rgb(243, 129, 24)',textAlignVertical:'bottom'}]}>Service Details</Text>
                    <Text style={[CommonStyles.medium12,{marginLeft:3,marginTop:5,color:'rgb(142,142,142)',textAlignVertical:'bottom'}]}>
                        This class will help you socialize your puppy to people, places, strange objects, and other puppies—so they will grow up to be friendly and easy to take anywhere. We cover puppy basics, such as sit, down, polite greetings, walking nicely on a leash and come when called. Included is vital information about behavior management, preventing problems and general health. We can help with biting, toilet training, chewing, digging and more.
                        {'\n'}{'\n'}
                        For: Pups aged 7-15 weeks at start of program
                        Duration: 1 hour lessons, 4 consecutive weeks
                        Size: Class is limited to 6 pups
                        Prerequisites: Had first vaccination

                    </Text>
                </View>

                <View style={{marginLeft:10,marginRight:10,marginTop:10}}>
                    <Text style={[CommonStyles.medium12,{marginLeft:3,color:'rgb(243, 129, 24)',textAlignVertical:'bottom'}]}>Service Location</Text>
                    <Text style={[CommonStyles.medium12,{marginLeft:3,marginTop:5,color:'rgb(142,142,142)',textAlignVertical:'bottom'}]}>
                      Middle entrance of Ramsgate Beach {'\n'}
                      Cook Park, Brighton Le sands, NSW 2217
                    </Text>
                </View>
                <View style={{flex:1,height:250,marginTop:10}}>
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
            </ScrollView>
            <View style={{flexDirection:'row',bottom:10,marginLeft:10,marginRight:10,position:'absolute'}}>
              <TouchableHighlight style={{flex:1}} activeOpacity={0.6} underlayColor={'white'}
                  onPress={this.onTestBtn}>
                  <View style={[Styles.btnFullYellow,{height:50}]}>
                    <Text style={{color:'white'}}>Finish</Text>
                  </View>
              </TouchableHighlight>
            </View>
          </View>
      </View>
    );
  }
}
AppRegistry.registerComponent('MomentView', () => MomentView);
