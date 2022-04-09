import {StyleSheet} from 'react-native';
import {COLORS} from '../../../../utils/theme';

export default StyleSheet.create({
  root: {
    paddingVertical: 15,
    paddingHorizontal: 20,
    marginBottom: 20,

    width: '100%',
    borderColor: COLORS.gray,
    borderWidth: 1,
    borderRadius: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  leftSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    marginLeft: 10,
    fontWeight: '400',
    textTransform: 'capitalize',
  },
  btnDel: {
    height: 20,
    width: 20,
    resizeMode: 'contain',
  },
  btnDelIcon: {
    width: '100%',
    height: '100%',
  },
});
