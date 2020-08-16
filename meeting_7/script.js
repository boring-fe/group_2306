// function maxElem(numbers = []) {
//   let number = 0;
//   for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] > number) {
//       number = numbers[i];
//     }
//   }
//   return number;
// }

// console.log(maxElem([5, 7, 9, 3]));

// function objectValues(object) {
//   const array = [];
//   for (const key in object) {
//     array.push(object[key]);
//   }
//   return array;
// }

// function objectValues(object) {
//   const array = [];
//   for (const key in object) {
//     array.push(key);
//   }
//   return array;
// }

// console.log(objectValues({ title: "Hello", value: 1200 }));

// function compareArrays(arr1 = [], arr2 = []) {
//   let count = 0;
//   for (let i = 0; i < arr1.length; i++) {
//     if (arr2[i] !== arr1[i]) {
//       count++;
//     }
//   }
//   if (count > 0) {
//     return false;
//   } else {
//     return true;
//   }
// }
// console.log(compareArrays([1, 2, 3], [1, 2, 3])); // true
// console.log(compareArrays([3, 4, 3], [1, 2, 3])); // false

function isObjectEqual(obj1, obj2) {
  const arr1 = [];
  const arr2 = [];
  let isEqual = true;

  for (name in obj1) {
    arr1.push(obj1[name]);
  }

  for (name in obj2) {
    arr2.push(obj2[name]);
  }

  if (arr1.length !== arr2.length) {
    return false;
  }

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      isEqual = false;
      break;
    }
  }

  return isEqual;
}

console.log(
  isObjectEqual(
    { title: "test", hello: "world" },
    { title: "test", hello: "world" }
  )
); // true

console.log(
  isObjectEqual(
    { title: "test", hello: "world" },
    { title: "test2", hello: "world" }
  )
); // false
