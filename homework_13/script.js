const red = document.querySelector(".red");
const yellow = document.querySelector(".yellow");
const green = document.querySelector(".green");

let isActiveRed = false;
let isActiveYellow = false;
let isActiveGreen = false;

const ACTIVE_RED = "red_active";
const ACTIVE_YELLOW = "yellow_active";
const ACTIVE_GREEN = "green_active";

function enableRed() {
  isActiveRed = true;
  red.classList.add(ACTIVE_RED);
}

function enableYellow() {
  isActiveYellow = true;
  yellow.classList.add(ACTIVE_YELLOW);
}

function enableGreen() {
  isActiveGreen = true;
  green.classList.add(ACTIVE_GREEN);
}

function disableRed() {
  isActiveRed = false;
  red.classList.remove(ACTIVE_RED);
}

function disableYellow() {
  isActiveYellow = false;
  yellow.classList.remove(ACTIVE_YELLOW);
}

function disableGreen() {
  isActiveGreen = false;
  green.classList.remove(ACTIVE_GREEN);
}

function moveRed() {
  if (
    (isActiveRed === false &&
      isActiveYellow === false &&
      isActiveGreen === false) ||
    (isActiveRed === false &&
      isActiveYellow === true &&
      isActiveGreen === false)
  ) {
    enableRed();
    disableYellow();
  }
}

function moveYellow() {
  if (
    (isActiveRed === true &&
      isActiveYellow === false &&
      isActiveGreen === false) ||
    (isActiveRed === false &&
      isActiveYellow === false &&
      isActiveGreen === true)
  ) {
    enableYellow();
    disableGreen();
  }
}

function moveGreen() {
  if (
    (isActiveRed === true &&
      isActiveYellow === true &&
      isActiveGreen === false) ||
    (isActiveRed === false &&
      isActiveYellow === false &&
      isActiveGreen === false)
  ) {
    enableGreen();
    disableRed();
    disableYellow();
  }
}

red.onclick = moveRed;
yellow.onclick = moveYellow;
green.onclick = moveGreen;
