const KoaRouter = require('koa-router');
const article = require('./article');
const auth = require('./auth');

const router = new KoaRouter();

router.use('/api', article.routes());
router.use('/api', auth.routes());

module.exports = router;
