import axios from "axios";

const instance = (url, id = "", options = "") => {
  const baseUrl = "https://imdb-api.com/en/API/";
  const api = "k_ug3c2i28/";
  return axios
    .get(baseUrl + url + api + id + options)
    .then((response) => response.data);
};
export const imdbAPI = {
  getMovie() {
    const url = "AdvancedSearch/";
    const options = "?groups=top_1000";
    return instance(url, options);
  },
  currentMovie(id) {
    const url = "Title/";
    const options = "/FullActor,Posters,Images,Trailer,Ratings,Wikipedia,";
    return instance(url, id, options);
  },
  getComingSoon() {
    const url = "ComingSoon/";
    return instance(url);
  },
  searchMovie(title) {
    const url = "Search/";
    return instance(url, title);
  },
  getSerials() {
    const url = "AdvancedSearch/";
    const options = "?title_type=tv_series,tv_episode,tv_special,short";
    return instance(url, options);
  },
  getTop() {
    const url = "Top250Movies/";
    return instance(url);
  },
  getMostPopularMovies() {
    const url = "MostPopularMovies/";
    return instance(url);
  },
  getGenre(genre) {
    const url = "AdvancedSearch/";
    const options = `?genres=${genre}`;
    return instance(url, options);
  },
};
