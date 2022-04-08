import React from 'react';
import axios from 'axios';
import {API} from '../utils';

export const useTodoFetchData = () => {
  const [pending, setPending] = React.useState(false);

  const generateRequest = React.useCallback(
    async (method = 'get', data = {id: -1}, ...restProps) => {
      let res = {data: {data: []}};
      const {id, ...restDataProps} = data ?? {};

      const url =
        method === 'put' || method === 'delete'
          ? `${API.todos}/${id}`
          : API.todos;

      let options =
        method === 'get' || method === 'delete'
          ? [url]
          : [url, {data: {...restDataProps}}, ...restProps];

      setPending(true);
      try {
        res = await axios[method](...options);
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
      await generateRequest('put', {id, ...data}),
    createNewTaskItem: async (data = {}) =>
      await generateRequest('post', {...data}),
    pending,
  };
};
