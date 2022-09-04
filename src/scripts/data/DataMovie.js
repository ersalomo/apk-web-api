export default class DataMovie {
  static API_KEY = "644857080037314529edb8dcf5b6902d";
  static URL_PATH = "https://api.themoviedb.org/3";
  static API_READ_ACCESS_TOKEN =
    "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NDQ4NTcwODAwMzczMTQ1MjllZGI4ZGNmNWI2OTAyZCIsInN1YiI6IjYzMTEzZTA4MTI2ZWMzMDA3ZTE4NmM1MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.3HAlr31iyVcY9sDWPuCc6G7xcHYKGbjLR4B9vxMk2VU";

  static async getMovies() {
    const options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const response = await fetch(`${this.URL_PATH}/discover/movie?api_key=${this.API_KEY}`, options);
      const responseJson = await response.json();
      return await responseJson;
    } catch (err) {
      return err;
    }
  }

  static async getMovie(movie_id) {
    const options = {
      method: "GET",
      headers: {},
    };
    const response = await fetch(`${process.env.URL_PATH}/movie/${movie_id}?api_key=${this.API_KEY}`, options);
    const responseJson = response.json();
    return await responseJson;
  }

  // https://api.themoviedb.org/3/search/multi?api_key=644857080037314529edb8dcf5b6902d&language=en-US&query=first&page=1&include_adult=false
  static async getSearchMovies(keyword) {
    try {
      const options = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      };
      const response = await fetch(`${this.URL_PATH}/search/multi?api_key=${this.API_KEY}&query=${keyword}`, options);
      const responseJson = await response.json();
      return await responseJson;
    } catch (err) {
      return err;
    }
  }
}
