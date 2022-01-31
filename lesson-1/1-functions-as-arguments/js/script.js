// These are often called callbacks. It is very common
// to pass functions as arguments to other ***
// functions and have the receiving function execute them.

// Normal way of creating a function. Call it manually

function showMeMessage() {
  console.log("Hello one");
}

showMeMessage();

// Instantly invoked function expression. Calls itself.

(function doSomeThing() {
  console.log("Hello two");
})();

// Hoisting. Call the function before declaring it.

doSomeThing();

// Does not work in variable function.

function doSomeThing() {
  console.log("Hello three");
}

//

function logSomeThing(someArgument) {
  console.log(typeof someArgument);
}

logSomeThing("Hreinn");
logSomeThing(456);

function justSomeFunction() {
  console.log("Hello I am a happy function");
}

logSomeThing(justSomeFunction);

const justAHappyFunction = function () {
  console.log("Hello I am a happy function");
};

logSomeThing(justAHappyFunction);

// Exercise. Make two functions. Normal and selfcalling

// Normal function
function someFunc() {
  console.log("Standard function");
}

someFunc();

// Self calling function
(function () {
  console.log("Self calling function");
})();

// Exercise. Hoisting

justAnotherFunction();

function justAnotherFunction() {
  console.log("Hoisted function");
}
