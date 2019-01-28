import {
  StyleSheet,
  Dimensions
} from 'react-native';

import COMMON_STYLE from '../../common/CommonStyle';

const { container, THEME_COLOR } = COMMON_STYLE;


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const profileSize = 54;

const Styles = StyleSheet.create({
  ratingWrapper: {
    marginLeft: 20
  },
  profileViewTop:
  {
    width: windowWidth,
    height: 200,
    backgroundColor: 'rgba(51, 51, 51, 0.3)',
    position: 'absolute'
  },
  profileImageBack:
  {
    width: windowWidth,
    height: 200,
  },
  labelScreen:
  {
    fontSize:15,
    marginTop:15,
    fontFamily:'Avenir-Roman',
    width: windowWidth,
    textAlign:'center',
    color:'white',
    position: 'absolute'
  },
  labelTopBar:
  {
    fontSize:15,
    marginTop:15,
    fontFamily:'Avenir-Roman',
    width: windowWidth,
    textAlign:'center',
    position: 'absolute'
  },
  viewAlignBottom:
  {
    width: windowWidth,
    position: 'absolute',
    bottom:20,
  },
  labelProfileFooter:
  {
    fontSize:12,
    width: windowWidth,
    marginTop:2,
    textAlign:'center',
    color:'white'
  },
  labelProfileFooterBold:
  {
    fontSize:14,
    width: windowWidth,
    height:20,
    textAlign:'center',
    color:'white',
    lineHeight:12
  },
  circleImageViewLarge:
  {
    width:100,
    height:100,
    borderRadius: 50,
    marginLeft:10,
  },
  circleImageView:
  {
    width:profileSize,
    height:profileSize,
    borderRadius: profileSize/2,
    marginLeft:10,
  },

  //View Styles

  interestViewContainer:
  {
    flexDirection:'row',alignItems:'center',marginRight:5,borderRadius:3,padding:5,backgroundColor:'rgb(243,145,28)'
  },
  interestViewContainerGray:
  {
    flexDirection:'row',alignItems:'center',marginRight:5,borderRadius:3,padding:5,backgroundColor:'rgb(230,230,230)'
  },
  serviceDetailViewBg:
  {
    flexDirection:'row',alignItems:'center',borderRadius:1,padding:5,backgroundColor:'rgb(255,232,203)'
  },
  viewCircle:
  {
    width:24,height:24,
    flexDirection:'row',alignItems:'center',
    marginRight:5,borderRadius:12,justifyContent:'center',
    backgroundColor:'rgb(243,145,28)'
  },
  commentContainer:
  {
    marginRight:10,
    marginTop:10,
    marginLeft:10,
  },


  //Image Styles
  imgTopRight:
  {
    marginTop:15,
    height: 20,
    width: 20,
    right:10,
    position: 'absolute'
  },
  imgCommentThumb:
  {
    width: ( windowWidth - 80) / 3 - 5,
    height:(( windowWidth - 80) / 3 - 5) * 8 / 11,
    marginRight:5,
  },
  imgTopLeft:
  {
    marginTop:15,
    height: 20,
    width: 10,
    left:10,
    position: 'absolute'
  },
  iconButton30:
  {
    width:30,
    height:30,
    marginLeft:20
  },
  iconButton35:
  {
    width:40,
    height:40,
    marginLeft:20
  },
  iconButton40:
  {
    width:40,
    height:40,
    marginLeft:20
  },
  iconButton15:
  {
    width:12,
    height:12,
  },
  imgThumbMargin3:
  {
    width:40,
    height:40,
    marginLeft:3
  },
  imgStar:
  {
    width:15,
    height:15,
    marginLeft:3
  },
  imgStarLarge:
  {
    width:23,
    height:23,
    marginLeft:6
  },
  imgStarMedium:
  {
    width:18,
    height:18,
    marginLeft:4
  },
  imgIconSmall:
  {
    width:8,
    height:10,
    marginLeft:10
  },

  //Label Styles
  labelGrayBold14:
  {
    fontFamily: 'Avenir-Roman',
    fontSize: 14,
    fontWeight:'bold',
    color:'rgba(106, 100, 100,1)',
    height:24
  },
  labelGrayBold16:
  {
    fontFamily: 'Avenir-Medium',
    fontSize: 16,
    fontWeight:'bold',
    color:'rgba(106, 100, 100,1)',
    height:20
  },
  labelGrayBold10:
  {
    fontSize:10,
    fontWeight:'bold',
    color:'rgba(106, 100, 100,1)',
  },
  labelGray12:
  {
    fontSize:12,
    color:'rgba(106, 100, 100,1)',
    height:20
  },
  textCommentGrayWithPadding10:
  {
    padding:10,
    fontSize:12,
    color:'rgba(106, 100, 100,1)',
  },
  labelInterestText:
  {
    color:'white',marginLeft:5
  },
  labelInterestTextGray:
  {
    color:'rgb(182,182,182)'
  },
  labelStarReview:
  {
    color:'rgb(243,145,28)',
    fontSize:12
  },

  //Button Styles
  btnBorderYellow:
  {
    paddingTop:10,
    paddingLeft:50,
    paddingBottom:10,
    paddingRight:50,
    borderWidth:2,
    borderColor:'rgb(243,145,28)',
    borderRadius:4,
    alignItems:'center',
    flexDirection:'row'
  },
  btnFullYellow:
  {
    paddingTop:10,
    paddingLeft:50,
    paddingBottom:10,
    paddingRight:50,
    backgroundColor:'rgb(243,145,28)',
    borderRadius:4,
    alignItems:'center',
    justifyContent:'center',
    flexDirection:'row'
  },

  //Modal
  modalMaskBg:
  {
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'rgba(0,0,0,0.8)'
  },
  modalViewInput:
  {
    width:300,
    height:170,
    backgroundColor:'white',
    borderRadius:4,
    padding:20
  },
  modalViewRequestContact:
  {
    width:350,
    height:280,
    backgroundColor:'white',
    borderRadius:4,
    padding:10
  },
  modalViewBottomBar:
  {
    bottom:10,
    width:280,
    margin:10,
    height:30,
    justifyContent:'flex-end',
    alignItems:'center',
    position:'absolute',
  },


});

export default {
  ...Styles,
  container,
  THEME_COLOR
}
