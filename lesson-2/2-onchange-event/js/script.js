// Onchange

// Detect the selection of the select option input

const dropDown = document.querySelector("select");

// Select circle container

const circleContainer = document.querySelector(".circles-container");

// Detect onchange on dropdown

dropDown.onchange = function (event) {
  console.log(event.target.value);
  console.log(this.value); // event.target === this
  //   circle.innerHTML = this.value;
  circleContainer.innerHTML = "";

  for (let i = 1; i <= event.target.value; i++) {
    circleContainer.innerHTML += `<li class="circle-items">${i}</li>`;
  }
};
