const KoaRouter = require('koa-router');
const uuid = require('uuid');
const { Sequelize, Op } = require('sequelize');
const res = require('../../utils/response');
const auth = require('../../db/auth');

const router = new KoaRouter();

router.get('/asdf', (ctx) => {
  auth.update(
    { token: uuid() },
    {
      where: Sequelize.where(
        Sequelize.fn(
          'datediff',
          Sequelize.fn('NOW'),
          Sequelize.col('updatedAt')
        ),
        { [Op.gte]: 1 }
      ),
    }
  );
  ctx.body = res({ code: 404, msg: '404 not found' });
});

module.exports = router;
