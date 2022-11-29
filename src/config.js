import axios from 'axios';
export const axiosInstance = axios.create({
  baseURL: 'https://backend-web-app-1.herokuapp.com/api',
});
