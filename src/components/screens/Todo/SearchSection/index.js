import React from 'react';
import {View, TextInput} from 'react-native';

import styles from './styles';
import {Button} from '../../../common';
import propType from 'prop-types';

const SearchSection = ({inputValue, onChangeInputText, handleAdd}) => (
  <View style={styles.root}>
    <TextInput
      value={inputValue}
      onChangeText={onChangeInputText}
      style={styles.input}
      placeholder={'Some title'}
    />

    <Button
      title="Add"
      onPress={handleAdd}
      style={styles.btn}
      disabled={!inputValue || !inputValue.trim?.()}
    />
  </View>
);

SearchSection.propTypes = {
  inputValue: propType.string,
  onChangeInputText: propType.func.isRequired,
  handleAdd: propType.func.isRequired,
};
SearchSection.defalutProps = {
  inputValue: '',
};
export default React.memo(SearchSection);
