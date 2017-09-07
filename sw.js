/* global self */

const VERSION = String(Date.now());
const URLS = [
	'/',
	'/bundle.css',
	'/bundle.js',
	'assets/icon.png'
];

// Respond with cached resources
self.addEventListener('fetch', e => {
	e.respondWith(self.caches.match(e.request).then(request => {
		if (request) {
			return request;
		}
		return self.fetch(e.request);
	}));
});

// Register worker
self.addEventListener('install', e => {
	e.waitUntil(self.caches.open(VERSION).then(cache => {
		return cache.addAll(URLS);
	}));
});

// Remove outdated resources
self.addEventListener('activate', e => {
	e.waitUntil(self.caches.keys().then(keyList => {
		return Promise.all(keyList.map((key, i) => {
			if (keyList[i] !== VERSION) {
				return self.caches.delete(keyList[i]);
			}

			return undefined;
		}));
	}));
});
