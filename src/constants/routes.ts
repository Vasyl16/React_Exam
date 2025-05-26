export const BASE_URL = 'React_Exam';

export const ROUTES = {
  HOME: `/${BASE_URL}`,
  MOVIE: `/${BASE_URL}/movie/:id`,
};

export const getMovieDetailRoute = (id: number) => `/${BASE_URL}/movie/${id}`;
