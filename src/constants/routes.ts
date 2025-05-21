export const ROUTES = {
  HOME: '/',
  MOVIE: '/movie/:id',
};

export const getMovieDetailRoute = (id: number) => `/movie/${id}`;
