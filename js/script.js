let expression = "";

const displayInput = document.querySelector("#displayInputContainer");
const displayResult = document.querySelector(".displayResultContainer");
const buttons = document.querySelectorAll(".buttonContainer>span");

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const value = btn.innerHTML.trim();
    handleButtonClick(value);
  });
});

function handleButtonClick(btnValue) {
  if (btnValue == "AC") {
    expression = "";
    updateInputDisplay();
    updateResultDisplay(null);
  }
}

function updateInputDisplay() {
  displayInput.innerHTML = expression;
}

function updateResultDisplay(result) {
  result = null
    ? (displayResult.innerHTML = "")
    : (displayResult.innerHTML = result);
}
