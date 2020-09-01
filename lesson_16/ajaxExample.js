// AJAX Async Javascript and Xml - запрос к серверу без перезагрузкит страницы
class Cart {
  /**
   * JSDOC
   * @param {DOMNode} root  Дом элемент куда мы отрисовуем компонент Cart
   * @param {Object} data
   * @param {string} data.title заголовок
   * @param {string} data.img аддрес изображения
   * @param {string} data.description детальное описание
   */
  constructor(root, data) {
    this.root = root;
    this.title = data.title;
    this.imgUrl = data.img;
    this.description = data.description;
  }

  render() {
    this.el = document.createElement("div");
    this.headerElement = document.createElement("h2");
    this.imgElement = document.createElement("img");
    this.paragraphElement = document.createElement("p");

    this.headerElement.textContent = this.title;
    this.imgElement.src = this.imgUrl;
    this.paragraphElement.textContent = this.description;

    this.el.append(this.imgElement);
    this.el.append(this.headerElement);
    this.el.append(this.paragraphElement);
    this.root.append(this.el);
  }
}

function makeRequest() {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "http://localhost:3000/ads");
  xhr.send();
  xhr.onload = function () {
    console.log(typeof xhr.response, xhr.response); // JSON JavaScriptObjectNotation
    const responseData = JSON.parse(xhr.response); // десериализация / парсинг
    const body = document.querySelector("body");
    for (let item of responseData) {
      console.log(item);
      const cart = new Cart(body, item);
      cart.render();
    }
    console.log("4");
  };

  console.log("5");
}

makeRequest();
