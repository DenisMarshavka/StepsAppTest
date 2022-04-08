import {Dimensions, StyleSheet} from 'react-native';
import {COLORS, SIZES} from '../../../utils/theme';

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
  inputSection: {
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
  addBtn: {
    width: '25%',
  },
  listSection: {
    marginTop: 10,
  },
  loadingContainer: {
    paddingTop: Dimensions.get('screen').height / 3.3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  list: {
    paddingTop: 20,
  },
});
