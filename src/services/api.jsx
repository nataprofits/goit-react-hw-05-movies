import axios from 'axios';

const API_KEY = '64d37a07aa15dae3b8f14e8351f25936';

axios.defaults.params = {
  api_key: API_KEY,
};

export const fetchPopularMovies = () => {
  return axios.get('https://api.themoviedb.org/3/trending/movie/day');
};

export const fetchReview = (id) => {
  return axios.get(`https://api.themoviedb.org/3/movie/${id}/reviews`);
};

export const fetchDetails = (id) => {
  return axios.get(`https://api.themoviedb.org/3/movie/${id}`);
};

export const fetchCast= id => {
  return axios.get(`https://api.themoviedb.org/3/movie/${id}/credits`);
};

export const fetchAnyMovie = query => {
  return axios.get(`https://api.themoviedb.org/3/search/movie?query=${query}`
  );
};