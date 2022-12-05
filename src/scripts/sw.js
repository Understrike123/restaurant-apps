import { precacheAndRoute } from 'workbox-precaching';

// file service worker sebagai entry point jika diakses melalui production environment / serve
precacheAndRoute(self.__WB_MANIFEST);

self.addEventListener('install', () => {
    console.log('Service Worker Installed');
    self.skipWaiting();
});

self.addEventListener('push', () => {
    console.log('Service Worker Pushed');
});
