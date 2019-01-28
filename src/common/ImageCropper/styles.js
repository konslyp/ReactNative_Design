import {
  StyleSheet
} from 'react-native';

import CommonStyle from '../CommonStyle';

const { width, height } = CommonStyle.SCREEN;

const Styles = StyleSheet.create({
  canvas: {
    width,
    height,
    justifyContent: 'center',
    alignSelf: 'center',
    flexDirection: 'column'
  },
  editorOverlayUpper: {
    position: 'absolute',
    backgroundColor: 'rgba(255,255,255,0.7)',
    width,
    zIndex: 2
  },
  editorOverlayUnder: {
    position: 'absolute',
    backgroundColor: 'rgba(255,255,255,0.7)',
    flexDirection: 'row',
    width,
    bottom: 0,
    zIndex: 2,
    justifyContent: 'space-between'
  },
  buttonWrapper: {
    flex: 1,
    zIndex: 3,
    paddingVertical: 16,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-end'
  },
  leftButton: {
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 28,
    width: 56,
    height: 56
  },
  rightButton: {
    backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 28,
    width: 56,
    height: 56
  },
  debugModal: {
  	justifyContent: 'center',
  	alignItems: 'center',
  	alignSelf: 'center',
  	flex: 1
  },
  debugCroppedImg: {
  	width: 120,
  	height: 120
  }
});

export default {
  ...Styles,
  width,
  height
};
