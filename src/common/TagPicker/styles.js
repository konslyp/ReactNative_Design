import {
  StyleSheet
} from 'react-native';

import COMMON_STYLE from '../../common/CommonStyle';

const {
  fullContainer,
  THEME_COLOR,
  fonts,
  SCREEN
} = COMMON_STYLE;

const Styles = StyleSheet.create({

    viewCircle:
    {
      width:24,height:24,
      flexDirection:'row',alignItems:'center',
      marginRight:5,borderRadius:12,justifyContent:'center',
      backgroundColor:'rgb(184,184,184)'
    },
    imgTopLeft:
    {
      marginLeft:15,
      height: 20,
      width: 10
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
    interestViewContainer:
    {
      flexDirection:'row',alignItems:'center',marginRight:5,marginTop:3,borderRadius:3,padding:5,backgroundColor:'rgb(230,230,230)',
    },
    labelInterestText:
    {
      color:'rgb(106,106,106)',marginLeft:5
    },
    iconButton15:
    {
      width:12,
      height:12,
    },
});

export default {
  ...Styles,
  fullContainer,
  THEME_COLOR,
  fonts
};
