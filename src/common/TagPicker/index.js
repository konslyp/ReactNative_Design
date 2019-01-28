import React, {
  PureComponent,
  PropTypes
} from 'react';
import {
  Text,
  View,
  Image,
  TouchableHighlight,
  TouchableOpacity,
  TextInput,
  ListView,
  Modal,
  Dimensions
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Styles from './styles';

import PropsTypes from 'prop-types';

const windowWidth = Dimensions.get('window').width;


import CommonStyles from '../CommonStyle';

export default class TagPicker extends PureComponent {


    static propTypes = {
      tagList: PropsTypes.array,
      popList:PropsTypes.array
    }

    constructor(props) {
      super(props);
      const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
      this.state = {
        selectTags:[],
        openTypeTagModal: false,
        searchResult:this.props.popList,
        showPopular:true,
        dataSource: ds.cloneWithRows(this.props.popList),
      };

      // this.onCheck = this.onCheck.bind(this);
      // this.pickImage = this.pickImage.bind(this);
      // this.selectPhotoToEdit = this.selectPhotoToEdit.bind(this);
      // this.confirm = this.confirm.bind(this);
    }

    changeTagText(text)
    {
      const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
      if (text == '')
      {
        this.setState(
          {
            showPopular:true,
            dataSource:ds.cloneWithRows(this.props.popList)
          }
        )
        return;
      }
      let result = [];
      for (let i = 0; i < this.props.tagList.length;i++)
      {
        if (this.props.tagList[i].indexOf(text) > -1)
        {
             result.push(this.props.tagList[i]);
        }
      }
      this.setState(
        {
          showPopular:false,
          searchResult:result,
          dataSource:ds.cloneWithRows(result)
        }
      );

    }
    renderItemTag(rowData)
    {
      return (
        <TouchableOpacity activeOpacity={0.6} underlayColor={'white'}
          onPress={() => {
            this.itemClicked(rowData)
          }}>
          <View>
            <View style={{height:1,backgroundColor:'rgb(217,217,217)'}}/>
            <Text style={{flex:1,paddingLeft:10,paddingRight:10,paddingTop:10,paddingBottom:10}}>{rowData}</Text>
          </View>
        </TouchableOpacity>
      );
    }
    clearPop()
    {
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.setState(
        {
          searchResult:[],
          dataSource:ds.cloneWithRows([])
        }
      );
    }
    itemClicked(rowData)
    {
      for (let i = 0;i < this.state.selectTags.length;i++)
      {
        if (this.state.selectTags[i] == rowData)
        {
          alert('You already selected this tag.');
          return;
        }
      }
      this.state.selectTags.push(rowData);
      this.setState({
        openTypeTagModal:false
      });
    }
    removeTag(index)
    {
      let selTags = [...this.state.selectTags];
      selTags.splice(index, 1);
      this.setState(
        {selectTags: selTags}
      );
    }
    renderSelectedTags()
    {
      let tagViews = [];
      for (let i = 0;i < this.state.selectTags.length;i++)
      {
          tagViews.push(
            <View key={this.state.selectTags[i]} style={Styles.interestViewContainer}>
              <TouchableOpacity activeOpacity={0.6} underlayColor={'white'} onPress={() => {
                this.removeTag(i)
              }}>
                <Image resizeMode={Image.resizeMode.cover} source={require('../Images/close@2x.png')} style={Styles.iconButton15}/>
              </TouchableOpacity>
              <Text style={Styles.labelInterestText}>{this.state.selectTags[i]}</Text>
            </View>
          );
      }
      return (
        <View style={{flexDirection:'row',flexWrap: "wrap"}}>
        {
          tagViews
        }
        </View>
      );
    }
    renderPopularView()
    {
      if (this.state.showPopular == true)
      {
        return (
          <View style={{height:30,backgroundColor:'rgb(244,244,244)',flexDirection:'row',alignItems:'center'}}>
            <Text style={CommonStyles.book,{marginLeft:10,color:'rgb(186,186,186)'}}>Popular tags</Text>
            <TouchableOpacity activeOpacity={0.6} underlayColor={'white'} style={{position:'absolute',right:10,top:5}}
              onPress={() => {
                this.clearPop();
              }}>
              <Text style={CommonStyles.book,{marginLeft:10,color:'rgb(186,186,186)',textDecorationLine :'underline'}}>Clear</Text>
            </TouchableOpacity>
          </View>
        );
      }
    }
    render() {
      return (
        <View>
          {
            this.renderSelectedTags()
          }

          <TouchableOpacity activeOpacity={0.6} underlayColor={'white'}
            onPress={() => {
              this.setState({
                openTypeTagModal:true
              });
            }}>
              <View style={{flexDirection:'row',alignItems:'center',marginTop:10}}>
                  <View style={Styles.viewCircle}>
                    <Text style={{fontSize:14,color:'white'}}>+</Text>
                  </View>
                  <Text style={{fontSize:14,color:'rgb(184,184,184)'}}>Add Tags</Text>
              </View>
          </TouchableOpacity>

          <Modal
            animationType={'none'}
            transparent={false}
            visible={this.state.openTypeTagModal}
            onShow={()=>{}}
            onRequestClose={() => {}}
            >
            <View style={{height:60,alignItems:'center',flexDirection:'row'}}>
              <TouchableHighlight style={Styles.imgTopLeft} activeOpacity={0.6} underlayColor={'rgba(255,255,255,0.1)'}
                onPress={()=>
                {
                  this.setState(
                    {
                      openTypeTagModal:false
                    }
                  )
                }}>
                  <Image resizeMode={Image.resizeMode.stretch} source={require('../../common/Images/backIcon@2x.png')} style={{width:10,height:20}}/>
              </TouchableHighlight>
              <View style={[CommonStyles.book,{flex:1,backgroundColor:'rgb(230,230,230)',flexDirection:'row',marginLeft:10,alignItems:'center',marginRight:10,borderRadius:4,marginTop:10,marginBottom:10}]}>
                  <Image resizeMode={Image.resizeMode.stretch} source={require('../Images/search@2x.png')} style={{marginLeft:10,marginRight:10,width:20,height:20}}/>
                  <View style={{flex:1}}>
                    <TextInput underlineColorAndroid='transparent' selectionColor='rgb(243,145,28)' style={[CommonStyles.book,{paddingBottom:2,marginTop:5,marginBottom:5,marginRight:5,color:'rgb(184,184,184)',fontSize:18}]} placeholderTextColor='rgb(184,184,184)' placeholder='Search for Tags'
                    onChangeText={(text) => {this.changeTagText(text)}}></TextInput>
                  </View>
              </View>
            </View>
            {
              this.renderPopularView()
            }
            <ListView
              style={{flex:1,marginTop:10,marginBottom:10}}
              dataSource={this.state.dataSource}
              enableEmptySections={true}
              renderRow={(rowData) => this.renderItemTag(rowData)}
            />
            <View style={{height:1,backgroundColor:'rgb(217,217,217)'}}/>
          </Modal>
        </View>
      );
    }
}
