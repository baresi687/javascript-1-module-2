// The setInterval method is similar to
// setTimeout but it executes a function at
// a certain interval until it is cleared.

// Infinite interval

// setInterval(function () {
//   console.log("Hello World");
// }, 2000);

// Stop the interval

// Example Question

// I want to add li to the ul with class
// .container li with values from 1 to 10 every 2 seconds

// 1. Select the .container ul
// 2. declare a count variable
// 3. setInterval Method
// 4. you need to put the time you want this interval to keep running
// 5. do the increment
// 6. Create the li
// 7. add to the innerHTML of this li the count.
// 8. use append  use apend to add the li to the ul

// OR >> container.innerHTML += <li>${countSecond}</li>;

// 9.  YOU NEED TO assign the setInterval to a variable
// 10.  you need to check if the count is > than 10 then you clear
// the interval

const ulContainer = document.querySelector(".container");

let count = 0;
const interValId = setInterval(function () {
  count++;
  let listItem = document.createElement("li");
  listItem.classList.add("linear-gradient");
  listItem.innerHTML = count;
  ulContainer.append(listItem);
  if (count === 10) {
    clearInterval(interValId);
  }
}, 1000);
