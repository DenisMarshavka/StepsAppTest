import React from 'react';
import {Text, View, SafeAreaView, ActivityIndicator} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import {useTodoFetchData} from '../../../../hook';
import styles from './styles';
import {API} from '../../../../utils';
import {withChekOnBoardingsVisited} from '../../../../hoc';
import {COLORS} from '../../../../utils/theme';
import {SearchSection, ToDoList} from '../../../../components';
import {showAlert} from '../../../../utils/functions';

const MIN_SEARCH_VALUE_LENGTH = 5;

const Todo = () => {
  const [nameNewTask, setNameNewTask] = React.useState();
  const [tasks, setTasks] = React.useState([]);

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
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

    if (
      !nameNewTask ||
      !nameNewTask.trim?.() ||
      !nameNewTask?.length ||
      nameNewTask.length < MIN_SEARCH_VALUE_LENGTH
    ) {
      showAlert(
        'Error value',
        'The Search value is invalid (Minimum 5 characters)',
        [
          [
            {
              text: 'Ok',
              onPress: () => null,
              style: 'success',
            },
          ],
        ],
      );
      return;
    }

    setTasks((prevState = []) => [...prevState, newDataItem]);
    setNameNewTask('');

    await createNewTaskItem({...newDataBody});
    await fetchListData();
  }, [createNewTaskItem, nameNewTask, fetchListData]);

  const handleChangeTaskData = React.useCallback(
    async (id = -1, newData = {}) => {
      const newDataList = [...tasks];
      const currItemIndex = getItemIndexById(id);

      if (currItemIndex > -1) {
        newDataList[currItemIndex] = {
          ...newDataList[currItemIndex],
          attributes: {
            ...newDataList[currItemIndex].attributes,
            ...newData,
          },
        };

        setTasks(newDataList);
        await updateTaskById(id, {...newData});
      }

      await fetchListData();
    },
    [tasks, getItemIndexById, updateTaskById, fetchListData],
  );

  const handleTaskDelete = React.useCallback(
    async (id = -1) => {
      let newData = [...tasks];
      const currItemIndex = getItemIndexById(id);

      if (currItemIndex > -1) {
        newData = newData.filter((itemData = {}) => itemData.id !== id);
        setTasks(newData);

        await deleteTaskById(id);
        await fetchListData();
      }
    },
    [tasks, getItemIndexById, deleteTaskById, fetchListData],
  );

  const renderLoading = React.useCallback(
    () => (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size={20} color={COLORS.primary} />
      </View>
    ),
    [],
  );

  return (
    <View style={styles.root}>
      <SafeAreaView>
        <Text style={styles.title}>Main screen</Text>
      </SafeAreaView>

      <View style={styles.body}>
        <KeyboardAwareScrollView
          scrollEnabled={false}
          enableAutomaticScroll
          enableOnAndroid={false}>
          <SearchSection
            onChangeInputText={setNameNewTask}
            inputValue={nameNewTask}
            handleAdd={handleAddNewTask}
          />
        </KeyboardAwareScrollView>

        <View style={styles.listSection}>
          {!tasks?.length && pending ? (
            renderLoading()
          ) : (
            <ToDoList
              data={tasks}
              handleChangeItemData={handleChangeTaskData}
              handleDeleteItem={handleTaskDelete}
            />
          )}
        </View>
      </View>
    </View>
  );
};

export default React.memo(withChekOnBoardingsVisited(Todo));
