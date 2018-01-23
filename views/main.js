const html = require('choo/html');

const TITLE = 'Jonathan Haines';

module.exports = view;

function view(state, emit) {
	if (state.title !== TITLE) {
		emit(state.events.DOMTITLECHANGE, TITLE);
	}
	return html`
    <body class="sans-serif">
      <h1 class="f1 f-headline-ns pa3 pa4-ns bg-white">
        Jonathan Haines
      </h1>
			<h2 class="f1 f-headline-ns pa3 pa4-ns bg-white">
				Frontend Developer
			</h2>
			<a href="/resume" class="f1 f-subheadline-ns db pa3 pa4-ns bg-white link gray underline">
				See what I do
			</a>
    </body>
  `;
}
