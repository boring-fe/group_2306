// /**
//  *
//  * @param {Array<number>} numbers
//  * @returns {Array<numbers>}
//  */
// function findEven(numbers = []) {
//   const numbersEven = [];
//   for (let number of numbers) {
//     if (number % 2 === 0) {
//       numbersEven.push(number);
//     }
//   }
//   return numbersEven.join(" ");
// }

// console.log(findEven([8, 9, 3, 4, 1, 6]));

// /**
//  *
//  * @param {number} number week day in format 0-6
//  * @returns {string} week day in format 'monday', 'tuesday' ...
//  */
// function getWeekDay(number) {
//   let days = ["monday", "tuesday", "wendsday", "th", "fr", "sat", "sun"];
//   return days[number];
// }

// console.log(getWeekDay(2));

// /**
//  * @param {string} text
//  * @return {number} count of vowels in text e.g. for hello return 2 because e o only vowel
//  */
// function vowelCount(text) {
//   let count = 0;
//   const vowels = ["a", "o", "u", "y", "i", "e"];
//   for (let i = 0; i < text.length; i++) {
//     for (let j = 0; j < vowels.length; i++) {
//       if (text[i] === vowels[j]) {
//         count++;
//       }
//     }
//   }
//   return count;
// }
// console.log(vowelCount("Hello world"));

import { ParagraphPreview } from "./oopDom.js";

const mountPointer = document.querySelector("body");

const blockOne = new ParagraphPreview(
  mountPointer,
  "Header1",
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur enim quos ipsam exercitationem mollitia deserunt!"
);

blockOne.render();
