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
    const options =
      "?title_type=feature,tv_movie&release_date=2010-01-01,2022-01-01&count=250";
    return instance(url, options);
  },
  currentMovie(id) {
    const url = "Title/";
    const options = "/FullActor,Posters,Images,Trailer,Ratings,Wikipedia,";
    return instance(url, id, options);
  },
};

export const testApi = {
  test() {
    return axios
      .get("https://jsonplaceholder.typicode.com/photos")
      .then((response) => response.data);
  },
};
