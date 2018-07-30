const mongoose = require('mongoose');

module.exports = async (id) => {
  const Todo = mongoose.model('Todo');
  const { n, ok } = await Todo.deleteOne({ _id: id });
  return ok && n;
};
