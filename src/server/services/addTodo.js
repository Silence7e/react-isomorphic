const mongoose = require('mongoose');
const getTodos = require('./getTodos');

module.exports = async (data) => {
  const Status = mongoose.model('Status');
  const status = await Status.findOne({ value: 'created' });
  const newTodo = {
    status: status._id,
    content: data.content,
  };
  const Todo = mongoose.model('Todo');
  const todo = new Todo(newTodo);

  await todo.save();
  return await getTodos();
};
