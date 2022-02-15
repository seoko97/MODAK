import axios from "axios";
import userAPI from "./user";
import campAPI from "./camp";
import reviewAPI from "./review";

export const url =
  process.env.NODE_ENV === "production" ? process.env.BASE_URL : "http://localhost:3065";

axios.defaults.baseURL = `${url}/api/`;
axios.defaults.withCredentials = true;

export { campAPI, reviewAPI, userAPI };
