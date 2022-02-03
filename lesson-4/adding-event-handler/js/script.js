// 1. adding event handler in a loop

// 2. scroll event

// 3. source tree

const myDivs = document.querySelectorAll(".container > div");
console.log(myDivs);

for (let i = 0; i < myDivs.length; i++) {
  myDivs[i].onclick = function (event) {
    console.log(event.target.dataset.price);
    console.log(this.dataset.price);
    console.log(this.innerHTML);
  };
}
