import {Dimensions} from 'react-native';
import DeviceInfo from 'react-native-device-info';

const {width, height} = Dimensions.get('window');
const isSmallDevice = width < 375 && !DeviceInfo.hasNotch();
const guidelineBaseWidth = isSmallDevice ? 330 : 350;
const horizontalScale = size => (width / guidelineBaseWidth) * size;
const guidelineBaseHeight = () => {
  if (isSmallDevice) {
    return 550;
  } else if (width > 410) {
    return 620;
  }
  return 680;
};

const verticalScale = size => (height / guidelineBaseHeight()) * size;

const guideLineBaseFonts = width > 410 ? 430 : 400;
const scaleFontSize = size => Math.round((width / guideLineBaseFonts) * size);

export {horizontalScale, verticalScale, scaleFontSize};
