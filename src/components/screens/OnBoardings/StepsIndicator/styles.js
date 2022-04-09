import {Dimensions, StyleSheet} from 'react-native';
import {COLORS} from '../../../../utils/theme';

export default StyleSheet.create({
  root: {
    width: '100%',
    backgroundColor: COLORS.whiteLighten,
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 30,

    minHeight: 70,
  },
  line: {
    height: 2,
    width: '100%',

    backgroundColor: COLORS.gray,
    position: 'absolute',
    top: '50%',
    left: '10%',
  },
  content: {
    position: 'absolute',
    top: '25%',
    left: 0,
    bottom: 0,
    right: 0,
    zIndex: 5,
    maxWidth: Dimensions.get('screen').width / 3.25,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
