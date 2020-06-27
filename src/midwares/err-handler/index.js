const res = require('../../utils/response');

module.exports = async function errHandler(ctx, next) {
  try {
    await next();
  } catch (e) {
    ctx.body = res({ code: 500, msg: e.message });
  }
  // ctx.body = { code: '404', msg: '404 not found' };
};
