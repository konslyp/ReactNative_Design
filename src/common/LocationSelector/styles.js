import {
  StyleSheet
} from 'react-native';

import COMMON_STYLE from '../CommonStyle';

const { fonts, THEME_COLOR } = COMMON_STYLE;

const Styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems:'center'
  },
  text: {
    ...fonts.medium,
    color: THEME_COLOR.color,
    alignSelf: 'center'
  },
});

export default {
  ...Styles,
  THEME_COLOR
};
