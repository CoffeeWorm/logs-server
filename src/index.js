const Koa = require('koa');
const body = require('koa-bodyparser');
const router = require('./routes');
const errHandler = require('./midwares/err-handler');
const notFound = require('./midwares/404');

const app = new Koa();

app.use(errHandler);

app.use(body());

app.use(router.routes());

app.use(notFound);

app.listen(80);
