var Queue = function() {
  this.stackSize = 0;
};

Queue.prototype.enqueue = function(value) {
  this.stackSize++;
  for (var i = this.stackSize - 1; i > 0; i--) {
    this[i] = this[i-1];
  }

  this[0] = value;
};

Queue.prototype.dequeue = function() {
  this.stackSize && this.stackSize--;
  var tmp = this[this.stackSize];
  delete this[this.stackSize];
  return tmp;
};

Queue.prototype.size = function() {
  return this.stackSize;
};

var queue = new Queue();
