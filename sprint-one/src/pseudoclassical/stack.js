var Stack = function() {
  this.stackSize = 0;
};

Stack.prototype.push = function(value){
  this[this.stackSize] = value;
  this.stackSize++;
};

Stack.prototype.pop = function(){
  this.stackSize && this.stackSize--;
  var tmp = this[this.stackSize];
  delete this[this.stackSize];
  return tmp;
};

Stack.prototype.size = function(){
  return this.stackSize;
};

var newStack = new Stack();
