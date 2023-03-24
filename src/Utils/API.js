//This file is made only for base URL
import axios from "axios";

const BaseAPI = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
});

export default BaseAPI;
