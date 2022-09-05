import "../styles/bootstrap.min.css";
import "../styles/bootstrap.min.js";
import "./components/ListMovie.js";
import "./components/SearchBar.js";
import "./components/PaginaListMovie.js";
import DataMovie from "./data/DataMovie.js";

const main = () => {
  const listMovieElement = document.querySelector("list-movie");
  const searchElement = document.querySelector("search-bar");
  const paginationListElement = document.querySelector("pagination-list-movie");

  const renderResult = async (movies) => {
    listMovieElement.movies = await movies;
  };
  const fallback = (message) => {
    listMovieElement.renderError(message);
  };

  const onButtonSearchClicked = async () => {
    const results = DataMovie.getSearchMovies(searchElement.word);
    console.log(results);
    renderResult(results);
  };
  const onButtonPaginateClicked = async (e) => {
    const num = e.target.textContent;
    const results = DataMovie.getMovies(num);
    console.log(results);
    renderResult(results);
  };
  paginationListElement.paginateEvent = onButtonPaginateClicked;

  try {
    const results = DataMovie.getMovies();
    renderResult(results);
  } catch (e) {
    console.error(e);
    fallback(e);
  }
  searchElement.clickEvent = onButtonSearchClicked;
};

export default main;
