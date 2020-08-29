function createButton(parentElemnt, text, onClick) {
  const createElement = document.createElement("button");
  createElement.textContent = text;
  parentElemnt.append(createElement);
  createElement.addEventListener("click", onClick);
}
createButton(document.querySelector("body"), "Click me", function () {
  console.log("hello world");
});
createButton(document.querySelector("body"), "Hello", function () {
  console.log("Test");
});
