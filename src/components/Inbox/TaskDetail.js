import React, { Component } from 'react';

import {
  View,
  Text,
  ScrollView,
  TextInput,
  Image,
  Keyboard,
  Platform,
  TouchableHighlight,
  Dimensions,
  Animated
} from 'react-native';


import PropTypes from 'prop-types';

import Styles from './styles';

import CommonStyle from '../../common/CommonStyle';

import IconSimpleLine from 'react-native-vector-icons/SimpleLineIcons';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import IconFontAwesome from 'react-native-vector-icons/FontAwesome';

import Rating from '../../common/Rating';

const windowWidth = Dimensions.get('window').width;

export default class TaskDetail extends Component {
    constructor(props) {
       super(props);
    }

    state = {
        offerOpacity:new Animated.Value(1),
        acceptedOpacity:new Animated.Value(1),
        marginOffer:new Animated.Value(0),
        marginAccept:new Animated.Value(0),
        viewOpacity:new Animated.Value(1),
        textList1:"Offering List(56)",
        textList2:"Accepted List",
        currentList:0
    };


    changeTextWithFade()
    {
      // this.setState(
      //   {
      //     offerOpacity:0,
      //     textList1:"Accepted List"
      //   }
      // );

      if (this.state.currentList == 0)
      {
        Animated.sequence([
        Animated.parallel([
          Animated.timing(          // Uses easing functions
            this.state.marginOffer,    // The value to drive
            {
              toValue: 40,
              duration: 800
            }
          ),
          Animated.timing(          // Uses easing functions
            this.state.marginAccept,    // The value to drive
            {
              toValue: -80,
              duration: 800
            }
          ),
          Animated.sequence([
            Animated.timing(
              this.state.acceptedOpacity,    // The value to drive
              {
                toValue: 0,
                duration: 400
              }
            ),
            Animated.timing(
              this.state.acceptedOpacity,    // The value to drive
              {
                toValue: 1,
                duration: 400
              }
            ),
          ])
        ]),
        Animated.sequence([
          Animated.timing(
            this.state.viewOpacity,    // The value to drive
            {
              toValue: 0,
              duration: 200
            }
          ),
          Animated.timing(
            this.state.viewOpacity,    // The value to drive
            {
              toValue: 1,
              duration: 200
            }
          ),
        ])
      ]).start();
        this.setState(
          {
            currentList:1
          }
        );
      }
      else {
        Animated.sequence([
        Animated.parallel([
          Animated.timing(          // Uses easing functions
            this.state.marginOffer,    // The value to drive
            {
              toValue: 0,
              duration: 800
            }
          ),
          Animated.timing(          // Uses easing functions
            this.state.marginAccept,    // The value to drive
            {
              toValue: 0,
              duration: 800
            }
          ),
          Animated.sequence([
            Animated.timing(
              this.state.offerOpacity,    // The value to drive
              {
                toValue: 0,
                duration: 400
              }
            ),
            Animated.timing(
              this.state.offerOpacity,    // The value to drive
              {
                toValue: 1,
                duration: 400
              }
            ),
          ])

        ]),
        Animated.sequence([
          Animated.timing(
            this.state.viewOpacity,    // The value to drive
            {
              toValue: 0,
              duration: 200
            }
          ),
          Animated.timing(
            this.state.viewOpacity,    // The value to drive
            {
              toValue: 1,
              duration: 200
            }
          ),
        ])
      ]).start();
        this.setState(
          {
            currentList:0
          }
        );
      }


    }
    renderPeoples()
    {
      let messageViews = [];

      messageViews.push(
        <View key={0} style={{flexDirection:'row',marginTop:10,marginBottom:10,alignItems:'center'}}>
          <View style={{marginLeft:20,height:1,backgroundColor:'#D6D6D6',flex:1}}/>
          <Text style={{color:'rgb(186,186,186)',marginLeft:10,marginRight:10}}>Today</Text>
          <View style={{height:1,backgroundColor:'#D6D6D6',flex:1,marginRight:20}}/>
        </View>
      );
    }
    render(){
       return(
            <View>
                <ScrollView>
                        <View style={Styles.titleInputWrapper}>
                            <View style={Styles.detailWrapper}>
                                <Text numberOfLines={1} style={[CommonStyle.titleGrey,{fontSize:18}]}> Need help with my  dog behaviour screen </Text>
                            </View>
                            <View style={Styles.detailWrapper}>
                                <View style={Styles.calendarWrapper}>
                                    <IconSimpleLine name="calendar" size={20} style={Styles.contentBody} />
                                    <Text style={Styles.contentBody}> 29 January 2017</Text>
                                </View>
                                <View style={Styles.calendarWrapper} >
                                    <IconSimpleLine name="location-pin" size={20} style={Styles.contentBody} />
                                    <Text style={Styles.locationPathBody} numberOfLines = {1}> North Melbourne </Text>
                                </View>
                            </View>
                        </View>
                        <View style={Styles.borderTopContainer}>
                            <View style={[Styles.titleInputWrapper, Styles.labelWrapper,Styles.paddingTopChange]}>
                                <View style={[Styles.myTaskContainer,{height:50}]}>
                                    <Animated.View style={{marginTop:this.state.marginOffer,opacity:this.state.offerOpacity,backgroundColor:'transparent'}}>
                                      <TouchableHighlight activeOpacity={0.6} underlayColor={'rgba(255,255,255,0.1)'}
                                        onPress={()=>
                                          {
                                            this.changeTextWithFade();
                                          }
                                        }>

                                            <Text style={{fontWeight:'bold', fontSize: 16}}>{this.state.textList1}</Text>

                                      </TouchableHighlight>
                                    </Animated.View>

                                    <Animated.View style={{marginTop:this.state.marginAccept,opacity:this.state.acceptedOpacity,backgroundColor:'transparent'}}>
                                    <TouchableHighlight activeOpacity={0.6} underlayColor={'rgba(255,255,255,0.1)'}
                                      onPress={()=>
                                        {
                                          this.changeTextWithFade();
                                        }
                                      }>

                                          <Text style={{fontWeight:'bold', fontSize: 16, paddingTop:20}}>{this.state.textList2}</Text>

                                    </TouchableHighlight>
                                    </Animated.View>



                                </View>
                                <View style={{width: 20}}>
                                    <Text style={[Styles.redPoint, Styles.changeRedPoint]}></Text>
                                    <IconFontAwesome name="bell-slash-o" size ={20}/>
                                </View>
                                <View style={{width:20}}>
                                    <Text style={[Styles.myTaskContent,{marginTop: 5,justifyContent:'flex-end'}]}> 3</Text>
                                </View>
                            </View>
                        </View>

                        <Animated.View style={{opacity:this.state.viewOpacity,backgroundColor:'transparent'}}>

                        <View>
                            <Text style={{fontSize: 16 , position:'absolute', top:0, left :13, zIndex:100, width :50, backgroundColor: 'white'}}>Design</Text>
                        </View>
                        <View style={[Styles.borderTopContainer,{marginTop:10}]}>
                            <View style={[Styles.titleInputWrapper, Styles.labelWrapper,Styles.paddingTopChange]}>
                                 <View style={{marginTop :10}}>
                                     <Image style={Styles.taskThreadImageView} source={require('./img/avatar1.png')} />
                                 </View>
                                 <View style={Styles.taskThreadWidth}>
                                       <Text numberOfLines={1} style={[CommonStyle.mediumTitleText,{fontSize:16, fontWeight: 'bold'}]}>Aeirth Gainsburrough</Text>
                                       <Text style={{paddingTop:10}}>Hi Maryln Wedge I want to make your offer </Text>
                                       <View style={[Styles.labelWrapper, Styles.taskThreadContainer]}>
                                        <View style={{width :70}}>
                                        <Rating
                                           total={5}
                                           rating={5}
                                           size={18}
                                           color={Styles.THEME_COLOR.color}
                                         />
                                         </View>
                                         <View style={{marginLeft: 10}}>
                                            <Text style={Styles.ratingText}>106 | 83%</Text>
                                         </View>
                                       </View>
                                 </View>
                                 <View style={Styles.myTaskTimeContainer}>
                                      <Text style={Styles.myTaskTime}>11:59AM</Text>
                                      <Text style={Styles.myTaskContent}> 3</Text>
                                 </View>
                            </View>
                        </View>
                        <View style={Styles.borderTopContainer}>
                            <View style={[Styles.titleInputWrapper, Styles.labelWrapper,Styles.paddingTopChange]}>
                                <View style={{marginTop :10}}>
                                     <Image style={Styles.taskThreadImageView} source={require('./img/avatar2.png')} />
                                 </View>
                                 <View style={Styles.taskThreadWidth}>
                                       <Text numberOfLines={1} style={[CommonStyle.mediumTitleText,{fontSize:16, fontWeight: 'bold'}]}>Zidane Tribel</Text>
                                       <Text style={{paddingTop:10}}>Hi I can get this done for you.</Text>
                                       <View style={[Styles.labelWrapper, Styles.taskThreadContainer]}>
                                        <View style={{width :70}}>
                                        <Rating
                                           total={5}
                                           rating={4}
                                           size={18}
                                           color={Styles.THEME_COLOR.color}
                                         />
                                         </View>
                                         <View style={{marginLeft: 10}}>
                                            <Text style={Styles.ratingText}>1.2k | 83%</Text>
                                         </View>
                                       </View>
                                 </View>
                                 <View style={Styles.myTaskTimeContainer}>
                                      <Text style={Styles.myTaskTime}>Yesterday</Text>
                                      <View>
                                        <Text style={Styles.myTaskContent}> 3</Text>
                                        <Icon name='alert' style={Styles.iconAlert} size= {15}/>
                                      </View>
                                 </View>
                            </View>
                        </View>
                        <View>
                            <Text style={{fontSize: 16 , position:'absolute', top:-11, left :13, zIndex:100, width :78, backgroundColor: 'white'}}>Marketing</Text>
                        </View>
                        <View style={Styles.borderTopContainer}>
                            <View style={[Styles.titleInputWrapper, Styles.labelWrapper,Styles.paddingTopChange]}>
                                 <View style={{marginTop :10}}>
                                     <Image style={Styles.taskThreadImageView} source={require('./img/avatar4.png')} />
                                 </View>
                                 <View style={Styles.taskThreadWidth}>
                                       <Text numberOfLines={1} style={[CommonStyle.mediumTitleText,{fontSize:16, fontWeight: 'bold'}]}>Selphie  Timitt</Text>
                                       <Text style={{paddingTop:10}}>Hi lets get this done .I can offer </Text>
                                       <View style={[Styles.labelWrapper, Styles.taskThreadContainer]}>
                                        <View style={{width :70}}>
                                        <Rating
                                           total={5}
                                           rating={3}
                                           size={18}
                                           color={Styles.THEME_COLOR.color}
                                         />
                                         </View>
                                         <View style={{marginLeft: 10}}>
                                            <Text style={Styles.ratingText}>5  | 83%</Text>
                                         </View>
                                       </View>
                                 </View>
                                 <View style={Styles.myTaskTimeContainer}>
                                      <Text style={Styles.myTaskTime}>11:59AM</Text>
                                      <Text style={{marginTop: 10}}>  <Icon name='alert' style={Styles.iconAlert} size= {20}/></Text>
                                 </View>
                            </View>
                        </View>
                        </Animated.View>

                </ScrollView>
            </View>
       );
    }
}
