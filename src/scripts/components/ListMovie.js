import "./ItemMovie.js";

class ListMovie extends HTMLElement {
  set movies(movies) {
    this._movies = movies;
    this.render();
  }

  render() {
    this.innerHTML = "";
    // console.log(this._movies.results.length);
    this._movies.results.forEach((movie) => {
      const movieItemElement = document.createElement("item-movie");
      movieItemElement.movie = movie;
      this.appendChild(movieItemElement);
    });
  }
  renderError(msg) {
    this.innerHTML = "";
    this.innerHTML += `<h2 class="text-danger">${msg}</h>`;
  }
}
customElements.define("list-movie", ListMovie);
