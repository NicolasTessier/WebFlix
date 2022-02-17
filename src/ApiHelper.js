export const fetchMovies = (value) => {
  return fetch(
    value.length > 0
      ? `${process.env.REACT_APP_BASE_URL}/search/movie?query=${value}&api_key=${process.env.REACT_APP_API_KEY}`
      : `${process.env.REACT_APP_BASE_URL}/movie/popular?api_key=${process.env.REACT_APP_API_KEY}`
  ).then((response) => response.json());
};

export const fetchMovie = (id) => {
  return fetch(
    `${process.env.REACT_APP_BASE_URL}/movie/${id}?api_key=${process.env.REACT_APP_API_KEY}`
  ).then((response) => response.json());
};
