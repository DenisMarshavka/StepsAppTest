import {StyleSheet} from 'react-native';
import {COLORS} from '../../../../utils/theme';

export default StyleSheet.create({
  root: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  input: {
    width: '70%',
    borderRadius: 30,
    borderColor: COLORS.gray,
    borderWidth: 1,
    padding: 15,
  },
  btn: {
    width: '25%',
  },
});
