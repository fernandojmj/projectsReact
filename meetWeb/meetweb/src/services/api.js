import axios from "axios";

const api = axios.create({
  // baseURL: "http://192.168.0.18:3001"
  baseURL: "http://127.0.0.1:3001"
});

export default api;
