import "../index.js";
import "./components/ListMovie.js";
import DataMovie from "./data/DataMovie.js";

const main = () => {
  //render result?
  const renderResult = async (movies) => {
    listMovieElement.movies = await movies;
  };
  const fallback = (message) => {
    listMovieElement.renderError(message);
  };
  const listMovieElement = document.querySelector("list-movie");
  //   const onButtonSearchClick = async () => {
  try {
    const data = DataMovie.getMovies();
    // console.log(data);
    renderResult(data);
  } catch (e) {
    console.error(e);
    fallback(e);
  }
  //   };
};

export default main;
