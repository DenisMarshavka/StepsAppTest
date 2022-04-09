import {Dimensions, StyleSheet} from 'react-native';
import {SIZES} from '../../../../utils/theme';

export default StyleSheet.create({
  root: {
    paddingHorizontal: SIZES.H_OFFSET,
  },
  title: {
    fontSize: 32,
    fontWeight: '700',
  },
  body: {
    marginTop: 30,
  },
  listSection: {
    marginTop: 10,
  },
  loadingContainer: {
    paddingTop: Dimensions.get('screen').height / 3.3,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
