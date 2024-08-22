export const MOVIES_LIST =
  "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1";
export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkZDgyOGNlNmFiZjgzZWU0ODY1NTdjM2M5ZjA3MjBhOSIsIm5iZiI6MTcyNDA5MjUxNi43ODQxNjEsInN1YiI6IjY2YzFiMTM4NjJkNzJkNmRmOWEyNmU4MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.la9pTGEUPNl7H05O1xfCiRa-QzMbVoiOVtJwxk00Zw0",
  },
};

export const VIDEO_LIST = `https://api.themoviedb.org/3/movie/`;
export const VIDEO_LIST_END = `/videos?language=en-US`;

export const YOUTUBE_URL = `https://www.youtube.com/watch?v=`;
export const VIDEO_TYPE = "Trailer";
export const IMAGE_URL = `https://api.themoviedb.org/3/movie/`;
export const IMAGE_URL_END = `/images`;

export const IMAGE_PATH = `https://image.tmdb.org/t/p/original/`;
