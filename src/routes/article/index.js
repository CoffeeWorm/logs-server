const KoaRouter = require('koa-router');
const verifacation = require('../../midwares/verification');
const modal = require('../../db/article');
const res = require('../../utils/response');

const router = new KoaRouter();

const get = async (ctx) => {
  const { id } = ctx.params;
  const data = await modal.findOne({ where: { id } });
  ctx.body = res({ data });
};

const getList = async (ctx) => {
  const { page = 1, pageSize = 10 } = ctx.query;
  const { rows, count } = await modal.findAndCountAll({
    order: [['createdAt', 'DESC']],
    limit: [page - 1, +pageSize],
  });
  const data = {
    rows,
    pagination: { page, pageSize, total: count },
  };
  ctx.body = res({ data });
};

const post = async (ctx) => {
  const { title, content, intro } = ctx.request.body;
  const data = await modal.create({ title, content, intro });
  ctx.body = res({ data });
};

const patch = async (ctx) => {
  const { title, content, intro } = ctx.request.body;
  const { id } = ctx.params;
  await modal.update({ title, content, intro }, { where: { id } });
  const data = await modal.findOne({ where: { id } });
  ctx.body = res({ data });
};

router.get('/article/:id', get);
router.get('/articles', getList);

router.post('/article', verifacation, post);
router.patch('/article/:id', verifacation, patch);

module.exports = router;
