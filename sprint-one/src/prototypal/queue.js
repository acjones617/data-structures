var makeQueue = function(){
  var instance = Object.create(queueMethods);
  instance.stackSize = 0;

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
