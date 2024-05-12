const apikey: string = '8c9035f85b249bc6b48d5a88418f6275';
export const baseImagePath = (size: string, path: string) =>
  `https://image.tmdb.org/t/p/${size}/${path}`;

export const nowPlayingMovies: string = `https://api.themoviedb.org/3/movie/now_playing?api_key=${apikey}`;
export const upcomingMovies: string = `https://api.themoviedb.org/3/movie/upcoming?api_key=${apikey}`;
export const popularMovies: string = `https://api.themoviedb.org/3/movie/popular?api_key=${apikey}`;
export const searchMovies = (keyword: string) =>
  `https://api.themoviedb.org/3/search/movie?api_key=${apikey}&query=${keyword}`;

export const movieDetails = (id: number) =>
  `https://api.themoviedb.org/3/movie/${id}?api_key=${apikey}`;

export const movieCastDetails = (id: number) =>
  `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${apikey}`;
