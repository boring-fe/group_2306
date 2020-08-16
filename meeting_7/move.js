const domEl1 = document.querySelector("#btn1");
const domEl2 = document.querySelector("#btn2");
const domEl3 = document.querySelector("#btn3");
const domEl4 = document.querySelector("#btn4");
let isActive = false;
const ACTIVE_CLASS_NAME = "btn_active";

function disable() {
  domEl1.classList.remove(ACTIVE_CLASS_NAME);
  domEl2.classList.remove(ACTIVE_CLASS_NAME);
  domEl3.classList.remove(ACTIVE_CLASS_NAME);
  domEl4.classList.remove(ACTIVE_CLASS_NAME);
  isActive = false;
}

function enable() {
  isActive = true;
  domEl1.classList.add(ACTIVE_CLASS_NAME);
  domEl2.classList.add(ACTIVE_CLASS_NAME);
  domEl3.classList.add(ACTIVE_CLASS_NAME);
  domEl4.classList.add(ACTIVE_CLASS_NAME);
}

function clickPicture() {
  if (isActive === true) {
    disable();
  } else {
    enable();
  }
}
domEl1.onclick = clickPicture;
domEl2.onclick = clickPicture;
domEl3.onclick = clickPicture;
domEl4.onclick = clickPicture;
