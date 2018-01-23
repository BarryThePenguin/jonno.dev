const hyperstream = require('hyperstream');

module.exports = transform;

function transform() {
	return hyperstream({
		head: {
			_appendHtml: '<link type="text/plain" rel="author" href="//barrythepenguin.github.io/humans.txt" />'
		}
	});
}
