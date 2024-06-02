// firebase-messaging-sw.js

importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging.js');

firebase.initializeApp({
    apiKey: "AIzaSyDlNZ96SZiJrKhwrAYml_0LnsNAGTXCALg",
    authDomain: "notif-84302.firebaseapp.com",
    projectId: "notif-84302",
    storageBucket: "notif-84302.appspot.com",
    messagingSenderId: "796888873984",
    appId: "1:796888873984:web:30d3844225cd10194aace5",
    measurementId: "G-96KMJSMCKD"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: '/firebase-logo.png'
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
