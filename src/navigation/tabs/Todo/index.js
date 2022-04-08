import React from 'react';
import {Text, View, TextInput, ScrollView} from 'react-native';

import styles from './styles';
import Button from '../../../components/common/Button';
import Task from '../../../components/Todo/Task';
import {API} from '../../../utils';
import {useBottomTabBarHeight} from '@react-navigation/bottom-tabs';
import useTodoFetchData from '../../../hook/useTodoFetchData';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

const Todo = () => {
  const [nameNewTask, setNameNewTask] = React.useState('asdfasdfasdfasdf');
  const [tasks, setTasks] = React.useState([]);
  const bottomTabsHeight = useBottomTabBarHeight();

  const {
    getList = () => null,
    deleteTaskById = () => null,
    createNewTaskItem = () => null,
    updateTaskById = () => null,

    pending = false,
  } = useTodoFetchData();

  const fetchListData = React.useCallback(async () => {
    const {data = []} = await getList(API.todos);

    setTasks(data.data);
  }, [getList]);

  React.useEffect(() => {
    fetchListData();
  }, []);

  const getItemIndexById = React.useCallback(
    (id = -1) => {
      let result = -1;

      if (!Number.isNaN(+id)) {
        result = tasks.findIndex((item = {}) => item.id === id);
      } else {
        console.log('@@@TodoScreen@getItemIndexById', {id});
      }

      return result;
    },
    [tasks],
  );

  const handleAddNewTask = React.useCallback(async () => {
    const newDataBody = {title: nameNewTask, completed: false};
    const newDataItem = {id: Date.now(), attributes: {...newDataBody}};

    if (nameNewTask.trim?.()) {
      setTasks((prevState = []) => [...prevState, newDataItem]);

      //setNameNewTask('');
      //await createNewTaskItem({...newDataBody});
      //await fetchListData();
    }
  }, [createNewTaskItem, nameNewTask, fetchListData]);

  const handleChangeTaskData = React.useCallback(
    async (id = -1, newData = {}) => {
      const newDataList = [...tasks];
      const newItemData = {...newData, id};
      const currItemIndex = getItemIndexById(id);

      if (currItemIndex > -1) {
        newDataList[currItemIndex] = {
          ...newDataList[currItemIndex],
          attributes: {
            ...newDataList[currItemIndex].attributes,
            ...newItemData,
          },
        };

        console.log({newDataList});

        //await updateTaskById({id, ...newData});
      }

      setTasks(newDataList);
    },
    [tasks, getItemIndexById, updateTaskById],
  );

  const handleTaskDelete = React.useCallback(
    async (id = -1) => {
      let newData = [...tasks];
      const currItemIndex = getItemIndexById(id);

      if (currItemIndex > -1) {
        newData = newData.filter((itemData = {}) => itemData.id !== id);
        setTasks(newData);

        await deleteTaskById(id);
      }
    },
    [tasks, getItemIndexById, deleteTaskById],
  );

  const renderInputSection = React.useCallback(
    () => (
      <KeyboardAwareScrollView
        scrollEnabled={false}
        enableAutomaticScroll
        enableOnAndroid>
        <View style={styles.inputSection}>
          <TextInput
            value={nameNewTask}
            onChangeText={setNameNewTask}
            style={styles.input}
          />

          <Button
            title="Add"
            onPress={handleAddNewTask}
            style={styles.addBtn}
          />
        </View>
      </KeyboardAwareScrollView>
    ),
    [handleAddNewTask, nameNewTask],
  );

  const renderListSection = React.useCallback(
    () => (
      <ScrollView
        style={styles.list}
        contentContainerStyle={{paddingBottom: bottomTabsHeight * 3.5}}
        showsVerticalScrollIndicator={false}>
        {tasks.map((data = {}) => (
          <Task
            key={`task-item-${data.id}`}
            {...data.attributes}
            id={data?.id || +Date.now()}
            onDelete={handleTaskDelete}
            onCheck={handleChangeTaskData}
          />
        ))}
      </ScrollView>
    ),
    [handleChangeTaskData, handleTaskDelete, bottomTabsHeight, tasks],
  );

  return (
    <View style={styles.root}>
      <Text style={styles.title}>Todo screen</Text>

      <View style={styles.body}>{renderInputSection()}</View>
      <View style={styles.listSection}>{renderListSection()}</View>
    </View>
  );
};

export default React.memo(Todo);
