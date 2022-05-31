import axios from "axios";

export const testApi = {
  test() {
    return axios
      .get("https://jsonplaceholder.typicode.com/photos")
      .then((response) => response.data);
  },
};
