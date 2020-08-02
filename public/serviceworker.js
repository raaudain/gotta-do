const CACHE_NAME = "version-1";
const urlsToCaches = ["index.html", "offline.html"];

const self = this;

// Install serviceWorker
self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      console.log("Opened cache");

      return cache.addAll(urlsToCaches);
    })
  );
});

// Listen for requests
self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(() => {
      // Look for internet requests
      return (
        fetch(event.request)
          // If there is no internet...
          .catch(() => caches.match("offline.html"))
      );
    })
  );
});

// Activate the serviceWorker
self.addEventListener("activate", event => {
  const neededCache = [];

  neededCache.push(CACHE_NAME);

  event.waitUntil(
    caches.keys().then(cacheNames =>
      Promise.all(
        cacheNames.map(cacheName => {
          if (!neededCache.includes(cacheName)) return caches.delete(cacheName);
        })
      )
    )
  );
});
