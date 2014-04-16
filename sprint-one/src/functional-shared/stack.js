var extend = function(to, from){
  for (var key in from){
    to[key] = from[key];
  }
};

var stackMethods = {};

stackMethods.push = function(value){
  this[this.stackSize] = value;
  this.stackSize++;
};

stackMethods.pop = function(){
  this.stackSize && this.stackSize--;
  var tmp = this[this.stackSize];
  delete this[this.stackSize];
  return tmp;
};

stackMethods.size = function(){
  return this.stackSize;
};

var makeStack = function() {
  var instance = {stackSize: 0};
  extend(instance, stackMethods);

  // // Use an object with numeric keys to store values
  // var storage = {};
  // var size = 0; // Hint: set an initial value here

  return instance;  // Hey! Copy your code from src/functional/stack.js and paste it here
};

// var newStack = makeStack();
// newStack.push(1);
// {size: 1, 0: 1, push, pop, size};
