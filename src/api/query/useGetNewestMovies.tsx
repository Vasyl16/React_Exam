import { useQuery } from '@tanstack/react-query';
import { getNewestMovies } from '../services/getNewestMovies';

import type { NewestMovieData } from '../../types/movieTypes';

export const useGetNewestMovies = () => {
  return useQuery<NewestMovieData[]>({
    queryKey: ['newestMovie'],
    queryFn: getNewestMovies,
  });
};
