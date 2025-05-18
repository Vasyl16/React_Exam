import axios from 'axios';
import { MOVIE_BASE_URL } from '../../constants/api';

export const axiosMovieInstance = axios.create({
  baseURL: MOVIE_BASE_URL,
  headers: {
    Authorization: `Bearer ${import.meta.env.VITE_MOVIE_TOKEN}`,
  },
});
