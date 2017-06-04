const ga = require('universal-ga');

function noop() {}

ga.initialize('UA-77290150-1');

function analytics(state, emitter) {
	function onload() {
		analytics.ga();
	}

	emitter.on('DOMContentLoaded', onload);
}

module.exports = process.env.NODE_ENV === 'production' ? analytics : noop;
