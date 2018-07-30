const queryString = require('querystring');
const koaBody = require('koa-body');
const { getTodos, addTodo, removeTodo } = require('../../../services');

module.exports = (app) => {
  const { router } = app;
  router.get('/api/todo', async (ctx) => {
    const data = await getTodos();
    ctx.body = {
      data,
      success: true,
    };
  });

  router.post('/api/todo', koaBody({ multipart: true }), async (ctx) => {
    const { body } = ctx.request;
    const todo = queryString.parse(body);
    if (todo && todo.content) {
      const data = await addTodo(todo);
      ctx.body = {
        data,
        success: true,
      };
    }
  });

  router.delete('/api/todo/:id', async (ctx) => {
    const { id } = ctx.params;
    const success = await removeTodo(id);
    if (success) {
      const data = await getTodos();
      ctx.body = {
        data,
        success: true,
      };
      return;
    }
    ctx.body = {
      error: '删除失败',
      success: false,
    };
  });
};
