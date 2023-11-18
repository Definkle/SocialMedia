import {StyleSheet} from 'react-native';
import {getFontFamily} from '../../assets/fonts/helper';

export const style = StyleSheet.create({
  storyContainer: {
    marginRight: 20,
  },
  firstName: {
    color: '#022150',
    textAlign: 'center',
    fontFamily: getFontFamily('Inter', '500'),
    fontSize: 15,
    marginTop: 8,
  },
  userImageContainer: {
    borderColor: '#F35BAC',
    borderWidth: 1,
    padding: 3,
    borderRadius: 65,
  },
  image: {width: 65, height: 65, borderRadius: 65},
});
