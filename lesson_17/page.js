import { PostForm } from "./postForm.js";
import { PostList } from "./postsList.js";
import { ApiRequest } from "../common/utils/apiRequest.js";

export class Page {
  constructor() {
    this.root = document.querySelector("body");
    this.getListData();
  }

  render() {
    this.wrapper = document.createElement("div");
    this.header = document.createElement("header");
    this.main = document.createElement("main");

    this.header.style.border = "1px solid red";
    this.main.style.border = "1px solid red";

    this.form = new PostForm(this.header, (post) => {
      this.posts.push(post);
      this.list.renderOne(post);
    });
    this.form.render();
    this.list = new PostList(this.main);

    this.wrapper.append(this.header);
    this.wrapper.append(this.main);
    this.root.append(this.wrapper);
  }

  getListData() {
    const req = new ApiRequest();
    /**
     *
     * @param {string} posts JSON with response data
     */
    const successHandler = (posts) => {
      this.posts = JSON.parse(posts);
      this.list.render(this.posts);
    };
    req.get("http://localhost:3000/posts", successHandler, (errorMessage) => {
      this.renderError(errorMessage);
    });
    req.get("http://localhost:3000/movies", (otherdata) => {
      console.log("MOVIES DATA", otherdata);
    });
  }
}
