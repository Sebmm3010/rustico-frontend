import axios from 'axios';

const rusticoApi = axios.create({
  baseURL: process.env.NEXT_BD_URL
});

export default rusticoApi;
