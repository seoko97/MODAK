import axios from "axios";
import userAPI from "./user";
import campAPI from "./camp";
import reviewAPI from "./review";

axios.defaults.baseURL = "http://localhost:3065/api/";
axios.defaults.withCredentials = true;

export { campAPI, reviewAPI, userAPI };
