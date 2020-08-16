const name = prompt("Enter your name");
if (name === "Vasya") {
  const pass = prompt("Enter pass");
  if (pass === "123") {
    alert("Hello, Admin!");
  } else {
    alert("Go to home!");
  }
} else {
  alert("Go to home!");
}
