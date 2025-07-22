import axios from "axios";

const API = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  withCredentials: true,
});
console.log("Base URL is:", process.env.REACT_APP_API_URL);


export default API;
