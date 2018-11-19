if ('serviceWorker' in navigator && 'PushManager' in window) {
  window.addEventListener('load', function() {
    console.log('Service Worker is supported');
  
    navigator.serviceWorker.register('sw.js')
    .then(function(regsw) {
      console.log(regsw);
    })
    .catch(function(error) {
      console.error('Service Worker Error', error);
    });
  });
} else {
  console.warn('Service Worker is not supported');
}