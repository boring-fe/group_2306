// const strNumber = ["sdfsd", 2, 3, 4, "sdf", true];
// const numbers = [];

// for (let i = 0; i < strNumber.length; i++) {
//   const number = parseInt(strNumber[i]);
//   if (!isNaN(number)) {
//     numbers.push(number);
//   }
// }

// alert("Задание 1 => " + numbers.join(" "));

// const Numbers = [8, 4, 1, 45, 5, 3, 12, 20];
// let sum = 0;

// for (let i = 0; i < Numbers.length; i++) {
//   sum += Numbers[i];
// }

// alert("Задание 2: сумма чисел равна => " + sum);

// result = sum / Numbers.length;
// alert("Задание 3: среднее значение равно => " + result.toFixed(3));

// let max = 0;
// for (let Number of Numbers) {
//   if (Number > max) {
//     max = Number;
//   }
// }

// alert("Задание 4: максимальное значение равно => " + max);

// const products = [
//   { title: "Macbook", price: 1200 },
//   { title: "iPhone", price: 8900 },
//   { title: "IBM", price: 1300 },
//   { title: "Dell", price: 700 },
// ];

// productTotal = 0;
// let mostExpensiveProduct = products[0];
// for (let i = 1; i < products.length; i++) {
//   if (mostExpensiveProduct.price < products[i].price) {
//     mostExpensiveProduct = products[i];
//   }
//   productTotal += mostExpensiveProduct.price;
// }

// alert(
//   "Самый дорогой продукт " +
//     mostExpensiveProduct.title +
//     " и его цена " +
//     mostExpensiveProduct.price
// );

// alert("Задание 6: сумма цен товаров => " + productTotal);

const workers = {
  John: 400,
  Jack: 500,
  Johan: 2200,
  Alex: 390,
  Floyd: 860,
};

let mainValue = Number.MAX_SAFE_INTEGER;
let mixKey;
let total = 0;
for (let name in workers) {
  if (workers[name] < mainValue) {
    mainValue = workers[name];
    minKey = name;
  }
  total += workers[name];
}

alert("Чувак с мин зп - это " + minKey + " и его зп " + mainValue);
alert("Сумма зарплат чуваков = " + total);
