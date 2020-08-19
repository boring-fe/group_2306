const pictures = document.querySelectorAll(".picture");
let isActive = false;
const ACTIVE_CLASS_NAME = "picture_active";

function enable() {
  isActive = true;
  this.classList.add(ACTIVE_CLASS_NAME);
}

function disable() {
  isActive = false;
  this.classList.remove(ACTIVE_CLASS_NAME);
}

function toggle() {
  if (isActive === true) {
    picture.onclick = disable;
  } else {
    picture.onclick = enable;
  }
}

for (let picture of pictures) {
  picture.onclick = toggle;
}
