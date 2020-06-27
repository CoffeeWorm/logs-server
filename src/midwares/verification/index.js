const uuid = require('uuid');
const auth = require('../../db/auth');

module.exports = async function verification(ctx, next) {
  const token = ctx.headers['x-auth-token'];
  const tokenItem = await auth.findOne({ where: { token: token || '' } });
  if (!tokenItem) {
    ctx.body = { code: 404, msg: '404 not found' };
  } else if (+new Date(tokenItem.updatedAt) - +new Date() > 24 * 60 * 60) {
    auth.update({ token: uuid() }, { where: { id: 1 } });
    ctx.body = { code: 404, msg: '404 not found' };
  } else {
    await next();
  }
};
