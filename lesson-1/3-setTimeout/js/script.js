// The setTimeout method is used to execute a
// function after a specified period of time.

setTimeout(function () {
  console.log("Hello I am Hreinn");
}, 2000);

// 1. Select the class loader

const loader = document.querySelector(".loader");

//2. Use the setTimeout

setTimeout(function () {
  loader.innerHTML = "Finished downloading";
}, 5000);

// Change the inner html
