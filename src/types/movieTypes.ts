export interface NewestMovieData {
  id: number;
  title: string;
  overview: string;
  poster_path: string;
}

export interface MovieSliceState {
  page: number;
  total_pages: number;
  results: MovieData[];
  status: 'success' | 'error' | 'loading';
}
export interface MovieData {
  id: number;
  title: string;
  release_date: string;
  poster_path: string;
}

export type Categorytype = {
  name: string;
  id?: number;
};

export type SortOptionType = {
  name: string;
  sortBy: string;
};

export type MovieOptionsType = {
  page: number;
  genreId?: number;
  sortBy: string;
};
