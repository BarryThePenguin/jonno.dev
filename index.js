const css = require('sheetify');
const choo = require('choo');

css('./css/site.scss');

const app = choo();

app.router(route => [
	route('/', require('./pages/resume'))
]);

const tree = app.start();
document.body.appendChild(tree);
