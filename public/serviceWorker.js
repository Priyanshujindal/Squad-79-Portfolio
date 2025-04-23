// Service Worker for Squad 79 Portfolio
const CACHE_NAME = 'squad79-portfolio-v4'; // Updated cache version
const OFFLINE_URL = '/404-offline';
const OFFLINE_ASSETS = [
  '/',
  '/index.html',
  '/favicon.ico', // Updated favicon path
  '/404',
  '/404-offline',
  '/assets/images/logo.png',
  '/assets/css/index.css',
  'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css',
  'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css',
  'https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap'
];

// Install event - cache offline page and key assets
self.addEventListener('install', (event) => {
  event.waitUntil(
    (async () => {
      const cache = await caches.open(CACHE_NAME);
      console.log('Caching offline page and assets');
      // Cache offline page and essential assets
      await cache.addAll(OFFLINE_ASSETS);
    })()
  );
  // Force the waiting service worker to become the active service worker
  self.skipWaiting();
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    (async () => {
      // Clean up old caches
      const cacheNames = await caches.keys();
      await Promise.all(
        cacheNames.filter((cacheName) => {
          return cacheName !== CACHE_NAME;
        }).map((cacheName) => {
          console.log('Deleting old cache:', cacheName);
          return caches.delete(cacheName);
        })
      );
      // Take control of all clients as soon as activated
      await clients.claim();
    })()
  );
});

// Fetch event - network first, fallback to cache, then offline page
self.addEventListener('fetch', (event) => {
  // Only handle GET requests
  if (event.request.method !== 'GET') return;
  
  // Skip some requests that service worker shouldn't handle
  const url = new URL(event.request.url);
  if (url.origin !== self.location.origin) return; // Skip cross-origin requests
  if (url.pathname.startsWith('/api/')) return; // Skip API calls
  
  event.respondWith(
    (async () => {
      try {
        // Try from network first (stale-while-revalidate strategy)
        const networkResponse = await fetch(event.request);
        
        // Update cache with new response
        const cache = await caches.open(CACHE_NAME);
        cache.put(event.request, networkResponse.clone());
        
        return networkResponse;
      } catch (error) {
        // Network failed, try from cache
        const cachedResponse = await caches.match(event.request);
        if (cachedResponse) return cachedResponse;
        
        // If it's a navigation request (HTML page) and not in cache, serve the cached offline page
        if (event.request.mode === 'navigate' || 
            (event.request.method === 'GET' && 
             event.request.headers.get('accept')?.includes('text/html'))) {
          // Return the cached offline page instead of redirecting
          const offlineCache = await caches.open(CACHE_NAME);
          const offlineResponse = await offlineCache.match(OFFLINE_URL);
          if (offlineResponse) {
            console.log('Serving cached offline page');
            return offlineResponse;
          } else {
            // Fallback to NotFound page if offline page is not in cache
            const notFoundResponse = await offlineCache.match('/404');
            if (notFoundResponse) {
              console.log('Serving cached 404 page');
              return notFoundResponse;
            }
          }
        }
        
        // For other resources not in cache, return error
        return new Response('Network error happened', {
          status: 408,
          headers: { 'Content-Type': 'text/plain' }
        });
      }
    })()
  );
});

// Handle push notifications (if needed in the future)
self.addEventListener('push', (event) => {
  if (event.data) {
    const data = event.data.json();
    const options = {
      body: data.message,
      icon: '/favicon.ico',
      badge: '/favicon.ico'
    };
    
    event.waitUntil(self.registration.showNotification('Squad 79 Portfolio', options));
  }
});

// Handle notification clicks
self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  event.waitUntil(
    clients.openWindow('/')
  );
});
