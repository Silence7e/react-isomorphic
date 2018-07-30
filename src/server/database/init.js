const path = require('path');
const mongoose = require('mongoose');
const chalk = require('chalk');
const glob = require('glob');
const logger = require('../logger')();

const db = 'mongodb://localhost/todolist';

mongoose.Promise = global.Promise;

exports.initSchema = () => {
  glob.sync((path.resolve(__dirname, './schema/', '**/*.js'))).forEach(require);
};

exports.connect = () => new Promise((resolve, reject) => {
  let maxConnectTimes = 0;

  if (process.env.NODE_ENV === 'development') {
    mongoose.set('debug', true);
  }

  mongoose.connect(db);

  mongoose.connection.on('disconnect', () => {
    throw new Error('数据库挂了吧');
  });

  mongoose.connection.on('error', (err) => {
    maxConnectTimes += 1;
    if (maxConnectTimes < 5) {
      mongoose.connect(db);
    } else {
      reject(err);
      throw new Error('数据库挂了吧');
    }
  });

  mongoose.connection.on('open', () => {
    logger.info(`MongoDB Connected${chalk.blue('successfully!')}`);
    resolve();
  });
});
