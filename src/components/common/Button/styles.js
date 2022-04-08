import {StyleSheet} from 'react-native';
import {COLORS} from '../../../utils/theme';

export default StyleSheet.create({
  root: {},
  btn: {
    backgroundColor: COLORS.yellow,

    borderRadius: 30,
    paddingVertical: 14,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: COLORS.white,
  },
});
