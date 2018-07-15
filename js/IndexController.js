

if (navigator.serviceWorker) {
    console.log('sw registration started.');
    navigator.serviceWorker.register('/sw.js').then(function() {
      console.log('sw registration completed.');
    }).catch(function() {
      console.log('sw registration failed.');
    });
  } else {
    console.log('SW not supported');
  }