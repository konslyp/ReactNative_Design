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
  Alert,
  InteractionManager
} from 'react-native';

import LocationSelector from '../../common/LocationSelector/index.js';
import ImageCropper from '../../common/ImageCropper/index.js';
import ImagePicker from 'react-native-image-picker';
import PhotoPicker from '../../common/PhotoPicker/index.js';

import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';


import Styles from './styles';
import CommonStyles from '../../common/CommonStyle';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const imageMessageWidth70 = windowWidth * 0.55;
const imageMessageWidth33 = windowWidth * 0.35;

const options = {
  title: 'Select Avatar',
  storageOptions: {
    skipBackup: true,
    path: 'images'
  }
}
export default class ChatView extends Component {


  static navigatorStyle = {
        tabBarHidden: true,
        navBarHidden:true
  };
  state = {
      menuVisible:false,
      messageList:[
        {id:1,from:0,message:'You can join my starter class over on Saturday. I will fix you problem in 4 weeks.',type:0},
        {id:3,from:0,message:'Good',type:0},
        {id:2,from:1,message:'Ok. Thanks',type:0},
        {id:4,from:1,message:'What are you doing today?',type:0},
        {id:6,from:0,message:'What are you doing today?',type:2}, //Schedule
        {id:7,from:0,message:'What are you doing today?',type:3}, //Invoice
        {id:8,from:0,message:'What are you doing today?',type:4}, //Refund
        {id:9,from:0,message:'What are you doing today?',type:5}, //Feedback
        {id:10,from:1,message:'What are you doing today?',type:2}, //Schedule
        {id:11,from:1,message:'What are you doing today?',type:3}, //Schedule

      ],
  };


  clickMenu()
  {
    if (this.state.menuVisible)
    {
      this.setState(
        {
          menuVisible:false
        }
      )
    }
    else {
      this.setState(
        {
          menuVisible:true
        }
      )
    }
  }

  clickCameraMessage()
  {
      InteractionManager.runAfterInteractions(() =>
        ImagePicker.launchCamera(options, response => this.onImageSelect(response))
      );
  }

  clickPickerMessage()
  {
      InteractionManager.runAfterInteractions(() =>
        ImagePicker.launchImageLibrary(options, response => this.onImageSelect(response))
      );
  }

  onImageSelect(response) {
    //alert("Paramter received");
    if (response && response.uri) {
      this.addImageMessage(response.uri);
    }

  }

