"use strict";
const inputs = document.querySelectorAll("input");
const screenNumber = document.querySelector(".input--number");
const root = document.querySelector(":root");
const numbers = document.querySelectorAll("[data-number]");
const operators = document.querySelectorAll("[data-operator]");
const dotBtn = document.querySelector("[data-dot]");
const equalBtn = document.querySelector("[data-equal]");
const deleteBtn = document.querySelector("[data-del]");
const resetBtn = document.querySelector("[data-reset]");

const toggleFirstTheme = function () {
  root.style.setProperty("--main-bg", "hsl(222, 26%, 31%)");
  root.style.setProperty("--keypad-toggle-bg", "hsl(223, 31%, 20%)");
  root.style.setProperty("--screen-bg", "hsl(224, 36%, 15%)");
  root.style.setProperty("--del-reset-bg", "hsl(225, 21%, 49%)");
  root.style.setProperty("--del-reset-shadow", "hsl(224, 28%, 35%)");
  root.style.setProperty("--del-reset-clr", "hsl(0, 0%, 100%)");
  root.style.setProperty("--input-equal-bg", "hsl(6, 63%, 50%)");
  root.style.setProperty("--equal-shadow", "hsl(6, 70%, 34%)");
  root.style.setProperty("--equal-clr", "hsl(0, 0%, 100%)");
  root.style.setProperty("--keys-clr", "hsl(221, 14%, 31%)");
  root.style.setProperty("--keys-bg", "hsl(30, 25%, 89%)");
  root.style.setProperty("--keys-shadow", "hsl(28, 16%, 65%)");
  root.style.setProperty("--calc-theme-screen-clr", "hsl(0, 0%, 100%)");

  root.style.setProperty("--keys-hover", "hsl(0, 0%, 100%)");
  root.style.setProperty("--del-reset-hover", "hsl(200, 23%, 67%)");
  root.style.setProperty("--equal-hover", "hsl(6, 84%, 65%)");
};

const toggleSecondTheme = function () {
  root.style.setProperty("--main-bg", "hsl(0, 0%, 90%)");
  root.style.setProperty("--keypad-toggle-bg", "hsl(0, 5%, 81%)");
  root.style.setProperty("--screen-bg", "hsl(0, 0%, 93%)");
  root.style.setProperty("--del-reset-bg", "hsl(185, 42%, 37%)");
  root.style.setProperty("--del-reset-shadow", "hsl(185, 58%, 25%)");
  root.style.setProperty("--del-reset-clr", "hsl(0, 0%, 100%)");
  root.style.setProperty("--input-equal-bg", "hsl(25, 98%, 40%)");
  root.style.setProperty("--equal-shadow", "hsl(25, 99%, 27%)");
  root.style.setProperty("--equal-clr", "hsl(0, 0%, 100%)");
  root.style.setProperty("--keys-clr", "hsl(60, 10%, 19%)");
  root.style.setProperty("--keys-bg", "hsl(45, 7%, 89%)");
  root.style.setProperty("--keys-shadow", "hsl(35, 11%, 61%)");
  root.style.setProperty("--calc-theme-screen-clr", "hsl(60, 10%, 19%)");


  root.style.setProperty("--keys-hover", "hsl(0, 0%, 100%)");
  root.style.setProperty("--del-reset-hover", "hsl(188, 59%, 45%)");
  root.style.setProperty("--equal-hover", "hsl(25, 100%, 61%)");

};

const toggleThirdTheme = function () {
  root.style.setProperty("--main-bg", "hsl(268, 75%, 9%)");
  root.style.setProperty("--keypad-toggle-bg", "hsl(268, 71%, 12%)");
  root.style.setProperty("--screen-bg", "hsl(268, 71%, 12%)");
  root.style.setProperty("--del-reset-bg", "hsl(281, 89%, 26%)");
  root.style.setProperty("--del-reset-shadow", "hsl(285, 91%, 52%)");
  root.style.setProperty("--del-reset-clr", "hsl(0, 0%, 100%)");
  root.style.setProperty("--input-equal-bg", "hsl(176, 100%, 44%)");
  root.style.setProperty("--equal-shadow", "hsl(177, 92%, 70%)");
  root.style.setProperty("--equal-clr", "hsl(198, 20%, 13%)");
  root.style.setProperty("--keys-clr", "hsl(52, 100%, 62%)");
  root.style.setProperty("--keys-bg", "hsl(268, 47%, 21%)");
  root.style.setProperty("--keys-shadow", "hsl(290, 70%, 36%)");
  root.style.setProperty("--calc-theme-screen-clr", "hsl(52, 100%, 62%)");

  root.style.setProperty("--keys-hover", "hsl(268, 54%, 44%)");
  root.style.setProperty("--del-reset-hover", "hsl(280, 56%, 44%)");
  root.style.setProperty("--equal-hover", "hsl(177, 100%, 79%)");
};

document.querySelector("#theme--1").addEventListener("click", function () {
  toggleFirstTheme();
});

document.querySelector("#theme--2").addEventListener("click", function () {
  toggleSecondTheme();
});

document.querySelector("#theme--3").addEventListener("click", function () {
  toggleThirdTheme();
});

