class SearchBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }
  set clickEvent(event) {
    this._clickEvent = event;
    this.render();
  }
  get word() {
    return this.querySelector("input[type=search]").value;
  }

  render() {
    this.innerHTML = "";
    this.setAttribute("class", "d-flex");
    this.innerHTML = `
      <input class="form-control" type="search" value="" placeholder="Search" aria-label="Search" />
      <button id="search" class="btn btn-outline-success" type="submit">Search</button>
    `;
    this.querySelector("#search").addEventListener("click", this._clickEvent);
  }
}

customElements.define("search-bar", SearchBar);
