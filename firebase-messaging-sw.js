// firebase-messaging-sw.js
importScripts('https://www.gstatic.com/firebasejs/10.12.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.12.0/firebase-messaging-compat.js');

const firebaseConfig = {
    apiKey: "AIzaSyDCDU511atCPvhssc5YRsF67_CZO_j90t0",
    authDomain: "comments-4b60f.firebaseapp.com",
    projectId: "comments-4b60f",
    storageBucket: "comments-4b60f.firebasestorage.app",
    messagingSenderId: "648616563060",
    appId: "1:648616563060:web:7108dd10ace1f364139c21",
    measurementId: "G-CP4T24Z4YC"
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

// استقبال إشعارات حتى لو الموقع مقفل
messaging.onBackgroundMessage((payload) => {
    console.log('Background message:', payload);
    const notificationTitle = payload.notification.title;
    const notificationOptions = {
        body: payload.notification.body,
        icon: '/church-icon.png',
        badge: '/badge-icon.png'
    };
    self.registration.showNotification(notificationTitle, notificationOptions);
});