  addImageMessage(imageUri)
  {
    var messageList1 = [...this.state.messageList];
    messageList1.push({
      id:6,from:0,type:1,uri:imageUri
    })
    this.setState(
      {
        messageList:messageList1
      }
    );
  }
  renderMessages()
  {
    let messageViews = [];

    messageViews.push(
      <View key={0} style={{flexDirection:'row',marginTop:10,marginBottom:10,alignItems:'center'}}>
        <View style={{marginLeft:20,height:1,backgroundColor:'#D6D6D6',flex:1}}/>
        <Text style={{color:'rgb(186,186,186)',marginLeft:10,marginRight:10}}>Today</Text>
        <View style={{height:1,backgroundColor:'#D6D6D6',flex:1,marginRight:20}}/>
      </View>
    );


    for (let i = 0;i < this.state.messageList.length;i++)
    {
      if (this.state.messageList[i].from == 0) // My message
      {
        if (this.state.messageList[i].type == 0)
        {
          if (i < this.state.messageList.length - 1 && this.state.messageList[i + 1].from == 0)
          {
            messageViews.push(
              <View key={this.state.messageList[i].id} style={{alignItems:'flex-end',justifyContent:'flex-end'}}>
                <View  style={{flexDirection:'row',alignItems:'flex-end',justifyContent:'flex-end'}}>
                  <View style={{minHeight:49,backgroundColor:'#F7941D',borderRadius:14,flexWrap:'wrap',padding:15,marginLeft:50,marginRight:20,alignItems:'center'}}>
                    <Text style={[CommonStyles.book,{color:'white',fontSize:14}]}>{this.state.messageList[i].message}</Text>
                  </View>
                </View>
                <View style={{flexDirection:'row',marginRight:36.8}}>
                  <Image resizeMode={Image.resizeMode.stretch} source={require('../../common/Images/dialog_joint@3x.png')} style={{width:19,height:5,marginLeft:3,marginTop:-1}}/>
                </View>
              </View>
            );
          }
          else {
            messageViews.push(
              <View key={this.state.messageList[i].id} style={{alignItems:'flex-end',justifyContent:'flex-end'}}>
                <View  style={{flexDirection:'row',alignItems:'flex-end',justifyContent:'flex-end'}}>
                  <View style={{minHeight:49,backgroundColor:'#F7941D',borderRadius:14,flexWrap:'wrap',padding:15,marginLeft:50,alignItems:'center'}}>
                    <Text style={[CommonStyles.book,{color:'white',fontSize:14}]}>{this.state.messageList[i].message}</Text>
                  </View>
                  <Image resizeMode={Image.resizeMode.stretch} source={require('../../common/Images/chat_message_icon_talk.png')} style={{marginLeft:-1,width:8,height:13,marginBottom:10,marginRight:15}}/>
                </View>
                <View style={{flexDirection:'row',height:20,marginRight:30,marginTop:5}}>
                  <Text style={[CommonStyles.book,{color:'rgb(142,142,142)',fontSize:12}]}>11:57am</Text>
                  <Image resizeMode={Image.resizeMode.stretch} source={require('../../common/Images/tick@3x.png')} style={{marginTop:5,width:12,height:10,marginBottom:10,marginLeft:3}}/>
                </View>
              </View>
            );
          }

        }
        else if (this.state.messageList[i].type == 1)
        {
          messageViews.push(
            <View key={this.state.messageList[i].id} style={{alignItems:'flex-end',justifyContent:'flex-end',marginTop:10}}>
              <View  style={{flexDirection:'row',alignItems:'flex-end',justifyContent:'flex-end',marginTop:10}}>
                <View style={{minHeight:40,backgroundColor:'#F7941D',borderRadius:14,flexWrap:'wrap',padding:15,marginLeft:50,alignItems:'center'}}>
                  <Image resizeMode={Image.resizeMode.stretch} source={{uri:this.state.messageList[i].uri,width:imageMessageWidth70,height:imageMessageWidth33}}/>
                </View>
                <Image resizeMode={Image.resizeMode.stretch} source={require('../../common/Images/chat_message_icon_talk.png')} style={{width:8,height:14,marginBottom:10,marginRight:15}}/>
              </View>
              <View style={{flexDirection:'row',height:20,marginRight:30}}>
                <Text style={[CommonStyles.book,{color:'rgb(142,142,142)',fontSize:12}]}>11:57am</Text>
                <Image resizeMode={Image.resizeMode.stretch} source={require('../../common/Images/tick@3x.png')} style={{marginTop:5,width:12,height:10,marginBottom:10,marginLeft:3}}/>
              </View>
            </View>
          );
        }
        else if (this.state.messageList[i].type == 2)
        {
          messageViews.push(
            <View key={this.state.messageList[i].id} style={{alignItems:'flex-end',justifyContent:'flex-end',marginTop:10}}>
              <View  style={{flexDirection:'row',alignItems:'flex-end',justifyContent:'flex-end',marginTop:10}}>
                <View style={{minHeight:40,backgroundColor:'#F7941D',borderRadius:14,flexWrap:'wrap',paddingTop:15,paddingLeft:15,paddingRight:15,paddingBottom:25,marginLeft:50}}>
                <Text style={[CommonStyles.medium16,{color:'white',fontWeight:'bold',fontSize:16}]}>Schedule Planner</Text>
                <View style={{height:1,backgroundColor:'white'}}/>
                <Text style={[CommonStyles.book,{color:'white',fontSize:14,marginTop:5}]}>Weekend Starter training at the beach | 2 hours session (AEST)
                  {"\n"} - Sat, 08 Nov   09:00 AM
                  {"\n"} - Sat, 08 Nov   09:00 AM
                  {"\n"} - Sat, 08 Nov   09:00 AM
                  {"\n"} - Sat, 08 Nov   09:00 AM
                </Text>
                </View>
                <Image resizeMode={Image.resizeMode.stretch} source={require('../../common/Images/chat_message_icon_talk.png')} style={{width:8,height:14,marginBottom:10,marginRight:15}}/>
              </View>
              <View style={{flexDirection:'row',height:20,marginRight:30,marginTop:5}}>
                <Text style={[CommonStyles.book,{color:'rgb(142,142,142)',fontSize:12}]}>11:57am</Text>
                <Image resizeMode={Image.resizeMode.stretch} source={require('../../common/Images/tick@3x.png')} style={{marginTop:5,width:12,height:10,marginBottom:10,marginLeft:3}}/>
              </View>

              <TouchableHighlight activeOpacity={0.6} style={{position:'absolute',left:50,bottom:5}} underlayColor={'rgba(255,255,255,0.1)'}
                onPress={()=>
                    {
                      this.clickPickerMessage();
                    }
                  }>
                  <View style={{alignItems:'center'}}>
                      <Image resizeMode={Image.resizeMode.center} source={require('../../common/Images/calendar_btn@3x.png')} style={{width:40,height:40}}/>
                  </View>
              </TouchableHighlight>


            </View>
          );
        }
        else if (this.state.messageList[i].type == 3)
        {
          messageViews.push(
            <View key={this.state.messageList[i].id} style={{alignItems:'flex-end',justifyContent:'flex-end',marginTop:10}}>
              <View  style={{flexDirection:'row',alignItems:'flex-end',justifyContent:'flex-end',marginTop:10}}>
                <View style={{minHeight:40,backgroundColor:'#F7941D',borderRadius:14,flexWrap:'wrap',paddingTop:15,paddingLeft:15,paddingRight:15,paddingBottom:25,marginLeft:50}}>
                  <Text style={[CommonStyles.medium16,{color:'white',fontWeight:'bold',fontSize:16}]}>Invoice INV-001</Text>
                  <View style={{height:1,backgroundColor:'white'}}/>
                  <Text style={[CommonStyles.book,{color:'white',fontSize:14,marginTop:5}]}>Weekend Starter training at the beach | 2 hours session (AEST)
                    {"\n"} - 4  X $30/hr     (Inc. GST)        Total $120.00
                  </Text>
                </View>
                <Image resizeMode={Image.resizeMode.stretch} source={require('../../common/Images/chat_message_icon_talk.png')} style={{width:8,height:14,marginBottom:10,marginRight:15}}/>
              </View>
              <View style={{flexDirection:'row',height:20,marginRight:30,marginTop:5}}>
                <Text style={[CommonStyles.book,{color:'rgb(142,142,142)',fontSize:12}]}>11:57am</Text>
                <Image resizeMode={Image.resizeMode.stretch} source={require('../../common/Images/tick@3x.png')} style={{marginTop:5,width:12,height:10,marginBottom:10,marginLeft:3}}/>
              </View>

              <TouchableHighlight activeOpacity={0.6} style={{position:'absolute',left:50,bottom:5}} underlayColor={'rgba(255,255,255,0.1)'}
                onPress={()=>
                    {
                      this.clickPickerMessage();
                    }
                  }>
                  <View style={{alignItems:'center'}}>
                      <Image resizeMode={Image.resizeMode.center} source={require('../../common/Images/money_btn@3x.png')} style={{width:40,height:40}}/>
                  </View>
              </TouchableHighlight>

            </View>
          );
        }
        else if (this.state.messageList[i].type == 4)
        {
          messageViews.push(
            <View key={this.state.messageList[i].id} style={{alignItems:'flex-end',justifyContent:'flex-end',marginTop:10}}>
              <View  style={{flexDirection:'row',alignItems:'flex-end',justifyContent:'flex-end',marginTop:10}}>
                <View style={{minHeight:40,backgroundColor:'#F7941D',borderRadius:14,flexWrap:'wrap',paddingTop:15,paddingLeft:15,paddingRight:15,paddingBottom:25,marginLeft:50}}>
                <Text style={[CommonStyles.medium16,{color:'white',fontWeight:'bold',fontSize:16}]}>Refund INV-0001</Text>
                <View style={{height:1,backgroundColor:'white'}}/>
                <Text style={[CommonStyles.book,{color:'white',fontSize:14,marginTop:5}]}>Total/Partial $120 has been Refunded. You can see “More Options” in transaction details.
                  {"\n"}{"\n"}Reason: weather has turned bad.Had to cancel the class.
                </Text>
                </View>
                <Image resizeMode={Image.resizeMode.stretch} source={require('../../common/Images/chat_message_icon_talk.png')} style={{width:8,height:14,marginBottom:10,marginRight:15}}/>
              </View>
              <View style={{flexDirection:'row',height:20,marginRight:30,marginTop:5}}>
                <Text style={[CommonStyles.book,{color:'rgb(142,142,142)',fontSize:12}]}>11:57am</Text>
                <Image resizeMode={Image.resizeMode.stretch} source={require('../../common/Images/tick@3x.png')} style={{marginTop:5,width:12,height:10,marginBottom:10,marginLeft:3}}/>
              </View>

              <TouchableHighlight activeOpacity={0.6} style={{position:'absolute',left:50,bottom:5}} underlayColor={'rgba(255,255,255,0.1)'}
                onPress={()=>
                    {
                      this.clickPickerMessage();
                    }
                  }>
                  <View style={{alignItems:'center'}}>
                      <Image resizeMode={Image.resizeMode.center} source={require('../../common/Images/flag_btn@3x.png')} style={{width:40,height:40}}/>
                  </View>
              </TouchableHighlight>


            </View>
            );
          }
          else if (this.state.messageList[i].type == 5)
          {
            messageViews.push(
              <View key={this.state.messageList[i].id} style={{alignItems:'flex-end',justifyContent:'flex-end',marginTop:10}}>
                <View  style={{flexDirection:'row',alignItems:'flex-end',justifyContent:'flex-end',marginTop:10}}>
                  <View style={{minHeight:40,backgroundColor:'#F7941D',borderRadius:14,flexWrap:'wrap',paddingTop:15,paddingLeft:15,paddingRight:15,paddingBottom:25,marginLeft:50}}>
                  <Text style={[CommonStyles.medium16,{color:'white',fontWeight:'bold',fontSize:16}]}>Job Completed</Text>
                  <View style={{height:1,backgroundColor:'white'}}/>
                  <Text style={[CommonStyles.book,{color:'white',fontSize:14,marginTop:5}]}>Awesome customer! Always a Please to work with!
                  </Text>
                  </View>
                  <Image resizeMode={Image.resizeMode.stretch} source={require('../../common/Images/chat_message_icon_talk.png')} style={{marginLeft:-1,width:8,height:14,marginBottom:10,marginRight:15}}/>
                </View>
                <View style={{flexDirection:'row',height:20,marginRight:30,marginTop:5}}>
                  <Text style={[CommonStyles.book,{color:'rgb(142,142,142)',fontSize:12}]}>11:57am</Text>
                  <Image resizeMode={Image.resizeMode.stretch} source={require('../../common/Images/tick@3x.png')} style={{marginTop:5,width:12,height:10,marginBottom:10,marginLeft:3}}/>
                </View>

                <TouchableHighlight activeOpacity={0.6} style={{position:'absolute',left:50,bottom:5}} underlayColor={'rgba(255,255,255,0.1)'}
                  onPress={()=>
                      {
                        this.clickPickerMessage();
                      }
                    }>
                    <View style={{alignItems:'center'}}>
                        <Image resizeMode={Image.resizeMode.center} source={require('../../common/Images/star_btn@3x.png')} style={{width:40,height:40}}/>
                    </View>
                </TouchableHighlight>


              </View>
              );
            }
      }
      else {

        if (this.state.messageList[i].type == 0)
        {

          if (i < this.state.messageList.length - 1 && this.state.messageList[i + 1].from == 1)
          {
            messageViews.push(
              <View key={this.state.messageList[i].id} style={{}}>
                <View key={this.state.messageList[i].id} style={{flexDirection:'row',alignItems:'flex-end',justifyContent:'flex-start',marginLeft:20}}>
                  <View style={{minHeight:49,backgroundColor:'rgb(231,230,230)',borderRadius:14,padding:15,marginRight:50,flexWrap:'wrap'}}>
                    <Text style={[CommonStyles.book,{color:'rgb(106,100,100)'}]}>{this.state.messageList[i].message}</Text>
                  </View>
                </View>
                <View style={{flexDirection:'row',marginLeft:40}}>
                  <Image resizeMode={Image.resizeMode.stretch} source={require('../../common/Images/dialog_joint2@3x.png')} style={{width:19,height:5,marginRight:3}}/>
                </View>
              </View>
            );
          }
          else {
            messageViews.push(
              <View key={this.state.messageList[i].id} style={{}}>
                <View key={this.state.messageList[i].id} style={{flexDirection:'row',alignItems:'flex-end',justifyContent:'flex-start'}}>
                  <Image resizeMode={Image.resizeMode.stretch} source={require('../../common/Images/chat_message_icon_talk1.png')} style={{width:8,height:14,marginLeft:15,marginBottom:10}}/>
                  <View style={{minHeight:40,backgroundColor:'rgb(231,230,230)',borderRadius:14,padding:15,marginLeft:-1,marginRight:50,flexWrap:'wrap'}}>
                    <Text style={[CommonStyles.book,{color:'rgb(106,100,100)'}]}>{this.state.messageList[i].message}</Text>
                  </View>
                </View>
                <View style={{flexDirection:'row',height:20,marginLeft:30,marginTop:5}}>
                  <Image resizeMode={Image.resizeMode.stretch} source={require('../../common/Images/tick@3x.png')} style={{marginTop:5,width:12,height:10,marginRight:3}}/>
                  <Text style={[CommonStyles.book,{color:'rgb(142,142,142)',fontSize:12}]}>11:57am</Text>
                </View>
              </View>
            );
          }
        }
        else if (this.state.messageList[i].type == 1)
        {
          messageViews.push(
            <View key={this.state.messageList[i].id} style={{alignItems:'flex-end',justifyContent:'flex-end',marginTop:10}}>
              <View  style={{flexDirection:'row',alignItems:'flex-end',justifyContent:'flex-end',marginTop:10}}>
                <View style={{minHeight:40,backgroundColor:'rgb(243,145,28)',borderRadius:5,flexWrap:'wrap',padding:10,marginLeft:50,alignItems:'center'}}>
                  <Image resizeMode={Image.resizeMode.stretch} source={{uri:this.state.messageList[i].uri,width:imageMessageWidth70,height:imageMessageWidth33}}/>
                </View>
                <Image resizeMode={Image.resizeMode.stretch} source={require('../../common/Images/chat_message_icon_talk.png')} style={{width:12,height:10,marginBottom:10,marginRight:10}}/>
              </View>
              <View style={{flexDirection:'row',height:20,marginRight:30,marginTop:5}}>
                <Text style={[CommonStyles.book,{color:'rgb(142,142,142)',fontSize:12}]}>11:57am</Text>
                <Image resizeMode={Image.resizeMode.stretch} source={require('../../common/Images/tick@3x.png')} style={{marginTop:5,width:12,height:10,marginBottom:10,marginLeft:3}}/>
              </View>
            </View>
          );
        }
        else if (this.state.messageList[i].type == 2)
        {
          messageViews.push(
            <View key={this.state.messageList[i].id} style={{}}>
              <View key={this.state.messageList[i].id} style={{flexDirection:'row',alignItems:'flex-end',justifyContent:'flex-start'}}>
                <Image resizeMode={Image.resizeMode.stretch} source={require('../../common/Images/chat_message_icon_talk1.png')} style={{width:8,height:14,marginLeft:15,marginBottom:10}}/>
                <View style={{minHeight:40,backgroundColor:'rgb(231,230,230)',borderRadius:14,paddingTop:15,paddingLeft:15,paddingRight:15,paddingBottom:25,marginRight:50,flexWrap:'wrap'}}>
                  <Text style={[CommonStyles.medium16,{color:'rgb(106,100,100)',fontWeight:'bold',fontSize:16}]}>Schedule Planner</Text>
                  <View style={{height:1,backgroundColor:'rgb(106,100,100)'}}/>
                  <Text style={[CommonStyles.book,{color:'rgb(106,100,100)',marginTop:5,fontSize:14}]}>Weekend Starter training at the beach | 2 hours session (AEST)
                    {"\n"} - Sat, 08 Nov   09:00 AM
                    {"\n"} - Sat, 08 Nov   09:00 AM
                    {"\n"} - Sat, 08 Nov   09:00 AM
                    {"\n"} - Sat, 08 Nov   09:00 AM
                  </Text>
                </View>
              </View>
              <View style={{flexDirection:'row',height:20,marginLeft:30,marginTop:5}}>
                <Image resizeMode={Image.resizeMode.stretch} source={require('../../common/Images/tick@3x.png')} style={{marginTop:5,width:12,height:10,marginRight:3}}/>
                <Text style={[CommonStyles.book,{color:'rgb(142,142,142)',fontSize:12}]}>11:57am</Text>
              </View>
              <TouchableHighlight activeOpacity={0.6} style={{position:'absolute',right:50,bottom:5}} underlayColor={'rgba(255,255,255,0.1)'}
                onPress={()=>
                    {
                      this.clickPickerMessage();
                    }
                  }>
                  <View style={{alignItems:'center'}}>
                      <Image resizeMode={Image.resizeMode.center} source={require('../../common/Images/calendar_btn@3x.png')} style={{width:40,height:40}}/>
                  </View>
              </TouchableHighlight>
            </View>
          );
        }
        else if (this.state.messageList[i].type == 3)
        {
          messageViews.push(
            <View key={this.state.messageList[i].id} style={{}}>
              <View key={this.state.messageList[i].id} style={{flexDirection:'row',alignItems:'flex-end',justifyContent:'flex-start'}}>
                <Image resizeMode={Image.resizeMode.stretch} source={require('../../common/Images/chat_message_icon_talk1.png')} style={{width:8,height:14,marginLeft:15,marginBottom:10}}/>
                <View style={{minHeight:40,backgroundColor:'rgb(231,230,230)',borderRadius:14,paddingTop:15,paddingLeft:15,paddingRight:15,paddingBottom:25,marginRight:50,flexWrap:'wrap'}}>
                  <Text style={[CommonStyles.medium16,{color:'rgb(106,100,100)',fontWeight:'bold',fontSize:16}]}>Invoice INV-001</Text>
                  <View style={{height:1,backgroundColor:'rgb(106,100,100)'}}/>
                  <Text style={[CommonStyles.book,{color:'rgb(106,100,100)',fontSize:14}]}>Weekend Starter training at the beach | 2 hours session (AEST)
                    {"\n"} - 4  X $30/hr     (Inc. GST)        Total $120.00
                  </Text>
                </View>
              </View>
              <View style={{flexDirection:'row',height:20,marginLeft:30,marginTop:5}}>
                <Image resizeMode={Image.resizeMode.stretch} source={require('../../common/Images/tick@3x.png')} style={{marginTop:5,width:12,height:10,marginRight:3}}/>
                <Text style={[CommonStyles.book,{color:'rgb(142,142,142)',fontSize:12}]}>11:57am</Text>
              </View>
              <TouchableHighlight activeOpacity={0.6} style={{position:'absolute',right:50,bottom:5}} underlayColor={'rgba(255,255,255,0.1)'}
                onPress={()=>
                    {
                      this.clickPickerMessage();
                    }
                  }>
                  <View style={{alignItems:'center'}}>
                      <Image resizeMode={Image.resizeMode.center} source={require('../../common/Images/money_btn@3x.png')} style={{width:40,height:40}}/>
                  </View>
              </TouchableHighlight>
            </View>
          );
        }
        else if (this.state.messageList[i].type == 4)
        {
          messageViews.push(
            <View key={this.state.messageList[i].id} style={{alignItems:'flex-end',justifyContent:'flex-end',marginTop:10}}>
              <View  style={{flexDirection:'row',alignItems:'flex-end',justifyContent:'flex-end',marginTop:10}}>
                <View style={{minHeight:40,backgroundColor:'rgb(243,145,28)',borderRadius:5,flexWrap:'wrap',padding:10,marginLeft:50}}>
                <Text style={[CommonStyles.medium16,{color:'white',fontWeight:'bold'}]}>Refund INV-0001</Text>
                <View style={{height:1,backgroundColor:'white'}}/>
                <Text style={[CommonStyles.book,{color:'white'}]}>Total/Partial $120 has been Refunded. You can see “More Options” in transaction details.
                  {"\n"}{"\n"}Reason: weather has turned bad.Had to cancel the class.
                </Text>
                </View>
                <Image resizeMode={Image.resizeMode.stretch} source={require('../../common/Images/chat_message_icon_talk.png')} style={{width:12,height:10,marginBottom:10,marginRight:10}}/>
              </View>
              <View style={{flexDirection:'row',height:20,marginRight:30}}>
                <Text style={[CommonStyles.book,{color:'rgb(142,142,142)',fontSize:12}]}>11:57am</Text>
                <Image resizeMode={Image.resizeMode.stretch} source={require('../../common/Images/tick@3x.png')} style={{marginTop:5,width:12,height:10,marginBottom:10,marginLeft:3}}/>
              </View>
            </View>
            );
          }
          else if (this.state.messageList[i].type == 5)
          {
            messageViews.push(
              <View key={this.state.messageList[i].id} style={{alignItems:'flex-end',justifyContent:'flex-end',marginTop:10}}>
                <View  style={{flexDirection:'row',alignItems:'flex-end',justifyContent:'flex-end',marginTop:10}}>
                  <View style={{minHeight:40,backgroundColor:'rgb(243,145,28)',borderRadius:5,flexWrap:'wrap',paddingTop:15,paddingLeft:15,paddingRight:15,paddingBottom:25,arginLeft:50}}>
                  <Text style={[CommonStyles.medium16,{color:'white',fontWeight:'bold'}]}>Job Completed</Text>
                  <View style={{height:1,backgroundColor:'white'}}/>
                  <Text style={[CommonStyles.book,{color:'white'}]}>Awesome customer! Always a Please to work with!
                  </Text>
                  </View>
                  <Image resizeMode={Image.resizeMode.stretch} source={require('../../common/Images/chat_message_icon_talk.png')} style={{width:12,height:10,marginBottom:10,marginRight:10}}/>
                </View>
                <View style={{flexDirection:'row',height:20,marginRight:30}}>
                  <Text style={[CommonStyles.book,{color:'rgb(142,142,142)',fontSize:12}]}>11:57am</Text>
                  <Image resizeMode={Image.resizeMode.stretch} source={require('../../common/Images/tick@3x.png')} style={{marginTop:5,width:12,height:10,marginBottom:10,marginLeft:3}}/>
                </View>
              </View>
              );
            }



      }
    }
    return (
      <View style={{flexWrap: "wrap",marginBottom:10}}>
      {
        messageViews
      }
      </View>
    );
  }
  renderMenu()
  {
    if (this.state.menuVisible)
    {
      return(
        <View>
          <View style={{height:1,backgroundColor:'rgb(217,217,217)'}}/>
          <View style={{height:200}}>
            <View style={{flexDirection:'row',height:100}}>
                <TouchableHighlight activeOpacity={0.6} style={{flex:1,alignItems:'center',justifyContent:'center'}} underlayColor={'rgba(255,255,255,0.1)'}
                  onPress={()=>
                      {
                        this.clickPickerMessage();
                      }
                    }>
                    <View style={{alignItems:'center'}}>
                        <Image resizeMode={Image.resizeMode.center} source={require('../../common/Images/chat_menu_camera.png')} style={{width:40,height:40}}/>
                        <Text style={[CommonStyles.book,{color:'rgb(243,145,28)'}]}>Photo</Text>
                    </View>
                </TouchableHighlight>

                <TouchableHighlight activeOpacity={0.6} style={{flex:1,alignItems:'center',justifyContent:'center'}} underlayColor={'rgba(255,255,255,0.1)'}
                  onPress={()=>
                      {
                        this.clickCameraMessage();
                      }
                    }>
                    <View style={{alignItems:'center'}}>
                        <Image resizeMode={Image.resizeMode.center} source={require('../../common/Images/chat_menu_image.png')} style={{width:40,height:40}}/>
                        <Text style={[CommonStyles.book,{color:'rgb(243,145,28)'}]}>Camera</Text>
                    </View>
                </TouchableHighlight>
                <TouchableHighlight activeOpacity={0.6} style={{flex:1,alignItems:'center',justifyContent:'center'}} underlayColor={'rgba(255,255,255,0.1)'}
                  onPress={()=>
                      this.props.navigator.pop()
                    }>
                    <View style={{alignItems:'center'}}>
                        <Image resizeMode={Image.resizeMode.center} source={require('../../common/Images/chat_menu_schedule.png')} style={{width:40,height:40}}/>
                        <Text style={[CommonStyles.book,{color:'rgb(243,145,28)'}]}>Schedule</Text>
                    </View>
                </TouchableHighlight>
                <TouchableHighlight activeOpacity={0.6} style={{flex:1,alignItems:'center',justifyContent:'center'}} underlayColor={'rgba(255,255,255,0.1)'}
                  onPress={()=>
                      this.props.navigator.pop()
                    }>
                    <View style={{alignItems:'center'}}>
                        <Image resizeMode={Image.resizeMode.center} source={require('../../common/Images/chat_menu_referral.png')} style={{width:40,height:40}}/>
                        <Text style={[CommonStyles.book,{color:'rgb(243,145,28)'}]}>Referral</Text>
                    </View>
                </TouchableHighlight>
            </View>

            <View style={{flexDirection:'row',height:100}}>
                <TouchableHighlight activeOpacity={0.6} style={{flex:1,alignItems:'center',justifyContent:'center'}} underlayColor={'rgba(255,255,255,0.1)'}
                  onPress={()=>
                      this.props.navigator.pop()
                    }>
                    <View style={{alignItems:'center'}}>
                        <Image resizeMode={Image.resizeMode.center} source={require('../../common/Images/chat_menu_invoice.png')} style={{width:40,height:40}}/>
                        <Text style={[CommonStyles.book,{color:'rgb(243,145,28)'}]}>Invoice</Text>
                    </View>
                </TouchableHighlight>

                <TouchableHighlight activeOpacity={0.6} style={{flex:1,alignItems:'center',justifyContent:'center'}} underlayColor={'rgba(255,255,255,0.1)'}
                  onPress={()=>
                      this.props.navigator.pop()
                    }>
                    <View style={{alignItems:'center'}}>
                        <Image resizeMode={Image.resizeMode.center} source={require('../../common/Images/chat_menu_star.png')} style={{width:40,height:40}}/>
                        <Text style={[CommonStyles.book,{color:'rgb(243,145,28)'}]}>Feedback</Text>
                    </View>
                </TouchableHighlight>

                <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>

                </View>
                <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>

                </View>
            </View>

          </View>
        </View>
      )
    }
  }
  render() {
    var offset = 0;
    return (
      <View style={{flex:1}}>
          <Image resizeMode={Image.resizeMode.stretch} source={require('../../common/Images/bg2.png')} style={{width:windowWidth,height:windowHeight,position:'absolute'}}/>
          <View style={{flex:1}}>
                <View style={{flexDirection:'row',height:50,alignItems:'center'}}>
                  <TouchableHighlight style={{marginLeft:15}} activeOpacity={0.6} underlayColor={'rgba(255,255,255,0.1)'}
                    onPress={()=>
                        this.props.navigator.pop()
                      }>
                      <Image resizeMode={Image.resizeMode.stretch} source={require('../../common/Images/backIcon@2x.png')} style={{width:10,height:20}}/>
                  </TouchableHighlight>
                  <Image resizeMode={Image.resizeMode.cover} source={require('../../common/Images/dogtrain.jpg')} style={{width:25,height:25,borderRadius:15,marginLeft:20}}/>
                  <Text style={[CommonStyles.book,{marginLeft:10,color:'rgb(106,100,100)',flex:1,fontSize:15}]}>Marilyn Wedge</Text>
                  <SimpleLineIcons name="options-vertical" size={18} color='#605A5A' style={{marginRight:10}} />
                </View>
                <View style={{height:1,backgroundColor:'rgb(217,217,217)'}}/>
                <View style={{flex:1}}>
                <ScrollView style={{paddingTop:10}}>
                {
                  this.renderMessages()
                }
                </ScrollView>
                </View>
                <View style={{height:1,backgroundColor:'rgb(217,217,217)'}}/>
                <View style={{height:50,  flexDirection:'row',alignItems:'center'}}>
                    <TouchableHighlight style={{marginLeft:10}} activeOpacity={0.6} underlayColor={'rgba(255,255,255,0.1)'}
                      onPress={()=> {this.clickMenu();}}>
                        <Image resizeMode={Image.resizeMode.stretch} source={require('../../common/Images/plus2@3x.png')} style={{width:28,height:28}}/>
                    </TouchableHighlight>
                    <View style={{flexDirection:'row',flex:1,alignItems:'center'}}>
                      <Image resizeMode={Image.resizeMode.stretch} source={require('../../common/Images/dialog_input_left@4x.png')} style={{width:2,height:40,marginLeft:5}}/>
                      <Image resizeMode={Image.resizeMode.stretch} source={require('../../common/Images/dialog_input_span@4x.png')} style={{flex:1,height:40}}/>
                      <Image resizeMode={Image.resizeMode.stretch} source={require('../../common/Images/dialog_input_right@4x.png')} style={{width:9,height:40}}/>
                      <View style={{position:'absolute',flex:1,left:10,right:10,alignItems:'center',flexDirection:'row'}}>
                        <TextInput underlineColorAndroid='transparent' selectionColor='rgb(243,145,28)' style={{fontSize:16,flex:1}} placeholder="Write a message..."></TextInput>
                      </View>
                    </View>

                    <TouchableHighlight style={{marginLeft:5,marginRight:10}} activeOpacity={0.6} underlayColor={'rgba(255,255,255,0.1)'}
                      onPress={()=>
                          this.props.navigator.pop()
                        }>
                        <Image resizeMode={Image.resizeMode.stretch} source={require('../../common/Images/chat_send.png')} style={{width:35,height:35}}/>
                    </TouchableHighlight>
                </View>
                {
                  this.renderMenu()
                }
          </View>
      </View>
    );
  }
}
AppRegistry.registerComponent('MomentView', () => MomentView);
