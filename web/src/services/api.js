import axios from 'axios';

export const api = axios.create({
  baseURL: "https://food-explorer-api-w6le.onrender.com"
});