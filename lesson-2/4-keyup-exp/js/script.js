const textAreaContainer = document.querySelector("textarea");
const charCount = document.querySelector(".character-count span");
const button = document.querySelector("button");
console.dir(button.disabled);

textAreaContainer.onkeyup = function (event) {
  const numberOfChars = event.target.value.length;
  charCount.innerHTML = numberOfChars;

  //   if (numberOfChars >= 5) {
  //     button.disabled = false;
  //   } else {
  //     button.disabled = true;
  //   }

  button.disabled = numberOfChars < 5;
};
