export class PostForm {
  constructor(root) {
    this.root = root;
  }

  render() {
    this.formEl = document.createElement("form");
    this.inputTitle = document.createElement("input");
    this.inputContent = document.createElement("input");
    this.btn = document.createElement("button");

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

      const xhr = new XMLHttpRequest();
      xhr.open("POST", "http://localhost:3000/posts");
      xhr.setRequestHeader("Content-Type", "application/json");
      const requestJSON = JSON.stringify(requestBody); // {'title': 'asdas', 'content': 'content'}
      xhr.send(requestJSON);
      xhr.onload = () => {
        console.log("5");
        const post = JSON.parse(xhr.response);
        console.log(post);
      };
      console.log("6");
    });
    this.root.append(this.formEl);
  }
}
