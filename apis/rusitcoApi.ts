import axios from 'axios';

const rusticoApi = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BD
});

export default rusticoApi;
