import axios from "axios";
axios.defaults.baseURL = "https://opendata.resas-portal.go.jp/api/v1/";
axios.defaults.headers.common["X-API-KEY"] = import.meta.env.VITE_RESAS_API_KEY;
export default axios;
