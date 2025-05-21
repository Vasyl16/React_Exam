import { useQuery } from '@tanstack/react-query';
import type { MovieFullType } from '../../types/movieTypes';
import { getMovieFull } from '../services/getMovieFull';

export const useGetMovieFull = (id: string) => {
  return useQuery<MovieFullType>({
    queryKey: ['genres', id],
    queryFn: () => getMovieFull(id),
  });
};
