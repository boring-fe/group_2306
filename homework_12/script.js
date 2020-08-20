const pictures = document.querySelectorAll(".picture");
let isActive = false;
const ACTIVE_CLASS_NAME = "picture_active";

function toggle() {
  if (isActive) {
    isActive = false;
    this.classList.remove(ACTIVE_CLASS_NAME);
  } else {
    isActive = true;
    this.classList.add(ACTIVE_CLASS_NAME);
  }
}

for (let picture of pictures) {
  picture.addEventListener("click", toggle);
}
