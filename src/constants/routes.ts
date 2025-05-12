export const ROUTES = {
  HOME: '/',
  MOVIE: '/movie/:id',
};

export const getMovieDetailRoute = (id: string) => `/movie/${id}`;
