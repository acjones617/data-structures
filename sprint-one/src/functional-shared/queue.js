var extend = function(to, from){
  for (var key in from){
    to[key] = from[key];
  }
};

var makeQueue = function(){
  var instance = {stackSize: 0};
  extend(instance, queueMethods);

  return instance;
};

var queueMethods = {};

queueMethods.enqueue = function(value) {
  this.stackSize++;
  for (var i = this.stackSize - 1; i > 0; i--) {
    this[i] = this[i-1];
  }

  this[0] = value;
};

queueMethods.dequeue = function() {
  this.stackSize && this.stackSize--;
  var tmp = this[this.stackSize];
  delete this[this.stackSize];
  return tmp;
};

queueMethods.size = function() {
  return this.stackSize;
};
