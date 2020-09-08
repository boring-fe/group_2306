class Card {
  /**
   *
   * @param {DOM} root Куда поместить
   * @param {Object} data
   */
  constructor(root, data) {
    this.root = root;
    this.title = data.title;
    this.content = data.content;
  }

  render() {
    this.el = document.createElement("div");
    this.headerElement = document.createElement("h2");
    this.paragraphElement = document.createElement("p");

    this.headerElement.textContent = this.title;
    this.paragraphElement.textContent = this.content;

    this.el.append(this.headerElement);
    this.el.append(this.paragraphElement);
    this.root.append(this.el);
  }
}

function makeRequest() {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "http://localhost:3000/posts");
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
