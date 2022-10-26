const calculator = document.querySelector(".calculator");

const keys = document.querySelector(".calculator__keys");

const display = document.querySelector(".calculator__display");

keys.addEventListener("click", function (e) {
  // click button
  if (e.target.matches("button")) {
    const key = e.target;
    const action = key.dataset.action;
    const keyText = key.textContent;
    const displayNum = display.textContent;

    // release operator pressed
    Array.from(key.parentNode.children).forEach(function (k) {
      k.classList.remove("pressed");
    });

    if (action === "add") {
      console.log("add op");
    }
    if (action === "subtract") {
      console.log("subtract op");
    }
    if (action === "multiply") {
      console.log("multiply op");
    }
    if (action === "divide") {
      console.log("divide op");
    }

    if (action === "decimal") {
      display.textContent = displayNum + ".";
    }
    if (action === "clear") {
      display.textContent = "0";
      calculator.dataset.first = "";
      calculator.dataset.operator = "";
    }

    if (action === "calculate") {
      const num1 = calculator.dataset.first;

      const op = calculator.dataset.operator;

      const num2 = displayNum;

      if (num1 && num2) {
        display.textContent = calculate(num1, op, num2);
      }
    }

    // calculate

    function calculate(num1, op, num2) {
      let result = "";
      if (op === "add") {
        result = parseFloat(num1) + parseFloat(num2);
      }
      if (op === "subtract") {
        result = parseFloat(num1) - parseFloat(num2);
      }
      if (op === "multiply") {
        result = parseFloat(num1) * parseFloat(num2);
      }
      if (op === "divide") {
        result = parseFloat(num1) / parseFloat(num2);
      }

      return result;
    }

    // when operator key pressed
    if (
      action === "add" ||
      action === "subtract" ||
      action === "multiply" ||
      action === "divide"
    ) {
      if (displayNum !== "0") {
        key.classList.add("pressed");
        calculator.dataset.opType = "operator";
        calculator.dataset.operator = action;
        calculator.dataset.first = displayNum;
      }
    }

    const opType = calculator.dataset.opType;

    // number
    if (!action) {
      if (displayNum === "0" || opType === "operator") {
        display.textContent = keyText;
        calculator.dataset.opType = "";
      } else {
        display.textContent = displayNum + keyText;
      }
    }
  }
});
