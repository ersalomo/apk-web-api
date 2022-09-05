class ItemMovie extends HTMLElement {
  static IMAGE_PATH = "https://image.tmdb.org/t/p/original";
  set movie(movie) {
    this._movie = movie;
    this.render();
  }
  set clickEvent(event) {
    this._clickEvent = event;
    this.render();
  }

  render() {
    this.setAttribute("class", "col-xl-3 mt-3 col-md-4 col-sm-4 col-6");
    this.innerHTML = `
            <div class="card h-100" style="background-color: #0c4a6e">
              <img
                class="card-img-top img-fluid"
                src="${ItemMovie.IMAGE_PATH}${this._movie.backdrop_path ?? this._movie.poster_path}"
                alt="${this._movie.original_title ?? this._movie.poster_path}"
              />
              <div class="card-header d-inline">
                <h6 class="text-white fs-6 py-0">${this._movie.original_title ?? this._movie.name}
                <span class="badge text-bg-warning">${this._movie.vote_average}</span>
                </h6>
              </div>
              <div class="card-body">
              <button class="btn mb-0 btn-outline-primary form-control movie" id="movie" value="${this._movie.id}">Detail</button>
              </div>
            </div>
    `;
    this.querySelector("button#movie").addEventListener("click", this._clickEvent);
  }
}

customElements.define("item-movie", ItemMovie);
