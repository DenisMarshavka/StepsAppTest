import React from 'react';
import axios from 'axios';
import {API} from '../utils';

const useTodoFetchData = () => {
  const [pending, setPending] = React.useState(false);

  const generateRequest = React.useCallback(
    async (method = 'get', data = {id: -1}, ...restProps) => {
      let res = {data: {data: []}};
      const {id} = data ?? {};

      console.log({id});
      const url =
        method === 'put' || method === 'delete'
          ? `${API.todos}/${id}`
          : API.todos;
      setPending(true);

      try {
        res = await axios[method](url, {...data}, ...restProps);
        setPending(false);
      } catch (error) {
        setPending(false);
        console.log('@@@useTodoFetchData', {error, method, ...restProps});
      }

      return res;
    },
    [],
  );

  return {
    getList: async () => await generateRequest(),
    deleteTaskById: async (id = -1) => await generateRequest('delete', {id}),
    updateTaskById: async (id, data = {}) =>
      await generateRequest('put', {data: {id, ...data}}),
    createNewTaskItem: async (data = {}) =>
      await generateRequest('post', {...data}),
    pending,
  };
};

export default useTodoFetchData;
