import axios from "axios";

const instance = axios.create({
  baseURL: "https://burger-builder-6fec2.firebaseio.com/"
});

export default instance;
