import { ApiRequest } from "../common/utils/apiRequest.js";

export class PostForm {
  constructor(root, onSubmit) {
    this.root = root;
    this.onSubmit = onSubmit;
  }

  render() {
    this.formEl = document.createElement("form");
    this.inputTitle = document.createElement("input");
    this.inputContent = document.createElement("textarea");
    this.btn = document.createElement("button");
    this.formEl.classList.add("add-post-form");
    this.inputTitle.placeholder = "Title";
    this.inputTitle.name = "title";
    this.inputContent.placeholder = "Content";
    this.inputContent.name = "content";

    this.btn.textContent = "Send";

    this.formEl.append(this.inputTitle);
    this.formEl.append(this.inputContent);
    this.formEl.append(this.btn);
    this.formEl.addEventListener("submit", (eventObject) => {
      eventObject.preventDefault();
      const title = this.inputTitle.value;
      const content = this.inputContent.value;
      const requestBody = { title, content };
      const req = new ApiRequest();
      req.post(
        requestBody,
        "http://localhost:3000/posts",
        (responseData) => {
          this.onSubmit(JSON.parse(responseData));
          this.reset();
        },
        (errorMessage) => {
          console.log(errorMessage);
        }
      );
    });
    this.root.append(this.formEl);
  }

  reset() {
    this.inputTitle.value = "";
    this.inputContent.value = "";
  }
}
