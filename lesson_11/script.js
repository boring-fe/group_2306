const strNums = ["123", "asd", "23", "4", "8"];
const numbers = [];
let sum = 0;
for (let i = 0; i < strNums.length; i++) {
  const number = parseInt(strNums[i]);
  if (!isNaN(number)) {
    numbers.push(number);
    sum += number;
  }
}
alert(numbers.join(" "));
alert(sum);
