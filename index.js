const css = require('sheetify');
const choo = require('choo');
const log = require('choo-log');

css('tachyons');
css('./css/site');
css('./css/print');

const app = choo();

app.use(log());

app.use(require('./analytics'));

app.route('/', require('./pages/resume'));

app.mount('body');
