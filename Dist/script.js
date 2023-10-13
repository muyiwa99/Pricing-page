"use strict";

// The toggle switch
const toggleSwitch = document.querySelector("#switch");

// Monthly prices
const monthlyPrice = document.querySelectorAll(".monthly");
// Annual prices
const annualPrice = document.querySelectorAll(".annual");

// Adding an event listner which listens out for then the swich is checked
toggleSwitch.addEventListener("change", function () {
  // When checked it the switch will toglle over to the annual price and this if statemnt hides the monthly prices and displays the annual.
  if (this.checked) {
    monthlyPrice.forEach((price) => {
      price.style.display = "none";
    });
    annualPrice.forEach((price) => {
      price.style.display = "block";
    });
  }
  // Else stament does the oposite.
  else {
    monthlyPrice.forEach((price) => {
      price.style.display = "block";
    });
    annualPrice.forEach((price) => {
      price.style.display = "none";
    });
  }
});
