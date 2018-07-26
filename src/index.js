const chalk = require('chalk');

const app = require('./server/app');

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.info(`Server is running on ${chalk.green(port)}`);
});
