export const MOVIES_LIST =
  "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1";
export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkZDgyOGNlNmFiZjgzZWU0ODY1NTdjM2M5ZjA3MjBhOSIsIm5iZiI6MTcyNDAwMzI5NS40ODQ0ODgsInN1YiI6IjY2YzFiMTM4NjJkNzJkNmRmOWEyNmU4MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.fMOMM-yoF2hT4OdeylMkisDSogl7Oh4PT-shXokFWhk",
  },
};

export const VIDEO_LIST = `https://api.themoviedb.org/3/movie/533535/videos?language=en-US`;

export const YOUTUBE_URL = `https://www.youtube.com/watch?v=`;
export const VIDEO_TYPE = "Trailer";
