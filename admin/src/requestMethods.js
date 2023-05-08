/*import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
const TOKEN = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser.accessToken;

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { token: `Bearer ${TOKEN}` },
});

*/
import axios from 'axios';
const BASE_URL = "http://localhost:5000/api/";
//const appUrl = 'https://lama-shop-api.vercel.app';
const token = localStorage.getItem('persist:root')
  ? JSON.parse(JSON.parse(localStorage.getItem('persist:root'))?.user)
      ?.currentUser?.token
  : '';
console.log(token);
export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { token: `Bearer ${token}` },
});
