// BAD EXAMPLE
function getArithmeticMeanBad() {
  let total = 0;
  const numbers = [2, 3, 5, 6, 12, 3, 4, 6];
  console.log("NUMBERS:", numbers);
  for (let i = 0; i < numbers.length; i++) {
    total += numbers[i];
  }
  const result = total / numbers.length;
  alert(result);
}
/**
 * JSDOC
 * @param {Array<number>} numbers
 * @return {number}
 */
function findArithmeticMean(numbers) {
  let total = 0;
  for (let i = 0; i < numbers.length; i++) {
    total += numbers[i];
  }
  return total / numbers.length;
}
/**
 * Запросить данные пользователя(числа)
 * @returns {Array<number>}
 */
function getUserInput() {
  const userInputs = [];
  let number;
  do {
    let userInput = prompt("Enter number");
    if (userInput === null) {
      break;
    }
    number = Number(userInput);
    if (isNaN(number)) {
      break;
    }
    userInputs.push(number);
  } while (true);
  return userInputs;
}
/**
 *
 * @param {string|number} somethingToPrint
 */
function printResult(somethingToPrint) {
  if (!somethingToPrint) {
    alert("PLEASE PROVIDE DATA!");
  }
  alert(somethingToPrint);
}
function onClickHandler() {
  const userValues = getUserInput();
  const arithmeticMean = findArithmeticMean(userValues);
  printResult(arithmeticMean);
}
// const otherNumbers = [2, 3, 5, 6, 12, 3, 4, 6];
// getArithmeticMeanGood(otherNumbers);
// getArithmeticMeanGood([3, 3, 3]);
// getArithmeticMeanGood([2, 2, 2]);
