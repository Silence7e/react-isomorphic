const mongoose = require('mongoose');

const format = data => data.map(item => ({
  content: item.content,
  status: item.status.value,
  id: item._id,   //eslint-disable-line
  meta: item.meta,
}));

module.exports = async () => {
  const Todo = mongoose.model('Todo');
  const todos = await Todo.find().populate('status').exec();
  return format(todos);
};
