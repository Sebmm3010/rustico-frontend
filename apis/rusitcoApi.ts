import axios from 'axios';

const rusticoApi = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API
});

export default rusticoApi;
