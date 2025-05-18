import { NEWEST_MOVIE } from '../../constants/api';

import { axiosMovieInstance } from '../axios/axiosMovieInstance';

import type { NewestMovieData } from '../../types/movieTypes';

export const getNewestMovies = async () => {
  const response = await axiosMovieInstance.get<{ results: NewestMovieData[] }>(
    NEWEST_MOVIE
  );

  return response.data.results;
};
