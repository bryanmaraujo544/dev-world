import axios from 'axios';
import { parseCookies } from 'nookies';

export const serverApi = axios.create({
  baseURL: 'http://localhost:3001'
});

const { '@token': token } = parseCookies();

if (token) {
  serverApi.defaults.headers['Authorization'] = `Bearer ${token}`;
}