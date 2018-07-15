navigator.serviceWorker.register('sw.js').then(function(reg){
    console.log('yay');
    console.log(reg);
}).catch(function(err){
    console.log('error!');
    console.log(err);
})