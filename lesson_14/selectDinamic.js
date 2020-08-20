/**
 *
 * @param {DOMElement} mountPoint место для вставки селекта на страницу
 * @param {Array<string>} optionTexts массив со строками для опций
 */
function createSelect(mountPoint, optionTexts) {
  let selectRootEl;
  let selectedOption;
  let ul;
  let controls;
  const ACTIVE_CLASS_NAME = "select_active";
  let isExpand = false;

  //==========

  function createParent() {
    selectRootEl = document.createElement("div");
    selectRootEl.classList.add("select");
    mountPoint.append(selectRootEl);
  }
  function createSelectedOption() {
    selectedOption = document.createElement("button");
    selectedOption.classList.add("select__btn");
    selectedOption.textContent = "Click me";
    selectRootEl.append(selectedOption);
  }

  function createUl() {
    ul = document.createElement("ul");
    ul.classList.add("select__options");
    selectRootEl.append(ul);
  }

  function createListItems() {
    for (let text of optionTexts) {
      const li = document.createElement("li");
      li.classList.add("select__option");
      const control = document.createElement("button");
      control.classList.add("select__control");
      control.textContent = text;
      control.addEventListener("click", controlClickHandler);
      li.append(control);
      ul.append(li);
    }
  }

  createParent();
  createSelectedOption();
  createUl();
  createListItems();
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
    selectedOption.textContent = this.textContent;
    close();
  }

  selectedOption.addEventListener("click", toggle);
}

export { createSelect };
