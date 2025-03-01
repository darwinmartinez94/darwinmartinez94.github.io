// sw.js
self.addEventListener('install', (event) => {
    console.log('Service Worker instalado');
});

self.addEventListener('activate', (event) => {
    console.log('Service Worker activado');
});

self.addEventListener('push', (event) => {
    const options = {
        body: '¡Entraste a mi aplicación!',
        icon: 'tinder-logo.png',
        badge: 'tinder-logo.png',
    };

    event.waitUntil(
        self.registration.showNotification('Notificación Tinder', options)
    );
});
