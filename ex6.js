
  
    require('es6-promise');
  
    goodPromise = Promise.resolve('all good');
  
    badPromise = Promise.reject(new Error('not good at all'));
  
    badPromise.catch(function(error) {
      return console.error(error.message);
    });

