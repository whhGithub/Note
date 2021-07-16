let CACHE_NAME = 'Note'
let urlsToCache = [
    '/favicon.ico',
    '/assets/index.d15889db.js',
    '/assets/index.d54a1910.css',
    '/icons/manifest-icon-192.png',
    '/manifest.webmanifest',
    '/registerSW.js',
    '/assets/vendor.1fa15d5f.js'
]
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
        .then(cache => cache.addAll(urlsToCache))
    )
})

self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches.match(event.request)
        .then(function(response) {
            // Cache hit - return response
            if (response) {
                return response;
            }
            return fetch(event.request);
        })
    );
});

self.addEventListener('activate', function(event) {

    var cacheAllowlist = ['Note'];

    event.waitUntil(
        caches.keys().then(function(cacheNames) {
            return Promise.all(
                cacheNames.map(function(cacheName) {
                    if (cacheAllowlist.indexOf(cacheName) === -1) {
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
});