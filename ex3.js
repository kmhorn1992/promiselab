(function() {
    
    var onReject, promise;

promise = new Promise(function(fulfill, reject) {
    return setTimeout(function() {
      return reject(new Error('REJECTED!'));
    }, 300);
  });

  onReject = function(error) {
    return console.log(error.message);
  };

  promise.then(console.log, onReject);

}).call(this);