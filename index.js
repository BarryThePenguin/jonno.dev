const choo = require('choo');
const css = require('sheetify');

css('tachyons');
css('./css/site');
css('./css/print');

const app = choo();

if (process.env.NODE_ENV !== 'production') {
	app.use(require('choo-devtools')());
}

app.use(require('./analytics'));
app.use(require('choo-service-worker')());

app.route('/', require('./views/main'));
app.route('/resume', require('./views/resume'));
app.route('/*', require('./views/404'));

if (module.parent) {
	module.exports = app;
} else {
	app.mount('body');
}
