function selectCreator(selectRootEl) {
  const selectedOtion = selectRootEl.querySelector(".select__btn");
  const controls = selectRootEl.querySelectorAll(".select__control");
  const ACTIVE_CLASS_NAME = "select_active";
  let isExpand = false;

  //==========

  //======Логика работы=======

  function close() {
    isExpand = false;
    selectRootEl.classList.remove(ACTIVE_CLASS_NAME);
  }

  function open() {
    isExpand = true;
    selectRootEl.classList.add(ACTIVE_CLASS_NAME);
  }

  function toggle() {
    if (isExpand) {
      close();
    } else {
      open();
    }
  }

  function controlClickHandler() {
    console.log(this); // контекст вызова this === елементу с классом select__control
    selectedOtion.textContent = this.textContent;
    close();
  }

  for (let control of controls) {
    control.addEventListener("click", controlClickHandler);
  }

  function logger() {
    console.log("CLICKED");
  }

  selectedOtion.addEventListener("click", toggle);
  selectedOtion.addEventListener("click", logger);
}

export { selectCreator };
