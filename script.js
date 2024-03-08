var yourName = document.querySelector(".your-name input");
var partnerName = document.querySelector(".partner-name input");
var calButton = document.querySelector(".button-container button");
var loveResBox = document.querySelector(".love-results");
var names = document.querySelector("#names");
var percentage = document.querySelector("#percentage");
var anotherCalButton = document.querySelector(".love-results button");
var resultPara = document.querySelector(".result-para");
var primaryBox = document.querySelector(".primary-box");
var loveResBox = document.querySelector(".love-results");

// eventlistener on calculate button;
calButton.addEventListener("click", () => {
  if (yourName.value === "" || partnerName.value === "") {
    console.log("Name required");
  } else {
    names.innerHTML = (
      yourName.value +
      " & " +
      partnerName.value
    ).toUpperCase();
    loveCalculator();
    hideBox();
  }
});

//function for calculating
function loveCalculator() {
  let lovePercentage = Math.round(Math.random() * 100) + 1;
  if (lovePercentage >= 70) {
    percentage.innerHTML = lovePercentage + "%";
    resultPara.innerHTML =
      "Your bond is strong and healty, ignore minor mistakes and build each other's process.";
  } else if (lovePercentage >= 30 && lovePercentage < 70) {
    percentage.innerHTML = lovePercentage + "%";
    resultPara.innerHTML =
      " Your bond is neither strong nor weak. Try to trust on each other, Trusting each other makes the bond stronger. Otherwise you will lose each other.";
  } else if (lovePercentage >= 6 && lovePercentage < 30) {
    percentage.innerHTML = lovePercentage + "%";
    resultPara.innerHTML =
      " Your bond is weak. Won't be making longer or maybe Yes if tried to solve each other's problems.";
  } else {
    percentage.innerHTML = lovePercentage + "%";
    resultPara.innerHTML = " Chhor de bhai.. Breakup Now!!";
  }
}

//function for hiding input box;
function hideBox() {
  primaryBox.classList.add("hidden");
  loveResBox.classList.remove("hidden");
}

//funtion for reset button;
function resetButton() {
  primaryBox.classList.remove("hidden");
  loveResBox.classList.add("hidden");
  yourName.value = "";
  partnerName.value = "";
}

anotherCalButton.addEventListener("click", resetButton);
