var CACHE_NAME = 'cv.sijmenhuizenga.nl';

self.addEventListener('install', function(event) {});

self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches.open(CACHE_NAME).then(function(cache) {
            return fetch(event.request.clone()).then(function(response) {
                cache.put(event.request, response.clone());
                console.log("Updated cache", event.request.url);
                return response;
            }, function(){
                console.log("Loading from cache", event.request.url);
                return cache.match(event.request);
            })
        })
    );
});