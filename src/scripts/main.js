import "../index.js";
import "./components/ListMovie.js";
import "./components/SearchBar.js";
import DataMovie from "./data/DataMovie.js";

const main = () => {
  const listMovieElement = document.querySelector("list-movie");
  const searchElement = document.querySelector("search-bar");

  searchElement.clickEvent = onButtonSearchClicked;
  const onButtonSearchClicked = async () => {
    try {
      const results = await DataMovie.getSearchMovies(searchElement.value);
      renderResult(results);
    } catch (err) {
      fallback(err);
    }
  };

  const renderResult = async (movies) => {
    listMovieElement.movies = await movies;
  };
  const fallback = (message) => {
    listMovieElement.renderError(message);
  };
  try {
    const data = DataMovie.getMovies();
    renderResult(data);
  } catch (e) {
    console.error(e);
    fallback(e);
  }
};

export default main;
