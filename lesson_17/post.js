export class Post {
  /**
   *
   * @param {HTMLElement} root
   * @param {Objet} data
   * @param {string} data.title
   * @param {string} data.content
   */
  constructor(root, data) {
    this.root = root;
    this.data = data;
  }

  render() {
    const el = document.createElement("li");
    const h2 = document.createElement("h2");
    const p = document.createElement("p");

    h2.textContent = this.data.title;
    p.textContent = this.data.content;

    el.append(h2);
    el.append(p);

    this.root.append(el);
  }
}
