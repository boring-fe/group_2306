import { selectCreator } from "./select.js";
import { createSelect } from "./selectDinamic.js";

const select1 = document.querySelector("#select1");
selectCreator(select1);

createSelect(document.querySelector(".container"), ["Usa", "Canada", "China"]);
createSelect(document.querySelector(".container"), [
  "New York",
  "Montreal",
  "Pekin",
  "Paris",
  "London",
]);
