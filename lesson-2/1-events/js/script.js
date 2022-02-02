// 1. what are function expression

// 2. How to detect an event.

const button = document.querySelector(".btn");
console.log(button);

// b. function expression. Function in variable.

// const handleClick = function () {
//   console.log("I clicked a button");
// };

// // c. Add eventlistener

// button.addEventListener("click", handleClick);

// way 2

// button.onclick = function (event) {
//   console.log("Hello I am here");
//   console.log(event.target.value);
//   console.log(this);
// };

// 3. key press

const myFirstNameInput = document.querySelector("#firstName");

// const handleKeyPress = function (event) {
//   console.log("Key is pressed");
//   console.log(event.target.value);
//   console.log(this.value);
// };

// myFirstNameInput.addEventListener("keydown", handleKeyPress);

myFirstNameInput.onkeydown = function (event) {
  console.log("Key is pressed");
  console.log(this.value);
  console.log(event.target);
};

// 4. MouseOver

const theHoverBtn = document.querySelector(".pet-button");

const handleMouseOver = function (event) {
  theHoverBtn.classList.add("hover");
  console.log(event);
};

theHoverBtn.addEventListener("mouseover", handleMouseOver);

// 5. MouseOut

const handleMouseOut = function () {
  theHoverBtn.classList.remove("hover");
};

theHoverBtn.addEventListener("mouseout", handleMouseOut);

// 6. Select all the li

const allLi = document.querySelectorAll("ul li");
console.log(allLi);

// for (const item of allLi) {
//   item.addEventListener("mouseover", function () {
//     // console.log(event.target.dataset.animal);
//     console.log(this.dataset.animal);
//     item.innerHTML = this.dataset.animal;
//   });
// }

const hoverListItem = function () {
  //   console.log(event.target.dataset.animal);
  console.log(this.dataset.animal);
  this.innerHTML = this.dataset.animal;
};

for (const item of allLi) {
  item.addEventListener("mouseover", hoverListItem);
}

console.dir(theHoverBtn);
console.log(theHoverBtn.isConnected);

// 7 Switch statement

let animal = "bird";

switch (animal) {
  case "dog":
    console.log("Bark!");
    break;
  case "cat":
    console.log("Meow!");
    break;
  case "bird":
    console.log("Tweet!");
    break;
  default:
    console.log("Animal is not found");
}

// 8 setIntervalid

// String "hreinn 5x"

let count = 0;
let nameCount = "Hreinn";
function countFunction() {
  count++;
  console.log(count + " " + nameCount);
  if (count === 5) {
    clearInterval(interVall);
  }
}

const interVall = setInterval(countFunction, 1000);

// 9 setTimeout

const containerDiv = document.querySelector(".container");

function updateDivInner() {
  containerDiv.innerHTML = "Updated text";
}

setTimeout(updateDivInner, 2000);

// 10
