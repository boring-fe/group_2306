import { Post } from "./post.js";

export class PostList {
  constructor(root) {
    this.root = root;
  }

  render(posts) {
    this.ul = document.createElement("ul");
    for (let post of posts) {
      this.renderOne(post);
    }

    this.root.append(this.ul);
  }

  renderOne(post) {
    const listItem = new Post(this.ul, post);
    listItem.render();
  }

  renderError(errorMessage) {
    const h2 = document.createElement("h2");
    h2.textContent = errorMessage;
    h2.style.color = "red";
    this.root.append(h2);
  }
}
