
const CACHE_VERSION = '2.5.0';
const STATIC_CACHE = `otavia-static-v${CACHE_VERSION}`;
const DYNAMIC_CACHE = `otavia-dynamic-v${CACHE_VERSION}`;

// Recursos críticos para cache - incluindo todos os ícones
const STATIC_ASSETS = [
  '/',
  '/index.html',
  '/manifest.json',
  '/lovable-uploads/6b684f19-5da2-4b98-af50-01348ae5951b.png',
  '/lovable-uploads/a5ba88a7-47f7-4390-87dd-5d44d0394356.png',
  '/lovable-uploads/4c603085-2045-4ddc-b523-9a7bfc7de0f7.png'
];

// Install event - cache recursos críticos
self.addEventListener('install', (event) => {
  console.log('Service Worker: Installing v2.5.0...');
  event.waitUntil(
    caches.open(STATIC_CACHE)
      .then((cache) => {
        console.log('Service Worker: Caching static assets including icons');
        return cache.addAll(STATIC_ASSETS);
      })
      .then(() => {
        console.log('Service Worker: Installed successfully v2.5.0');
        // Force ativação imediata para nova versão
        return self.skipWaiting();
      })
      .catch((error) => {
        console.error('Service Worker: Error during installation:', error);
      })
  );
});

// Activate event - limpar caches antigos
self.addEventListener('activate', (event) => {
  console.log('Service Worker: Activating...');
  event.waitUntil(
    caches.keys()
      .then((cacheNames) => {
        return Promise.all(
          cacheNames.map((cacheName) => {
            // Deletar caches que não são da versão atual
            if (cacheName !== STATIC_CACHE && cacheName !== DYNAMIC_CACHE) {
              console.log('Service Worker: Deleting old cache:', cacheName);
              return caches.delete(cacheName);
            }
          })
        );
      })
      .then(() => {
        console.log('Service Worker: Activated successfully');
        // Tomar controle de todas as abas imediatamente
        return self.clients.claim();
      })
  );
});

// Fetch event - estratégias de cache inteligentes
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // Ignorar requisições não-HTTP
  if (!request.url.startsWith('http')) return;

  // Estratégia especial para manifest.json - sempre buscar da rede primeiro
  if (request.url.includes('manifest.json')) {
    event.respondWith(
      fetch(request)
        .then((networkResponse) => {
          if (networkResponse.ok) {
            const responseClone = networkResponse.clone();
            caches.open(STATIC_CACHE)
              .then((cache) => cache.put(request, responseClone));
          }
          return networkResponse;
        })
        .catch(() => {
          return caches.match(request);
        })
    );
    return;
  }

  // Estratégia para HTML - Network First (sempre tentar buscar versão mais nova)
  if (request.headers.get('accept')?.includes('text/html')) {
    event.respondWith(
      fetch(request)
        .then((networkResponse) => {
          // Se conseguiu da rede, cache e retorna
          if (networkResponse.ok) {
            const responseClone = networkResponse.clone();
            caches.open(DYNAMIC_CACHE)
              .then((cache) => cache.put(request, responseClone));
          }
          return networkResponse;
        })
        .catch(() => {
          // Se falhou na rede, tenta do cache
          return caches.match(request)
            .then((cachedResponse) => {
              return cachedResponse || new Response('Offline - Página não disponível', {
                status: 503,
                statusText: 'Service Unavailable'
              });
            });
        })
    );
    return;
  }

  // Estratégia para recursos estáticos - Cache First (incluindo ícones PWA)
  if (request.url.includes('/lovable-uploads/') || 
      request.url.includes('.js') || 
      request.url.includes('.css') ||
      request.url.includes('.png') ||
      request.url.includes('.jpg') ||
      request.url.includes('.svg') ||
      request.url.includes('.ico')) {
    event.respondWith(
      caches.match(request)
        .then((cachedResponse) => {
          if (cachedResponse) {
            return cachedResponse;
          }
          // Se não está no cache, busca da rede e cacheia
          return fetch(request)
            .then((networkResponse) => {
              if (networkResponse.ok) {
                const responseClone = networkResponse.clone();
                caches.open(STATIC_CACHE)
                  .then((cache) => cache.put(request, responseClone));
              }
              return networkResponse;
            });
        })
    );
    return;
  }

  // Para outras requisições - Network First com fallback
  event.respondWith(
    fetch(request)
      .then((networkResponse) => {
        if (networkResponse.ok) {
          const responseClone = networkResponse.clone();
          caches.open(DYNAMIC_CACHE)
            .then((cache) => cache.put(request, responseClone));
        }
        return networkResponse;
      })
      .catch(() => {
        return caches.match(request);
      })
  );
});

// Comunicação com o cliente sobre atualizações
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    console.log('Service Worker: Received SKIP_WAITING message');
    self.skipWaiting();
  }
});

// Notificar cliente sobre nova versão disponível
self.addEventListener('waiting', (event) => {
  console.log('Service Worker: New version waiting');
  self.clients.matchAll().then((clients) => {
    clients.forEach((client) => {
      client.postMessage({
        type: 'UPDATE_AVAILABLE'
      });
    });
  });
});

// Notificar cliente quando nova versão foi ativada
self.addEventListener('controllerchange', (event) => {
  console.log('Service Worker: Controller changed');
  self.clients.matchAll().then((clients) => {
    clients.forEach((client) => {
      client.postMessage({
        type: 'UPDATE_ACTIVATED'
      });
    });
  });
});

// Event listener para beforeinstallprompt no service worker
self.addEventListener('beforeinstallprompt', (event) => {
  console.log('Service Worker: beforeinstallprompt event detected');
  // Não prevenir o evento aqui, deixar o cliente gerenciar
});

// Event listener para appinstalled
self.addEventListener('appinstalled', (event) => {
  console.log('Service Worker: App foi instalado');
  // Notificar todos os clients
  self.clients.matchAll().then((clients) => {
    clients.forEach((client) => {
      client.postMessage({
        type: 'APP_INSTALLED'
      });
    });
  });
});
