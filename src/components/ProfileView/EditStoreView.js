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

export default class EditStoreView extends Component {

  static navigatorStyle = {
        tabBarHidden: true,
        navBarHidden:true
  };
  state = {
    bioCharacters:"0/200 characters",
    bioHeight:50
  };
  render() {
    var offset = 0;
    return (
      <View style={{flex:1}}>
          <View style={{flex:1}}>
            <ScrollView>
                <View>
                  <Text style={{color:'rgb(106,100,100)',fontSize:15,width:windowWidth,textAlign:'center',marginTop:15}}>Edit Profile</Text>
                  <TouchableHighlight style={Styles.imgTopLeft} activeOpacity={0.6} underlayColor={'rgba(255,255,255,0.1)'}
                    onPress={()=>
                        this.props.navigator.pop()
                      }>
                      <Image resizeMode={Image.resizeMode.stretch} source={require('../../common/Images/backIcon@2x.png')} style={{width:10,height:20}}/>
                  </TouchableHighlight>
                </View>
                <View style={{marginTop:10,height:1,backgroundColor:'rgb(217,217,217)'}}/>

                <Text style={[CommonStyles.medium18,{fontWeight:'bold',marginTop:10,color:'rgb(106,106,106)',fontSize:18,flex:1,textAlign:'center'}]}>Set up your store</Text>
                <Text style={[CommonStyles.book,{margin:15,color:'rgb(106,106,106)',fontSize:14,flex:1,textAlign:'center'}]}>
                  To start providng a service we need  to set up your Storefront.
                </Text>


                <View style={{flexDirection:'row',margin:10}}>
                  <View style={{flex:1,marginRight:10}}>
                    <Text style={[CommonStyles.medium12,{marginLeft:3,color:'rgb(184,184,184)',fontSize:12}]}>Store title</Text>
                    <TextInput underlineColorAndroid='transparent' selectionColor='rgb(243,145,28)' style={{ paddingBottom:0,borderBottomWidth:1,fontSize:14,borderColor: 'rgb(184,184,184)',color:'rgb(142,142,142)'}}>18 Albert St, Footscray VIC</TextInput>
                  </View>
                </View>

                <View style={{flexDirection:'row',margin:10}}>
                  <View style={{flex:1,marginRight:10}}>
                    <Text style={[CommonStyles.medium12,{marginLeft:3,color:'rgb(184,184,184)',fontSize:12}]}>ABN</Text>
                    <TextInput underlineColorAndroid='transparent' selectionColor='rgb(243,145,28)' style={{ paddingBottom:0,borderBottomWidth:1,fontSize:14,borderColor: 'rgb(184,184,184)',color:'rgb(142,142,142)'}}>90 000 345 98</TextInput>
                  </View>
                </View>

            </ScrollView>
            <View style={{flexDirection:'row',bottom:10,marginLeft:10,marginRight:10,position:'absolute'}}>
              <TouchableHighlight style={{flex:1}} activeOpacity={0.6} underlayColor={'white'}
                  onPress={()=>
                  {
                    this.props.navigator.push({
                              screen: 'EditHeaderImageView'
                          })
                  }}>
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
