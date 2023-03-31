function isBeforeOperator() {
    // Check if operator is not empty
    if (!operator) {
        return true;
    }
    else {
        return false;
    }
}

function updateDisplay() {
    if (isBeforeOperator()) {
        secondaryDisplay.classList.add("hide");
        if (number1 == "") {
            mainDisplay.textContent = 0;
        }
        else {
            mainDisplay.textContent = number1;
        }
        console.log(number1)
    }
    else {
        secondaryDisplay.classList.remove("hide");
        console.log(number1);
        secondaryDisplay.textContent = number1 + " " + operator;
        if (number2 == "") {
            mainDisplay.textContent = 0;
        }
        else {
            mainDisplay.textContent = number2;
        }

    }
}

function sum(e) {
    if (checkPair()) {
        number1 = parseInt(number1)
        number2 = parseInt(number2)
        switch (operator) {
            case "+":
                total = number1 + number2;
                break;

            case "-":
                total = number1 - number2;
                break;

            case "x":
                total = number1 * number2;
                break;

            case "÷":
                if (number2 === 0) {
                    alert("divided by 0 is not allowed!")
                    clear();
                    return;
                }
                total = number1 / number2;
                break;
        }
        number1 = total
        number2 = "";
        operator = ""
        mainDisplay.textContent = number1;
    }
    else {
        return;
    }
}

function checkPair() {
    if (number1 && number2 && operator) {
        return true;
    }
    else {
        return false;
    }

}

function clear() {
    number1 = "";
    number2 = "";
    operator = "";
    total = 0;
    updateDisplay();
}

const mainDisplay = document.querySelector(".display h1");
const secondaryDisplay = document.querySelector(".display h3")
let number1 = "";
let number2 = "";
let operator;
let total;
let button;
let operatorList = { divide: "÷", multiply: "x", subtraction: "-", addition: "+" };

for (i = 0; i < 10; i++) {
    button = document.querySelector(`#${CSS.escape("" + i)}`)
    button.addEventListener("click", (e) => {   
        
        updateDisplay()
        if (isBeforeOperator()) {
            number1 += e.target.id;
        } else {
            number2 += e.target.id;
        }

        updateDisplay()
    });
}

Object.keys(operatorList).forEach(function (key) {
    document.querySelector("#" + key).addEventListener("click", (e) => {
        if (checkPair()) {
            sum();
        }
        operator = operatorList[key];
        updateDisplay();
    });
});

document.querySelector("#total").addEventListener("click", sum);

document.querySelector("#clear").addEventListener("click", clear);
