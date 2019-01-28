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
import ImagePicker from 'react-native-image-picker';

const windowWidth = Dimensions.get('window').width;

const options = {
  title: 'Add Credentials',
  storageOptions: {
    skipBackup: true,
    path: 'images'
  }
}

export default class EditHeaderImageView extends Component {

  static navigatorStyle = {
        tabBarHidden: true,
        navBarHidden:true
  };
  state = {
    bioCharacters:"0/200 characters",
    bioHeight:50,
    avatarSource:require('../../common/Images/rectangle11Copy@3x.png')
  };
  customFunc()
  {
    alert("ttt1");
  };

  render() {
    var offset = 0;
    return (
      <View style={{flex:1}}>
          <View style={{flex:1}}>
            <ScrollView>
                <View>
                  <Text style={{color:'rgb(106,100,100)',fontSize:18,width:windowWidth,textAlign:'center',marginTop:15}}>Become a Provider</Text>
                  <TouchableHighlight style={Styles.imgTopLeft} activeOpacity={0.6} underlayColor={'rgba(255,255,255,0.1)'}
                    onPress={()=>
                        this.props.navigator.pop()
                      }>
                      <Image resizeMode={Image.resizeMode.stretch} source={require('../../common/Images/backIcon@2x.png')} style={{width:10,height:20}}/>
                  </TouchableHighlight>
                </View>
                <View style={{marginTop:10,height:1,backgroundColor:'rgb(217,217,217)'}}/>

                <Text style={[CommonStyles.medium18,{fontWeight:'bold',marginTop:10,color:'rgb(106,106,106)',fontSize:18,flex:1,textAlign:'center'}]}>Choose a header image</Text>
                <Text style={[CommonStyles.book,{margin:15,color:'rgb(106,106,106)',fontSize:14,flex:1,textAlign:'center'}]}>
                  Select a header image for your storefront.
                </Text>

                <TouchableHighlight activeOpacity={0.6} underlayColor={'rgba(255,255,255,0.1)'}
                  onPress={()=>
                  {
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
                          avatarSource
                        });
                      }
                    });
                  }}>
                    <Image resizeMode={Image.resizeMode.stretch} source={this.state.avatarSource} style={{width:windowWidth - 20,height:200,marginTop:10,marginLeft:10,marginRight:10}}/>
                </TouchableHighlight>

            </ScrollView>
            <View style={{flexDirection:'row',bottom:10,marginLeft:10,marginRight:10,position:'absolute'}}>
              <TouchableHighlight style={{flex:1}} activeOpacity={0.6} underlayColor={'white'}
                  onPress={()=>
                    //
                    {
                      this.props.navigator.push({
                                screen: 'EditStorefrontTagView'
                            })
                    }
                  }>
                  <View style={[Styles.btnFullYellow,{height:50}]}>
                    <Text style={{color:'white'}}>Update</Text>
                  </View>
              </TouchableHighlight>
            </View>
          </View>
      </View>
    );
  }
}
AppRegistry.registerComponent('MomentView', () => MomentView);
