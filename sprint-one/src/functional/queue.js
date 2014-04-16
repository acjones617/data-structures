var makeQueue = function(){
  var instance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var size = 0;

  // Implement the methods below

  instance.enqueue = function(value){
    size++;
    for ( var i = size - 1; i > 0; i-- ) {
      storage[i] = storage[i - 1];
    }

    storage[0] = value;
  };

  instance.dequeue = function(){
    size && size--;
    var tmp = storage[size];
    delete storage[size];
    return tmp;
  };

  instance.size = function(){
    return size;
  };

  return instance;
};
