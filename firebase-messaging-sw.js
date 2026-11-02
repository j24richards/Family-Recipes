// Firebase Cloud Messaging service worker for the Family Recipes admin alerts.
// Shows "New recipe" push notifications when the admin page is closed or the phone is locked.
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

self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(self.clients.claim()));
