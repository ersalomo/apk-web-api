class PaginaListMovie extends HTMLElement {
  static TOTAL_PAGES = 12;
  set paginateEvent(paginate) {
    this._paginate = paginate;
    this.render();
  }
  render() {
    this.innerHTML = "";
    this.classList.add("d-flex");
    for (let i = 1; i <= PaginaListMovie.TOTAL_PAGES; i++) {
      this.innerHTML += `
      <li class="page-item"><a class="page-link list" href="#">${i}</a></li>
      `;
    }
    this.querySelectorAll(".page-link.list").forEach((element) => {
      element.addEventListener("click", this._paginate);
    });
  }
}

customElements.define("pagination-list-movie", PaginaListMovie);
