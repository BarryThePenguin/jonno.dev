import './css/site';
import resume from './views/resume.html';

const loading = 3200;

setTimeout(() => {
	global.document.body.innerHTML = resume;
}, loading);
