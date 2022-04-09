import React from 'react';
import {ScrollView} from 'react-native';
import {useBottomTabBarHeight} from '@react-navigation/bottom-tabs';

import styles from './styles';
import Task from '../Task';
import propType from 'prop-types';

const TodoList = ({data, handleDeleteItem, handleChangeItemData}) => {
  const bottomTabsHeight = useBottomTabBarHeight();

  return (
    <ScrollView
      style={styles.root}
      contentContainerStyle={{paddingBottom: bottomTabsHeight * 3.5}}
      showsVerticalScrollIndicator={false}>
      {data.map((item = {}) => {
        const {id = +Date.now(), attributes = {}} = item;
        const {completed = false} = attributes;

        return (
          <Task
            {...attributes}
            key={`task-item-${id}`}
            id={id}
            onDelete={() => handleDeleteItem(id)}
            onCheck={() => handleChangeItemData(id, {completed: !completed})}
          />
        );
      })}
    </ScrollView>
  );
};

TodoList.propTypes = {
  data: propType.arrayOf(propType.shape({})).isRequired,
  handleDeleteItem: propType.func,
  handleChangeItemData: propType.func,
};
TodoList.defalutProps = {
  handleDeleteItem: () => null,
  handleChangeItemData: () => null,
};

export default React.memo(TodoList);