/* const inputs = document.querySelectorAll("input");
const root = document.querySelector(":root");
const numbers = document.querySelectorAll("[data-number]");
const operators = document.querySelectorAll("[data-operator]");
const dotBtn = document.querySelector("[data-dot]");
const equalBtn = document.querySelector("[data-equal]");
const deleteBtn = document.querySelector("[data-del]");
const resetBtn = document.querySelector("[data-reset]"); */

let currentOperand;
let previousOperand;
let usedOperator;
numbers.forEach(num => {
  num.addEventListener("click", function () {
    if(screenNumber.textContent.length < 17) {
    if(screenNumber.textContent.slice(0) === "0") {
      screenNumber.textContent = parseFloat(
        screenNumber.textContent + num.textContent);
    }
    else {
      screenNumber.textContent = 
        screenNumber.textContent + num.textContent;
    }

    screenNumber.textContent.length > 8 ? screenNumber.style.fontSize = "40px": [];
    screenNumber.textContent.length > 10 ? screenNumber.style.fontSize = "30px": [];
  }
  });
});

deleteBtn.addEventListener("click", function () {
  screenNumber.textContent.length < 6 ? screenNumber.style.fontSize = "48px": [];
  screenNumber.textContent.length > 8 ? screenNumber.style.fontSize = "40px": [];
    screenNumber.textContent.length > 10 ? screenNumber.style.fontSize = "30px": [];
  console.log(screenNumber.textContent.length);
  if (screenNumber.textContent.length > 0) {
    screenNumber.textContent = screenNumber.textContent.slice(0, -1);
  }

  if (screenNumber.textContent.length == 0) {
    screenNumber.textContent = 0;
  }
});

const setPreviousOperand = function () {
  currentOperand = parseFloat(screenNumber.textContent);
  previousOperand = currentOperand;
  screenNumber.textContent = 0;
};

operators.forEach(operator => {
  operator.addEventListener("click", function () {
    screenNumber.style.fontSize = "48px";     
    if (operator.textContent === "+") {
      if (!previousOperand) {
        setPreviousOperand();
        usedOperator = "+";
      } else {
        currentOperand = parseFloat(screenNumber.textContent);
        console.log(previousOperand, currentOperand);
        screenNumber.textContent = parseFloat(previousOperand + currentOperand);
        // previousOperand = parseFloat(screenNumber.textContent);
        previousOperand = 0;
        currentOperand = 0;
        usedOperator = "+";
      }
    }

    if (operator.textContent === "-") {
      if (!previousOperand) {
        setPreviousOperand();
        usedOperator = "-";
      } else {
        currentOperand = parseFloat(screenNumber.textContent);
        console.log(previousOperand, currentOperand);
        screenNumber.textContent = parseFloat(previousOperand - currentOperand);
        previousOperand = 0;
        currentOperand = 0;
        usedOperator = "-";
      }
    }

    if (operator.textContent === "x") {
      if (!previousOperand) {
        setPreviousOperand();
        usedOperator = "x";
      } else {
        currentOperand = parseFloat(screenNumber.textContent);
        console.log(previousOperand, currentOperand);
        screenNumber.textContent = parseFloat(previousOperand * currentOperand);
        previousOperand = 0;
        currentOperand = 0;
        usedOperator = "x";
      }
    }

    if (operator.textContent === "/") {
      if (!previousOperand) {
        setPreviousOperand();
        usedOperator = "/";
      } else {
        currentOperand = parseFloat(screenNumber.textContent);
        console.log(previousOperand, currentOperand);
        screenNumber.textContent = parseFloat(previousOperand / currentOperand);
        previousOperand = 0;
        currentOperand = 0;
        usedOperator = "/";
      }
    }
  });
});

dotBtn.addEventListener("click", function () {
  if (!screenNumber.textContent.includes(".")) screenNumber.textContent += ".";
});

resetBtn.addEventListener("click", function () {
  screenNumber.style.fontSize = "48px";
  screenNumber.textContent = 0;
  previousOperand = 0;
  currentOperand = 0;
});

equalBtn.addEventListener("click", function () {
  screenNumber.textContent.length < 6 ? screenNumber.style.fontSize = "48px": [];
  screenNumber.textContent.length > 8 ? screenNumber.style.fontSize = "40px": [];
  screenNumber.textContent.length > 10 ? screenNumber.style.fontSize = "30px": [];
  if (previousOperand || previousOperand === 0) {
    currentOperand = parseFloat(screenNumber.textContent);
    switch (usedOperator) {
      case "+":
        screenNumber.textContent = parseFloat(previousOperand + currentOperand);
        previousOperand = 0;
        currentOperand = 0;
        break;
      case "-":
        screenNumber.textContent = parseFloat(previousOperand - currentOperand);
        previousOperand = 0;
        currentOperand = 0;
        break;
      case "x":
        screenNumber.textContent = parseFloat(previousOperand * currentOperand);
        previousOperand = 0;
        currentOperand = 0;
        break;
      case "/":
        screenNumber.textContent = parseFloat(previousOperand / currentOperand);
        previousOperand = 0;
        currentOperand = 0;
        break;
      default:
        break;
    }
  }

  screenNumber.textContent.length < 6 ? screenNumber.style.fontSize = "48px": [];
  screenNumber.textContent.length > 8 ? screenNumber.style.fontSize = "40px": [];
  screenNumber.textContent.length > 10 ? screenNumber.style.fontSize = "30px": [];
});

