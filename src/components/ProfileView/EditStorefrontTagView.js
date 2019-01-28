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
import TagPicker from '../../common/TagPicker/index.js'

import Styles from './styles';
import CommonStyles from '../../common/CommonStyle';

const windowWidth = Dimensions.get('window').width;

export default class EditStorefrontTagView extends Component {

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

                <Text style={[CommonStyles.medium18,{fontWeight:'bold',marginTop:10,color:'rgb(106,106,106)',fontSize:18,flex:1,textAlign:'center'}]}>Storefront tags</Text>
                <Text style={[CommonStyles.book,{margin:15,color:'rgb(106,106,106)',fontSize:14,flex:1,textAlign:'center'}]}>
                  Search for tags for your store or add your own! Tags help identify your store and help find it in keyword searches
                </Text>

                <View style={{marginTop:10,height:1,backgroundColor:'rgb(217,217,217)'}}/>
                <View style={{marginLeft:10,marginRight:10,flex:1,marginTop:10}}>
                  <TagPicker
                  tagList={['Cleaning','Flower','Flower arrangement','Floral photography','Flowers','Vacation Clean','Removalist']}
                  popList={['Cleaning','Vacation Clean','Removalist']}
                  />
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
