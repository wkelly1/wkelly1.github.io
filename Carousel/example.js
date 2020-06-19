function getValue(id) {
  let value = document.getElementById(id).value;
  if (value === "true"){
    return true;
  } else  if (value === "false"){
    return false;
  } else if (value.match(/^-{0,1}\d+$/)){
    return parseInt(value);
  } else {
    return value;
  }
}

let update = document.getElementById("update");
update.addEventListener("click", function () {
  let settings = {
    id: "example",
    rotation: {
      amount: getValue("rotationAmount"), // How many elements it moves per rotation
      timingFunction: getValue("timingFunction"), // Timing function of the movement
      duration: getValue("rotationDuration"), // How long the movement takes
    },
    buttons: {
      hide: getValue("buttonHide"), // Whether to hide the buttons
      disableForSingle: getValue("disableForSingle"), // Disables the buttons when there is only one element in the carousel
    },
    display: {
      number: 5, // Number of elements to display at a time,
      duration: getValue("displayDuration"), // If specified then the carousel will rotate every time that number of milliseconds has elapsed
      startOffset: getValue("startOffset"), // Waits this long before auto rotating,
      direction: getValue("displayDirection"), // The direction to move the carousel either left or right
    },
    class: {
      itemClassName: "carousel-item", // Used if you have altered the class for an item
    },
  };

  example
    .updateSettings(settings)
    .then(() => console.log("Success"))
    .catch(() => console.log("Failed"));
});

let inputs = document.getElementsByTagName("input");
for (i = 0; i < inputs.length; i++) {
  inputs[i].addEventListener("input", resizeInput); // bind the "resizeInput" callback on "input" event
  resizeInput.call(inputs[i]); // immediately call the function
}

function resizeInput() {
  this.style.width = this.value.length + "ch";
}
