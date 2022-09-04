class ItemMovie extends HTMLElement {
  static IMAGE_PATH = "https://image.tmdb.org/t/p/original";
  set movie(movie) {
    this._movie = movie;
    this.render();
  }
  render() {
    this.setAttribute("class", "col-xl-3 mt-3 col-md-4 col-sm-4 col-6");
    this.innerHTML = `
            <div class="card">
              <img
                class="card-img-top img-fluid"
                src="${ItemMovie.IMAGE_PATH}${this._movie.backdrop_path}"
                alt="${this._movie.original_title}"
              />
              <div class="card-header">
                <h5 class="card-title">${this._movie.original_title}</h5>
              </div>
              <div class="card-body">
                <p class="card-text">${this._movie.overview}</p>
                <p class="card-text text-dark">${this._movie.release_date}</p>
              </div>
            </div>
          
    `;
  }
}
customElements.define("item-movie", ItemMovie);
