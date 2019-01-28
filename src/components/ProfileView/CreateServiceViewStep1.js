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
import ImageCropper from '../../common/ImageCropper/index.js';

import Styles from './styles';
import CommonStyles from '../../common/CommonStyle';

const windowWidth = Dimensions.get('window').width;

export default class CreateServiceViewStep1 extends Component {

  static navigatorStyle = {
        tabBarHidden: true,
        navBarHidden:true
  };
  state = {

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
                    <Text style={[CommonStyles.medium2,{marginLeft:3,color:'rgb(142,142,142)',fontSize:12}]}>Title</Text>
                    <TextInput underlineColorAndroid='transparent' selectionColor='rgb(243,145,28)' style={{ paddingBottom:0,borderBottomWidth:1,borderColor: 'rgb(184,184,184)',color:'rgb(184,184,184)',fontSize:14}} placeholder='Title' placeholderTextColor='rgb(184,184,184)'></TextInput>
                  </View>
                </View>

                <View style={{margin:10}}>
                    <View style={{flexDirection:'row', marginRight:10}}>
                      <Text style={[CommonStyles.medium12,{marginLeft:3,color:'rgb(142,142,142)',fontSize:12}]}>Description</Text>
                      <Text style={[CommonStyles.medium12,{textAlign:'right',flex:1,marginLeft:3,color:'rgb(142,142,142)',fontSize:12}]} placeholder='Description' placeholderTextColor='rgb(142,142,142)'>{this.state.bioCharacters}</Text>
                    </View>
                    <TextInput underlineColorAndroid='transparent' selectionColor='rgb(243,145,28)' style={{height: Math.max(35, this.state.bioHeight),flex:1,paddingBottom:0,borderBottomWidth:1,fontSize:14,borderColor: 'rgb(184,184,184)',color:'rgb(184,184,184)'}} placeholder='Description' maxLength = {200} multiline = {true}
                    onChange={(event) => {
                      this.state.bioCharacters = event.nativeEvent.text.length + "/200 characters";
                      this.setState({
                        bioCharacters:this.state.bioCharacters,
                        bioHeight: event.nativeEvent.contentSize.height,
                      });

                    }
                  }></TextInput>
                </View>
                <TouchableHighlight style={{marginLeft:10}} activeOpacity={0.6} underlayColor={'white'}
                    onPress={this.onTestBtn}>
                    <Image resizeMode={Image.resizeMode.stretch} source={require('../../common/Images/ic_camera_add.png')} style={{width:25,height:20}}/>
                </TouchableHighlight>

            </ScrollView>
            <View style={{flexDirection:'row',bottom:10,marginLeft:10,marginRight:10,position:'absolute'}}>
              <TouchableHighlight style={{flex:1}} activeOpacity={0.6} underlayColor={'white'}
                onPress={()=>
                      this.props.navigator.push({
                                screen: 'CreateServiceViewStep2'
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
