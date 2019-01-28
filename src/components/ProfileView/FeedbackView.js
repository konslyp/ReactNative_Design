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

export default class FeedbackView extends Component {

  static navigatorStyle = {
        tabBarHidden: true,
        navBarHidden:true
  };
  state = {
    dataSource: ds.cloneWithRows([{name:'Jackson',comment:'Duis mollis sagittsdfksld! Duis mollis sagittsdfksld! Duis mollis sagittsdfksld! Duis mollis sagittsdfksld!',reply:[{name:'John',comment:'Very good'},{name:'John',comment:'Very good'}]}, {name:'Jackson',comment:'Dummy Test for comment.',reply:[]},{name:'Jackson',comment:'Duis mollis sagittsdfksld',reply:[{name:'John',comment:'Very good'}]}]),
    bioCharacters:"0/100 characters",
    bioHeight:50
  };

  _renderRow(rowData) {

    var cellHeight= 80;
    var cellRating = 4.3;
    let cellStarViews = [];
    for(let j=1;j <= cellRating; j++) {
         cellStarViews.push(
             <Image key={j} resizeMode={Image.resizeMode.cover} source={require('../../common/Images/starfull.png')} style={Styles.imgStar}/>
         )
    }
    for(let j=cellRating;j < 5; j++) {
         cellStarViews.push(
             <Image key={j} resizeMode={Image.resizeMode.cover} source={require('../../common/Images/starempty.png')} style={Styles.imgStar}/>
         )
    }

    return (
      <Animated.View style={{backgroundColor:'white',padding:15}}>
          <Text style={[CommonStyles.medium12,{fontWeight:'bold'}]}>Take my dog for a walk everyday,Tuesday for a month</Text>
          <View style={{flexDirection:'row',marginTop:5}}>
            <Image resizeMode={Image.resizeMode.cover} source={require('../../common/Images/dogtrain_thumb.png')} style={{width:44,height:44,borderRadius:22}}/>
            <View>
              <View flexDirection='row' style={{alignItems:'center',marginLeft:10,marginRight:10}}>
                  {cellStarViews}
              </View>
              <Text style={{marginLeft:10,marginRight:10,marginTop:8,paddingRight:12}}>
                <Text style={[CommonStyles.medium12,{fontWeight:'bold',marginLeft:5}]}>Selly:  </Text>
                <Text numberOfLines={5} style={[CommonStyles.medium12,{marginLeft:10,color:'rgb(142,142,142)',fontStyle :'italic',marginRight:5}]}>
                  {rowData.comment}
                </Text>
              </Text>
            </View>
          </View>
          <Text style={[CommonStyles.medium12,{flex:1,textAlign:'right',marginTop:10,color:'rgb(142,142,142)',marginRight:5}]}>
            Reply
          </Text>
      </Animated.View>
    );
  };

  getStarViews(rate)
  {
    let views = [];
    for(let j=1;j <= rate; j++) {
         views.push(
             <Image key={j} resizeMode={Image.resizeMode.cover} source={require('../../common/Images/starfull_gray.png')} style={Styles.imgStarMedium}/>
         )
    }
    for(let j=rate;j < 5; j++) {
         views.push(
             <Image key={j} resizeMode={Image.resizeMode.cover} source={require('../../common/Images/starempty_gray.png')} style={Styles.imgStarMedium}/>
         )
    }
    return views;
  };

  render() {
    var offset = 0;
    var starRating = 4.3;
    let views = [];
    let timeViews = this.getStarViews(3.7);
    for(let j=1;j <= starRating; j++) {
         views.push(
             <Image key={j} resizeMode={Image.resizeMode.cover} source={require('../../common/Images/starfull.png')} style={Styles.imgStarLarge}/>
         )
    }
    for(let j=starRating;j < 5; j++) {
         views.push(
             <Image key={j} resizeMode={Image.resizeMode.cover} source={require('../../common/Images/starempty.png')} style={Styles.imgStarLarge}/>
         )
    }


    return (
      <View style={{flex:1}}>
          <View>
            <Text style={{color:'rgb(106,100,100)',fontSize:15,width:windowWidth,textAlign:'center',marginTop:15}}>Rating</Text>
            <TouchableHighlight style={Styles.imgTopLeft} activeOpacity={0.6} underlayColor={'rgba(255,255,255,0.1)'}
              onPress={()=>
                  this.props.navigator.pop()
                }>
                <Image resizeMode={Image.resizeMode.stretch} source={require('../../common/Images/backIcon@2x.png')} style={{width:10,height:20}}/>
            </TouchableHighlight>
          </View>
          <View style={{marginTop:10,height:1,backgroundColor:'rgb(217,217,217)'}}/>
          <View style={{alignItems:'center',backgroundColor:'white'}}>
              <View style={{marginTop:10,alignItems:'center',justifyContent:'center'}}>
                <View style={{flexDirection:'row'}}>
                  { views }
                </View>
                <Text style={[CommonStyles.book,{marginTop:10,fontSize:18,color:'rgb(108,108,108)'}]}>Rating 4.5 based on 350 reviews</Text>
              </View>
          </View>
          <View>
            <View style={{height:1,marginTop:10,backgroundColor:'rgb(217,217,217)'}}/>
            <View style={{flexDirection:'row',alignItems:'center',padding:10}}>
              { timeViews }
              <Text style={[CommonStyles.book,{marginLeft:10}]}> On Time / Efficient</Text>
            </View>
            <View style={{height:1,backgroundColor:'rgb(217,217,217)'}}/>
            <View style={{flexDirection:'row',alignItems:'center',padding:10}}>
              { timeViews }
              <Text style={[CommonStyles.book,{marginLeft:10}]}> Knowledgeable / Effective</Text>
            </View>
            <View style={{height:1,backgroundColor:'rgb(217,217,217)'}}/>
            <View style={{flexDirection:'row',alignItems:'center',padding:10}}>
              { timeViews }
              <Text style={[CommonStyles.book,{marginLeft:10}]}> Responsible / Positive</Text>
            </View>
            <View style={{height:1,backgroundColor:'rgb(217,217,217)'}}/>
            <View style={{flexDirection:'row',alignItems:'center',padding:10}}>
              { timeViews }
              <Text style={[CommonStyles.book,{marginLeft:10}]}> Good Customer</Text>
            </View>
          </View>
          <View style={{padding:10,marginTop:10,backgroundColor:'rgb(244,244,244)'}}>
            <Text style={CommonStyles.medium16}>Recent Reviews</Text>
          </View>
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
      </View>
    );
  }
}
AppRegistry.registerComponent('MomentView', () => MomentView);
