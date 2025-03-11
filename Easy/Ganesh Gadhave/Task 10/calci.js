const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button");
let output = "";

const calculate = (value) => {
  if (value === "=") {
    output = output.replace("%", "/100");
    display.value = eval(output);
  } else if (value === "AC") {
    output = "";
    display.value = "";
  } else if (value === "DEL") {
    output = output.slice(0, -1);
    display.value = output;
  } else {
    output += value;
    display.value = output;
  }
};

buttons.forEach((button) => {
  button.onclick = () => calculate(button.dataset.value);
});
