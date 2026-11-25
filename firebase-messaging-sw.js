// Firebase Cloud Messaging service worker for the Family Recipes admin alerts.
// Shows "New recipe" push notifications when the admin page is closed or the phone is locked.
// Wrapped so the offline copy below still works if these can't load (for example with no signal).
try {
  importScripts('https://www.gstatic.com/firebasejs/10.12.2/firebase-app-compat.js');
  importScripts('https://www.gstatic.com/firebasejs/10.12.2/firebase-messaging-compat.js');
  firebase.initializeApp({
    apiKey: "AIzaSyBERCFj3kTXdPU_xcsHg9eYCbTR7WcUrXE",
    authDomain: "family-recipes-5a5fc.firebaseapp.com",
    projectId: "family-recipes-5a5fc",
    storageBucket: "family-recipes-5a5fc.firebasestorage.app",
    messagingSenderId: "356079086888",
    appId: "1:356079086888:web:40c117459ae8d14b97b41d"
  });
  // The push carries a notification payload, so FCM displays it automatically
  // and opens the admin page (fcmOptions.link) when tapped.
  firebase.messaging();
} catch (e) {}

self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(self.clients.claim()));

// ---- Works without Wi-Fi ----
// Every page and data file from this site is saved as it loads (network first, so updates always win).
// With no signal, the saved copy is used instead. Other sites (forms, AI helper, fonts) are left alone.
const OFFLINE_CACHE = 'fr-offline-v1';
self.addEventListener('activate', e => e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k.startsWith('fr-offline-') && k !== OFFLINE_CACHE).map(k => caches.delete(k))))));
self.addEventListener('fetch', event => {
  const req = event.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (url.origin !== self.location.origin) return;
  event.respondWith((async () => {
    const cache = await caches.open(OFFLINE_CACHE);
    const saved = () => cache.match(req).then(hit => hit || cache.match(req, { ignoreSearch: true })).then(hit => hit || (req.mode === 'navigate' ? cache.match('index.html', { ignoreSearch: true }).then(x => x || cache.match('./')) : null));
    const net = fetch(req).then(res => {
      if (res && res.ok && res.type === 'basic') {
        const copy = res.clone(), copy2 = req.mode === 'navigate' ? res.clone() : null;
        event.waitUntil((async () => {
          try { await cache.delete(req, { ignoreSearch: true }); await cache.put(req, copy); if (copy2) await cache.put('index.html', copy2); } catch (e) {}
        })());
      }
      return res;
    });
    // Slow signal: after 5 seconds use the saved copy if there is one, otherwise keep waiting for the network.
    const slow = new Promise(resolve => setTimeout(resolve, 5000)).then(() => saved()).then(hit => hit || net);
    try { return await Promise.race([net, slow]); }
    catch (e) { const hit = await saved(); if (hit) return hit; throw e; }
  })());
});

// Tapping an alert the admin page showed itself (page was open) opens/focuses the admin page.
self.addEventListener('notificationclick', event => {
  if (event.notification.tag !== 'fr-new-recipe') return; // FCM handles its own notifications
  event.notification.close();
  event.waitUntil(clients.matchAll({ type: 'window', includeUncontrolled: true }).then(list => {
    for (const c of list) { if (c.url.indexOf('admin.html') >= 0 && 'focus' in c) return c.focus(); }
    return clients.openWindow('./admin.html');
  }));
});
