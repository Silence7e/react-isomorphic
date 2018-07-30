const mongoose = require('mongoose');
const chalk = require('chalk');
const getTodos = require('./getTodos');

const created = 'created';

const getStatus = async () => {
  const Status = mongoose.model('Status');
  let status = await Status.findOne({ value: created });
  try {
    if (!status) {
      const createdStatus = {
        value: created,
      };
      const newStatus = new Status(createdStatus);
      await newStatus.save();
      status = await Status.findOne({ value: created });
    }
  } catch (e) {
    console.log(chalk.red(JSON.stringify(e)));
  }
  return status;
};

module.exports = async (data) => {
  const status = await getStatus();
  const newTodo = {
    status: status._id,
    content: data.content,
  };
  const Todo = mongoose.model('Todo');
  const todo = new Todo(newTodo);

  await todo.save();
  return await getTodos();
};
