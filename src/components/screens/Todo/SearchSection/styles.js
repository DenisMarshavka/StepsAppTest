import {StyleSheet} from 'react-native';
import {COLORS} from '../../../../utils/theme';

export default StyleSheet.create({
  root: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: '100%',
    maxHeight: 50,
  },
  input: {
    width: '70%',
    height: '100%',
    borderRadius: 30,
    borderColor: COLORS.gray,
    borderWidth: 1,
    padding: 15,
  },
  btn: {
    height: '100%',
    width: '25%',
  },
});
