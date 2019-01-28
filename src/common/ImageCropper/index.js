import React, {
  Component,
  PropTypes
} from 'react';

import {
  TouchableOpacity,
  ScrollView,
  View,
  Image,
  Platform,
  ImageEditor,
  Modal,
  Alert,
  Text
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Styles from './styles';

const { width, height } = Styles;

export default class ImageCropper extends Component {
  static propTypes = {
    size: PropTypes.shape({
      width: PropTypes.number,
      height: PropTypes.number
    }),
    image: PropTypes.shape({
      uri: PropTypes.string,
      width: PropTypes.number,
      height: PropTypes.number
    }),
    cancel: PropTypes.func,
    onImgLoadEnd: PropTypes.func,
    onCropFinished: PropTypes.func,
    debugMode: PropTypes.bool
  };

  static defaultProps = {
    size: {
      width,
      height: width
    },
    image: PropTypes.shape({
      uri: null,
      width: 0,
      height: 0
    }),
    cancel: null,
    onImgLoadEnd: null,
    onCropFinished: null,
    debugMode: false
  }

  constructor(props) {
    super(props);
    this.state = {
      openCorpModal: false,
      croppedImage: {
        uri: null
      }
    };
  }

  componentWillMount() {
    this.overLayHeight = (height - this.props.size.height) / 2;
    const widthRatio = this.props.image.width / this.props.size.width;
    const heightRatio = this.props.image.height / this.props.size.height;

    this.horizontal = widthRatio > heightRatio;
    if (this.horizontal) {
      this.scaledImageSize = {
        width: this.props.image.width / heightRatio,
        height: this.props.size.height,
      };
      this.imageStyle = {
        width: this.scaledImageSize.width + width,
        height: this.props.size.height,
        marginVertical: this.overLayHeight
      };
    } else {
      this.imageStyle = {
        width,
        height: this.props.size.height,
        marginVertical: this.overLayHeight
      };

      this.scaledImageSize = {
        width: this.props.size.width,
        height: this.props.image.height / widthRatio,
      };
      if (Platform.OS === 'android') {
        this.scaledImageSize.width *= 2;
        this.scaledImageSize.height *= 2;
        this.horizontal = true;
      }
    }
    this.contentOffset = {
      x: (this.scaledImageSize.width - this.props.size.width) / 2,
      y: (this.scaledImageSize.height - this.props.size.height) / 2,
    };
    this.maximumZoomScale = Math.min(
      this.props.image.width / this.scaledImageSize.width,
      this.props.image.height / this.scaledImageSize.height
    );
    this.minimumZoomScale = Math.max(
      width / this.scaledImageSize.width,
      this.props.size.height / this.scaledImageSize.height
    );

    this.updateTransformData(
      this.contentOffset,
      this.scaledImageSize,
      this.props.size
    );
  }

  onScroll(event) {
    this.updateTransformData(
      event.nativeEvent.contentOffset,
      event.nativeEvent.contentSize,
      event.nativeEvent.layoutMeasurement
    );
  }

  crop = () => (
    ImageEditor.cropImage(
      this.props.image.uri,
      this.cropData,
      (croppedImageURI) => {
        if (this.props.debugMode) {
          this.setState({
            openCorpModal: true,
            croppedImage: {
              uri: croppedImageURI
            }
          });
        }

        if (this.props.onCropFinished) {
          this.props.onCropFinished(croppedImageURI);
        }
      },
      error => (
        Alert.alert(
          'Error occurs',
          error,
          { cancelable: true }
        )
      )
    )
  )

  updateTransformData(offset, scaledImageSize, croppedImageSize) {
    const offsetRatioX = offset.x / scaledImageSize.width;
    const offsetRatioY = offset.y / scaledImageSize.height;
    const sizeRatioX = croppedImageSize.width / scaledImageSize.width;
    const sizeRatioY = croppedImageSize.height / scaledImageSize.height;

    this.cropData = {
      offset: {
        x: this.props.image.width * offsetRatioX,
        y: this.props.image.height * offsetRatioY,
      },
      size: {
        width: this.props.image.width * sizeRatioX,
        height: this.props.image.height * sizeRatioY,
      },
    };
  }

  render() {
    return (
      <View style={Styles.canvas}>
        <View style={[Styles.editorOverlayUpper, { height: this.overLayHeight, width }]} />
        <ScrollView
          alwaysBounceVertical
          automaticallyAdjustContentInsets={false}
          contentOffset={this.contentOffset}
          decelerationRate="fast"
          horizontal={this.horizontal}
          maximumZoomScale={this.maximumZoomScale}
          minimumZoomScale={this.minimumZoomScale}
          onMomentumScrollEnd={e => this.onScroll(e)}
          onScrollEndDrag={e => this.onScroll(e)}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          scrollEventThrottle={16}
        >
          {
            this.props.image.uri &&
            <Image
              source={{ uri: this.props.image.uri }}
              resizeMode="cover"
              resizeMethod="scale"
              onLoadEnd={this.props.onImgLoadEnd}
              style={this.imageStyle}
            />
        }
        </ScrollView>
        <View style={[Styles.editorOverlayUnder, { height: this.overLayHeight, width }]}>
          <View style={Styles.buttonWrapper}>
            <TouchableOpacity style={Styles.leftButton} onPress={this.props.cancel}>
              <Icon name="window-close" color="#fff" size={36} />
            </TouchableOpacity>
          </View>
          <View style={Styles.buttonWrapper}>
            <TouchableOpacity style={Styles.rightButton} onPress={this.crop}>
              <Icon name="check" color="#fff" size={36} />
            </TouchableOpacity>
          </View>
        </View>
        {
          this.props.debugMode &&
          <Modal
            animateionType={'slide'}
            transparent={false}
            visible={this.state.openCorpModal}
          >
            <View style={Styles.debugModal}>
              <TouchableOpacity
                onPress={() => {
                  this.setState({
                    openCorpModal: false
                  });
                }}
              ><Text>Close</Text></TouchableOpacity>
              <Image
                source={this.state.croppedImage}
                style={Styles.debugCroppedImg}
              />
            </View>
          </Modal>
        }
      </View>
    );
  }

}
