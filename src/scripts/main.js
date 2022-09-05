import "../styles/bootstrap.min.css";
import "../styles/bootstrap.min.js";
import "./components/ListMovie.js";
import "./components/SearchBar.js";
import "./components/PaginaListMovie.js";
import "./components/DetailModalMovie.js";
import DataMovie from "./data/DataMovie.js";

const main = () => {
  const listMovieElement = document.querySelector("list-movie");
  const searchElement = document.querySelector("search-bar");
  const paginationListElement = document.querySelector("pagination-list-movie");
  const detailModalMovie = document.querySelector("detail-modal-movie");
  const modalMovie = document.querySelector("#modal-movie");

  const renderResult = async (movies) => {
    listMovieElement.movies = await movies;
  };
  const fallback = (message) => {
    listMovieElement.renderError(message);
  };

  const onButtonPaginateClicked = async (e) => {
    const num = e.target.textContent;
    const results = await DataMovie.getMovies(num);
    renderResult(results);
  };
  const onClickDetailMovie = async (e) => {
    const id = e.target.value;
    const movie = await DataMovie.getMovie(id);
    detailModalMovie.movie = movie;
    modalMovie.style.display = "block";
  };
  const closeModalMovie = () => {
    modalMovie.style.display = "none";
  };

  let results, isClickSearch;
  const onButtonSearchClicked = async () => {
    if (searchElement.word === undefined) isClickSearch = true;
    if (searchElement.word) {
      results = await DataMovie.getSearchMovies(searchElement.word);
      renderResult(results);
    }
  };

  try {
    if (!isClickSearch) {
      results = DataMovie.getMovies();
      renderResult(results);
      isClickSearch = false;
    }
  } catch (e) {
    fallback(e);
  }
  detailModalMovie.clickEvent = closeModalMovie;
  listMovieElement.clickEvent = onClickDetailMovie;
  paginationListElement.paginateEvent = onButtonPaginateClicked;
  searchElement.clickEvent = onButtonSearchClicked;
};

export default main;
