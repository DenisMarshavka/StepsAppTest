import {Dimensions, StyleSheet} from 'react-native';
import {COLORS} from '../../../utils/theme';

export default StyleSheet.create({
  commonText: {
    color: COLORS.white,
  },

  root: {
    paddingBottom: 50,
    backgroundColor: COLORS.primary,
    flex: 1,
  },
  title: {
    marginLeft: 16,
    fontSize: 32,
    fontWeight: '700',
  },
  body: {
    marginTop: 45,
    paddingHorizontal: 16,
  },
  btn: {
    marginBottom: 16,
  },
  bottomSection: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    paddingHorizontal: 15,

    width: '100%',
    maxWidth: Dimensions.get('screen').width,
  },
});
