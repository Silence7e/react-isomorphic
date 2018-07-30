import todo from 'api/todo';

export async function getTodo() {
  const { response } = await todo.getTodo();
  return {
    data: response.data,
  };
}

export async function removeTodo({ id }) {
  const { response } = await todo.removeTodo({ id });
  return {
    data: response.data,
  };
}

export default {
  getTodo,
  removeTodo,
};
