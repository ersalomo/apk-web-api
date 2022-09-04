class SearchBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }
  set clickEvent(event) {
    this._clickEvent = event;
    this.render();
  }
  get value() {
    return this.querySelector("#search").value;
  }

  render() {
    this.innerHTML = "";
    this.innerHTML = `
    <div class="d-flex" role="search">
      <input class="form-control" type="search" placeholder="Search" aria-label="Search" />
      <button id="search class="btn btn-outline-success" type="submit">Search</button>
    </div>
    `;
    this.querySelector("#search").addEventListener("click", this._clickEvent);
  }
}

customElements.define("search-bar", SearchBar);
