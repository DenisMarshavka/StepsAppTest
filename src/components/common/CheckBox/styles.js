import {StyleSheet} from 'react-native';
import {COLORS} from '../../../utils/theme';

export default StyleSheet.create({
  root: {
    height: 28,
    width: 28,
    borderRadius: 28,
    backgroundColor: COLORS.primary,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 9,
  },
  active: {
    backgroundColor: COLORS.yellow,
  },
  icon: {
    height: '100%',
    width: '100%',
  },
});
