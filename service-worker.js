const buildFiles = [
  //
  '/app.js',
  '/index.html',
  '/manifest.json',
];

const staticFiles = [
  '/',
  // '/three/build/three.module.js',
  // 'https://www.googletagmanager.com/gtag/js?id=G-VTKNPJ5HVC',
];

const filesToCache = [...buildFiles, ...staticFiles];

self.numBadges = 0;
const version = 510;

const cacheName = `pwa-cache-${version}`;

const debug = true;

const log = debug ? console.log.bind(console) : () => {};

const IDBConfig = {
  name: 'pwa-db',
  version,
  store: {
    name: `pwa-store`,
    keyPath: 'timestamp',
  },
};

const createIndexedDB = ({ name, store }) => {
  const request = self.indexedDB.open(name, 1);

  return new Promise((resolve, reject) => {
    request.onupgradeneeded = (e) => {
      const db = e.target.result;

      if (!db.objectStoreNames.contains(store.name)) {
        db.createObjectStore(store.name, { keyPath: store.keyPath });
        log('create objectstore', store.name);
      }

      [...db.objectStoreNames]
        .filter((name) => name !== store.name)
        .forEach((name) => db.deleteObjectStore(name));
    };

    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
};

const getStoreFactory =
  (dbName) =>
  ({ name }, mode = 'readonly') => {
    return new Promise((resolve, reject) => {
      const request = self.indexedDB.open(dbName, 1);

      request.onsuccess = (e) => {
        const db = request.result;
        const transaction = db.transaction(name, mode);
        const store = transaction.objectStore(name);

        return resolve(store);
      };

      request.onerror = (e) => reject(request.error);
    });
  };

const openStore = getStoreFactory(IDBConfig.name);

const getCacheStorageNames = async () => {
  const cacheNames = (await caches.keys()) || [];
  const outdatedCacheNames = cacheNames.filter(
    (name) => !name.includes(cacheName),
  );
  const latestCacheName = cacheNames.find((name) => name.includes(cacheName));

  return { latestCacheName, outdatedCacheNames };
};

const prepareCachesForUpdate = async () => {
  const { latestCacheName, outdatedCacheNames } = await getCacheStorageNames();
  if (!latestCacheName || !outdatedCacheNames?.length) {
    return null;
  }

  const latestCache = await caches?.open(latestCacheName);
  const latestCacheKeys = (await latestCache?.keys())?.map((c) => c.url) || [];
  const latestCacheMainKey = latestCacheKeys?.find((url) =>
    url.includes('/index.html'),
  );
  const latestCacheMainKeyResponse = latestCacheMainKey
    ? await latestCache.match(latestCacheMainKey)
    : null;

  const latestCacheOtherKeys =
    latestCacheKeys.filter((url) => url !== latestCacheMainKey) || [];

  const cachePromises = outdatedCacheNames.map((cacheName) => {
    const getCacheDone = async () => {
      const cache = await caches?.open(cacheName);
      const cacheKeys = (await cache?.keys())?.map((c) => c.url) || [];
      const cacheMainKey = cacheKeys?.find((url) =>
        url.includes('/index.html'),
      );

      if (cacheMainKey && latestCacheMainKeyResponse) {
        await cache.put(cacheMainKey, latestCacheMainKeyResponse.clone());
      }

      return Promise.all(
        latestCacheOtherKeys
          .filter((key) => !cacheKeys.includes(key))
          .map((url) => cache.add(url).catch((r) => console.error(r))),
      );
    };
    return getCacheDone();
  });

  return Promise.all(cachePromises);
};

const installHandler = (e) => {
  e.waitUntil(
    self.clients
      .matchAll({
        includeUncontrolled: true,
      })
      .then((clients) => {
        caches
          .open(cacheName)
          .then((cache) =>
            cache.addAll(
              filesToCache.map(
                (file) => new Request(file, { cache: 'no-cache' }),
              ),
            ),
          );
      })
      .catch((err) => console.error('cache error', err)),
  );
};

const activateHandler = (e) => {
  e.waitUntil(
    caches
      .keys()
      .then((names) =>
        Promise.all(
          names
            .filter((name) => name !== cacheName)
            .map((name) => caches.delete(name)),
        ),
      ),
  );
};

const fetchHandler = async (e) => {
  const { request } = e;
  const { url, method, headers, mode, credentials, cache } = request;

  if (url.includes('google')) {
    return false;
  }

  log('[Service Worker] Fetch', url, request.method);

  e.respondWith(
    caches
      .match(request, { ignoreVary: true, ignoreSearch: true })
      .then((response) => {
        if (response) {
          log('from cache', url, request);

          return response;
        }

        if (url.startsWith(location.origin) && !url.match(/\.[a-zA-Z]{2,4}$/)) {
          const indexUrl = url.endsWith('/')
            ? `${url}index.html`
            : `${url}/index.html`;

          log('trying index request:', indexUrl);

          const indexRequest = new Request(indexUrl, {
            method,
            headers,
            credentials,
            cache,
          });
          return caches.match(indexRequest, { ignoreSearch: true });
        }

        return fetch(e.request);
      })
      .then((response) => {
        if (response) {
          return response;
        }

        console.log('no response for url:', url);
        return fetch(e.request);
      })
      .catch((err) =>
        console.error('fetch error:', 'url:', url, 'error:', err),
      ),
  );
};

const getClients = async () =>
  await self.clients.matchAll({
    includeUncontrolled: true,
  });

const hasActiveClients = async () => {
  const clients = await getClients();

  return clients.some(({ visibilityState }) => visibilityState === 'visible');
};

const sendMessage = async (message) => {
  const clients = await getClients();

  clients.forEach((client) => client.postMessage({ type: 'message', message }));
};

const pushHandler = async (e) => {
  const data = e.data.json();
  const { title, message, interaction } = data;

  const options = {
    body: message,
    icon: '/src/img/icons/icon-512x512.png',
    vibrate: [100, 50, 100],
    data: {
      dateOfArrival: Date.now(),
    },
    actions: [
      {
        action: 'confirm',
        title: 'OK',
      },
      {
        action: 'close',
        title: 'Close notification',
      },
    ],
    requireInteraction: interaction,
  };

  e.waitUntil(
    self.registration
      .showNotification(title, options)
      .then(hasActiveClients)
      .then((activeClients) => {
        if (!activeClients) {
          self.numBadges += 1;
          navigator.setAppBadge(self.numBadges);
        }
      })
      .catch((err) => sendMessage(err)),
  );
};

const messageHandler = async ({ data }) => {
  const { type } = data;

  switch (type) {
    case 'clearBadges':
      self.numBadges = 0;
      if ('clearAppBadge' in navigator) {
        navigator.clearAppBadge();
      }

      break;

    case 'SKIP_WAITING':
      const clients = await self.clients.matchAll({
        includeUncontrolled: true,
      });

      if (clients.length < 2) {
        self.skipWaiting();
      }

      break;

    case 'PREPARE_CACHES_FOR_UPDATE':
      await prepareCachesForUpdate();

      break;
  }
};

const syncHandler = async (e) => {
  const title = 'Background Sync demo';
  const message = 'Background Sync demo message';

  if (e.tag.startsWith('sync-demo')) {
    const options = {
      body: message,
      icon: '/src/img/icons/icon-512x512.png',
      vibrate: [100, 50, 100],
      data: {
        dateOfArrival: Date.now(),
      },
      actions: [
        {
          action: 'confirm',
          title: 'OK',
        },
        {
          action: 'close',
          title: 'Close notification',
        },
      ],
    };

    let idbStore;
    const getNotifications = () =>
      new Promise((resolve, reject) => {
        openStore(IDBConfig.store, 'readwrite').then((store) => {
          idbStore = store;
          const request = idbStore.getAll();

          request.onsuccess = (e) => {
            const { result } = request;

            return resolve(result);
          };

          request.onerror = (e) => reject(e);
        });
      });

    e.waitUntil(
      getNotifications().then((notifications) => {
        console.log(notifications);
        const requests = notifications.map(({ message }) => {
          options.body = message;
          return self.registration.showNotification(title, options);
        });

        return Promise.all(requests)
          .then(() => openStore(IDBConfig.store, 'readwrite'))
          .then((idbStore) => idbStore.clear());
      }),
    );
  }
};

const notificationClickHandler = async (e) => {
  e.notification.close();
};

self.addEventListener('install', installHandler);
self.addEventListener('activate', activateHandler);
self.addEventListener('fetch', fetchHandler);
self.addEventListener('push', pushHandler);
self.addEventListener('notificationclick', notificationClickHandler);
self.addEventListener('sync', syncHandler);
self.addEventListener('message', messageHandler);

self.addEventListener('backgroundfetchsuccess', async (e) => {
  const { id } = e.registration;
  const clients = await getClients();

  clients.forEach((client) =>
    client.postMessage({ type: 'background-fetch-success', id }),
  );
});
