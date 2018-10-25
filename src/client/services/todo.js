import todoApi from '../api/todo';

export async function addTodo({ todo, a }) {
  const { response } = await todoApi.addTodo({ todo, a });
  return {
    data: response.data,
  };
}

export async function getTodo() {
  const { response } = await todoApi.getTodo();
  return {
    data: response.data,
  };
}

export async function removeTodo({ id }) {
  const { response } = await todoApi.removeTodo({ id });
  return {
    data: response.data,
  };
}

export default {
  getTodo,
  addTodo,
  removeTodo,
};
