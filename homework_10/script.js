// Упражнение 1
let randomBodyParts = ["палец", "лоб", "жирок", "язык"];
let randomAdjectives = ["грязная", "заросшая", "кривая"];
let randomWords = ["змея", "свинья", "корова", "коза", "крыса"];
let randomBodyPart =
  randomBodyParts[Math.floor(Math.random() * randomBodyParts.length)];
let randomAdjective =
  randomAdjectives[Math.floor(Math.random() * randomAdjectives.length)];
let randomWord = randomWords[Math.floor(Math.random() * randomWords.length)];
let randomResult =
  "У тебя " +
  randomBodyPart +
  " словно " +
  randomAdjective +
  " " +
  randomWord +
  "!!!";
alert(randomResult);

// Упражнение 2
let randomBodyParts2 = ["палец", "нога", "нос", "язык"];
let randomAdjectives2 = ["противнее", "заросшее", "вонючее"];
let randomBodyAnimals2 = ["хвост", "нос", "лапа", "ухо"];
let randomAnimals2 = ["лисы", "свиньи", "коровы", "собаки", "енота"];
let randomBodyPart2 =
  randomBodyParts2[Math.floor(Math.random() * randomBodyParts2.length)];
let randomAdjective2 =
  randomAdjectives2[Math.floor(Math.random() * randomAdjectives2.length)];
let randomBodyAnimal2 =
  randomBodyAnimals2[Math.floor(Math.random() * randomBodyAnimals2.length)];
let randomAnimal2 =
  randomAnimals2[Math.floor(Math.random() * randomAnimals2.length)];
let randomResult2 =
  "У тебя " +
  randomBodyPart2 +
  " ещё более " +
  randomAdjective2 +
  ", чем " +
  randomBodyAnimal2 +
  " у " +
  randomAnimal2 +
  "!";
alert(randomResult2);

// Упражнение 3
let draznilka = [
  "Я скажу тебе на ушко",
  "Про зеленую лягушку.",
  "Никому не говори,",
  "Потому что это ты.",
];

// Первый вариант
let draznilkaResult = "";
for (let i = 0; i < draznilka.length; i++) {
  draznilkaResult += draznilka[i] + " ";
}
alert(draznilkaResult);

// Второй вариант
let draznilkaResult2 = draznilka.join(" ");
alert(draznilkaResult2);

// Упражнение 4
let numbers = [5, 4, 3, 2, 1];
let text = numbers.join(" больше, чем ");
alert(text);
