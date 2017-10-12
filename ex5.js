promise = new Promise(function(fulfill, reject) {
    return fulfill('PROMISE VALUE');
  });

  promise.then(console.log);

  console.log('MAIN PROGRAM');