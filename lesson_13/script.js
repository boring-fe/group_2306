function getRandomColor() {
  const colors = ["red", "green", "blue", "yellow", "aqua", "magenta"];
  return colors[Math.floor(Math.random() * colors.length)];
}

console.log(getRandomColor());
