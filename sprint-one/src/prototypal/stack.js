var makeStack = function() {
  var newStack = Object.create(stackMethods);
  newStack.stackSize = 0;

  return newStack;  // Hey! Copy your code from src/functional/stack.js and paste it here
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

// Attaching stackMethods to makeStack function/object doesn't work?
// Error: "stackMethods is not defined"
//
// var makeStack = function() {
//   var newStack = Object.create(makeStack.stackMethods);
//   newStack.stackSize = 0;

//   return newStack;  // Hey! Copy your code from src/functional/stack.js and paste it here
// };

// makeStack.stackMethods = {};

// makeStack.stackMethods.push = function(value){
//   this[this.stackSize] = value;
//   this.stackSize++;
// };

// makeStack.stackMethods.pop = function(){
//   this.stackSize && this.stackSize--;
//   var tmp = this[this.stackSize];
//   delete this[this.stackSize];
//   return tmp;
// };

// makeStack.stackMethods.size = function(){
//   return this.stackSize;
// };
