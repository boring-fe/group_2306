/**
 *
 * @param {Number} numbers Параметром является число, указывающее, сколько кругов надо создать
 */

function getRandomChannel() {
  return Math.floor(Math.random() * 255);
}

function getRandomColor() {
  return `rgb(${getRandomChannel()}, ${getRandomChannel()}, ${getRandomChannel()})`;
}

function createCircles(numbers) {
  const circles = document.querySelector(".circles");
  for (let i = 0; i < numbers; i++) {
    const circle = document.createElement("div");
    circle.classList.add("circles__circle");
    circle.style.backgroundColor = getRandomColor();
    circles.append(circle);
    circle.addEventListener("click", clickCircle);
  }

  function clickCircle() {
    this.style.backgroundColor = getRandomColor();
  }
}

export { createCircles };
