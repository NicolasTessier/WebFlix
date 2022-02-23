export const fetchMovies = (params) => {
  const { value, year } = params;
  const queryString =
    (value ? "query=" + value : "") + (year ? "&year=" + year : "");
  return fetch(
    value.length > 0
      ? `${process.env.REACT_APP_BASE_URL}/search/movie?${queryString}&api_key=${process.env.REACT_APP_API_KEY}`
      : `${process.env.REACT_APP_BASE_URL}/movie/popular?api_key=${process.env.REACT_APP_API_KEY}`
  ).then((response) => response.json());
};

export const fetchMovie = (params) => {
  const id = params.id;
  return fetch(
    `${process.env.REACT_APP_BASE_URL}/movie/${id}?api_key=${process.env.REACT_APP_API_KEY}`
  ).then((response) => response.json());
};

export const fetchRecommandations = (params) => {
  const id = params.id;
  return fetch(
    `${process.env.REACT_APP_BASE_URL}/movie/${id}/recommendations?api_key=${process.env.REACT_APP_API_KEY}`
  ).then((response) => response.json());
};
