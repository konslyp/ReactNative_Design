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

export default class CommentsView extends Component {

  static navigatorStyle = {
        tabBarHidden: true,
        navBarHidden:true
  };
  state = {
    dataSource: ds.cloneWithRows([{name:'Jackson',comment:'Duis mollis sagittsdfksld',reply:[{name:'John',comment:'Very good'},{name:'John',comment:'Very good'}]}, {name:'Jackson',comment:'Dummy Test for comment.',reply:[]},{name:'Jackson',comment:'Duis mollis sagittsdfksld',reply:[{name:'John',comment:'Very good'}]}]),
    bioCharacters:"0/100 characters",
    bioHeight:50
  };

  _renderRow(rowData) {

    var cellHeight=rowData.reply.length * 40 + 60;
    return (
      <Animated.View style={{backgroundColor:'white',flexDirection:'row',padding:10,height:cellHeight}}>
          <Image resizeMode={Image.resizeMode.cover} source={require('../../common/Images/dogtrain_thumb.png')} style={{width:44,height:44,borderRadius:22}}/>
          <View>
            <View flexDirection='row' style={{alignItems:'center',marginLeft:10,marginRight:10}}>
                <Text style={[CommonStyles.medium12,{fontWeight:'bold'}]}>{rowData.name}:</Text>
                <Text style={[CommonStyles.medium12,{marginLeft:5,color:'rgb(106,100,100)'}]}>{rowData.comment}</Text>
            </View>
            <View flexDirection='row' style={{alignItems:'center',marginLeft:10,marginRight:10,marginTop:8}}>
                <Text style={[CommonStyles.medium12,{color:'rgb(184,184,184)'}]}>12/10</Text>
                <Text style={[CommonStyles.medium12,{marginLeft:20,color:'rgb(108,108,108)'}]}>Reply</Text>
            </View>
            <View flexDirection='row' style={{marginTop:10,marginLeft:10}}>
                <Image resizeMode={Image.resizeMode.cover} source={require('../../common/Images/dogtrain_thumb.png')} style={{width:28,height:28,borderRadius:14}}/>
                <View flexDirection='row' style={{alignItems:'center',marginLeft:10,marginRight:10}}>
                    <Text style={[CommonStyles.medium12,{fontWeight:'bold',marginLeft:5}]}>Selly:</Text>
                    <Text style={[CommonStyles.medium12,{marginLeft:5,color:'rgb(106,100,100)'}]}>They look so cute! I love~ them!</Text>
                </View>
            </View>
            <View flexDirection='row' style={{marginTop:10,marginLeft:10}}>
                <Image resizeMode={Image.resizeMode.cover} source={require('../../common/Images/dogtrain_thumb.png')} style={{width:28,height:28,borderRadius:14}}/>
                <View flexDirection='row' style={{alignItems:'center',marginLeft:10,marginRight:10}}>
                    <Text style={[CommonStyles.medium12,{fontWeight:'bold',marginLeft:5}]}>Selly:</Text>
                    <Text style={[CommonStyles.medium12,{marginLeft:5,color:'rgb(106,100,100)'}]}>They look so cute! I love~ them!</Text>
                </View>
            </View>
          </View>
      </Animated.View>
    );
  };


  render() {
    var offset = 0;
    return (
      <View style={{flex:1}}>
          <View>
            <Text style={{color:'rgb(106,100,100)',fontSize:15,width:windowWidth,textAlign:'center',marginTop:15}}>Comments</Text>
            <TouchableHighlight style={Styles.imgTopLeft} activeOpacity={0.6} underlayColor={'rgba(255,255,255,0.1)'}
              onPress={()=>
                  this.props.navigator.pop()
                }>
                <Image resizeMode={Image.resizeMode.stretch} source={require('../../common/Images/backIcon@2x.png')} style={{width:10,height:20}}/>
            </TouchableHighlight>
          </View>
          <View style={{marginTop:10,height:1,backgroundColor:'rgb(217,217,217)'}}/>
          <View style={{flex:1}}>
              <ListView
                dataSource={this.state.dataSource}
                renderRow={this._renderRow}
                renderSeparator={(rowData) =>
                  <View style={{height:1,backgroundColor:'rgb(217,217,217)'}}>
                  </View>
                }
              />
          </View>
          <View style={{margin:10}}>
              <View style={{flexDirection:'row', marginRight:10}}>
                <Text style={[CommonStyles.medium12,{marginLeft:3,color:'rgb(142,142,142)',fontSize:12}]}></Text>
                <Text style={[CommonStyles.medium12,{textAlign:'right',flex:1,marginLeft:3,color:'rgb(142,142,142)',fontSize:12}]}>{this.state.bioCharacters}</Text>
              </View>
              <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
                  <TextInput underlineColorAndroid='transparent' selectionColor='rgb(255,216,169)' style={{height: Math.max(35, this.state.bioHeight),flex:1,marginRight:10,paddingBottom:0,borderBottomWidth:1,fontSize:14,borderColor: 'rgb(255,216,169)',color:'rgb(184,184,184)'}} maxLength = {100} multiline = {true}
                  onChange={(event) => {
                    this.state.bioCharacters = event.nativeEvent.text.length + "/100 characters";
                    this.setState({
                      bioCharacters:this.state.bioCharacters,
                      bioHeight: event.nativeEvent.contentSize.height,
                    });

                  }
                }>Write a Message...</TextInput>
                <TouchableHighlight style={{width:44,height:44}} activeOpacity={0.6} underlayColor={'white'}
                    onPress={this.onTestBtn}>
                    <View style={{height:44,width:44,borderRadius:22,backgroundColor:'rgb(243,145,28)',alignItems:'center',justifyContent:'center'}}>
                      <Image resizeMode={Image.resizeMode.stretch} source={require('../../common/Images/chat_send.png')} style={{width:40,height:40}}/>
                    </View>
                </TouchableHighlight>
              </View>

          </View>
      </View>
    );
  }
}
AppRegistry.registerComponent('MomentView', () => MomentView);
