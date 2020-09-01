class Card {
  /**
   *
   * @param {DOMNote} root DOM element куда отрисовываем
   * @param {Object} data
   * @param {string} data.title заголовок
   * @param {string} data.description описание
   * @param {string} data.rating оценка
   * @param {string} data.preview.high изображение 1
   * @param {string} data.preview.low изображение 2
   * @param {string} data.genre жанр
   */
  constructor(root, data) {
    this.root = root;
    this.title = data.title;
    this.description = data.description;
    this.rating = data.rating;
    this.imgHigh = data.preview.high;
    this.imgLow = data.preview.low;
    this.genre = data.genre;
  }

  render() {
    this.el = document.createElement("div");
    this.headerElement = document.createElement("h2");
    this.paragraphElementDescription = document.createElement("p");
    this.paragraphElementRating = document.createElement("p");
    this.paragraphElementGenre = document.createElement("p");
    this.imageElementHigh = document.createElement("img");
    this.imageElementLow = document.createElement("img");

    this.headerElement.textContent = this.title;
    this.imageElementHigh.src = this.imgHigh;
    this.imageElementLow.src = this.imgLow;
    this.paragraphElementDescription.textContent = this.description;
    this.paragraphElementRating.textContent = this.rating;
    this.paragraphElementGenre.textContent = this.genre;

    this.el.append(this.headerElement);
    this.el.append(this.imageElementHigh);
    this.el.append(this.imageElementLow);
    this.el.append(this.paragraphElementDescription);
    this.el.append(this.paragraphElementRating);
    this.el.append(this.paragraphElementGenre);
    this.root.append(this.el);
  }
}

function makeRequest() {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "http://localhost:3000/movies");
  xhr.send();
  xhr.onload = function () {
    const responseData = JSON.parse(xhr.response); // десериализация / парсинг
    const body = document.querySelector("body");
    for (let item of responseData) {
      console.log(item);
      const card = new Card(body, item);
      card.render();
    }
  };
}

makeRequest();
