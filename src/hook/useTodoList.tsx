import { useState } from 'react';
import { AxiosClient } from '../lib/axios';
import { errorBoundary } from '../lib/errorBoundary';
import { authTokenEnum } from '../module/React-Router/Hook/useFindTargetChild';

export type TodoData = {
  id: number;
  todo: string;
  isCompleted: boolean;
  userId: number;
  isEdit: boolean | undefined;
};

export function useTodoList() {
  const [localTodoData, setLocalTodoData] = useState<TodoData[]>([]);
  const token = localStorage.getItem(authTokenEnum);
  const Authorization = `Bearer ${token}`;

  const getTodo = errorBoundary(async () => {
    const todos = await AxiosClient.client.get<TodoData[]>(AxiosClient.todoEndpoint.getTodos.end, {
      headers: {
        Authorization,
      },
    });

    setLocalTodoData(todos.data);
  });

  const createTodo = errorBoundary(async (todo: string) => {
    const newTodo = await AxiosClient.client.post(
      AxiosClient.todoEndpoint.createTodo.end,
      { todo },
      {
        headers: {
          Authorization,
        },
      },
    );

    setLocalTodoData((prev) => [...prev, newTodo.data]);
  });

  const updateLocalTodoData = (id: number, data: Partial<Pick<TodoData, 'todo' | 'isCompleted' | 'isEdit'>>) => {
    setLocalTodoData((todos) => {
      const copied = [...todos];
      const targetIdx = todos.findIndex((todo) => todo.id === id);

      if (targetIdx !== -1) {
        copied[targetIdx] = { ...copied[targetIdx], ...data };
      }

      return copied;
    });
  };
  const updateTodo = errorBoundary(
    async (id: string | number, data: Partial<Pick<TodoData, 'todo' | 'isCompleted' | 'isEdit'>>) => {
      const sendData: Partial<TodoData> = {
        todo: data.todo,
        isCompleted: data.isCompleted,
      };

      const updateResult = await AxiosClient.client.put(AxiosClient.todoEndpoint.updateTodo.end + `/${id}`, sendData, {
        headers: {
          Authorization,
        },
      });

      updateLocalTodoData(+id, { ...data, ...updateResult.data });
    },
  );

  const deleteLocalTodoData = (id: number) => {
    setLocalTodoData((todos) => {
      return todos.filter((todo) => todo.id !== id);
    });
  };
  const deleteTodo = errorBoundary(async (id: string | number) => {
    await AxiosClient.client.delete(AxiosClient.todoEndpoint.deltetodo.end + `/${id}`, {
      headers: {
        Authorization,
      },
    });

    deleteLocalTodoData(+id);
  });

  return {
    localTodoData,
    setLocalTodoData,
    getTodo,
    createTodo,
    updateLocalTodoData,
    updateTodo,
    deleteTodo,
  };
}
