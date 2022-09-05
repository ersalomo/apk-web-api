class DetailModalMovie extends HTMLElement {
  static IMAGE_PATH = "https://image.tmdb.org/t/p/original";
  set movie(movie) {
    this._movie = movie;
    this.render();
  }
  set clickEvent(event) {
    this._clickEvent = event;
  }
  render() {
    this.innerHTML = "";
    this.classList.add("card");
    this.innerHTML = `
            <div class="card-img-top">
            <img
            class=" img-thumbnail img-fluid"
            src="${DetailModalMovie.IMAGE_PATH + this._movie.backdrop_path}"
            alt="${this._movie.original_title}"
          />
            </div>
              <div class="card-body">
                <h3 class="card-title">${this._movie.original_title}
                <p class="badge text-bg-secondary fs-6">Popularity ${this._movie.popularity}</p>
                <p class="badge text-bg-warning fs-6">Vote rate ${this._movie.vote_average}</p>
                </h3>
                <p class="text-dark">${this._movie.overview}</p>
                
                <p class="text-dark">${this._movie.release_date}</p>
              </div>
              <div class="card-footer">
                <button type="button" id="close-modal" class="btn btn-outline-danger">CLose</button>
              </div>
              `;
    this.querySelector("#close-modal").addEventListener("click", this._clickEvent);
  }
}
customElements.define("detail-modal-movie", DetailModalMovie);
