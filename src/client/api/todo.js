import callApi from './callApi';

const url = '/todo';

export async function getTodo() {
  return await callApi(`${url}`);
}

export async function addTodo({ todo }) {
  return await callApi(`${url}`, { method: 'POST', body: `content=${todo}` });
}

export async function removeTodo({ id }) {
  return await callApi(`${url}/${id}`, { method: 'DELETE' });
}

export default {
  getTodo,
  addTodo,
  removeTodo,
};
