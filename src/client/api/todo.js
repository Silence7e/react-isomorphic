import callApi from './callApi';

const url = '/todo';

export async function getTodo() {
  return await callApi(`${url}`);
}

export async function removeTodo({ id }) {
  return await callApi(`${url}/${id}`, { method: 'DELETE' });
}

export default {
  getTodo,
  removeTodo,
};
