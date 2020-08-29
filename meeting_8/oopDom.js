class ParagraphPreview {
  constructor(parent, title, contant) {
    this.parent = parent;
    this.title = title;
    this.contant = contant;
    this.isActive = false;
  }
  render() {
    this.el1 = document.createElement("h1");
    this.el2 = document.createElement("p");
    this.el1.textContent = this.title;
    this.el2.textContent = this.contant;
    this.parent.append(this.el1);
    this.parent.append(this.el2);
    this.el1 = addEventListener("click", () => {
      this.toggle;
    });
  }
  toggle() {
    if (this.isActive) {
      this.isActive = false;
      this.el2.style.display = "none";
    } else {
      this.isActive = true;
      this.el2.style.display = "block";
    }
  }
}

export { ParagraphPreview };
