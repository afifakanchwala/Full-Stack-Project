import {
  configureStore,
  createAsyncThunk,
  createSlice,
} from "@reduxjs/toolkit";
import axios from "axios";
import { api_key, url } from "../utils/constants";

import { base_url } from "../utils/constants";

const initialState = {
  movies: [],
  genresLoaded: false,
  genres: [],
};

export const getGenres = createAsyncThunk("flixxit/genres", async () => {
  const {
    data: { genres },
  } = await axios.get(`${url}/genre/movie/list?api_key=${api_key}`);
  //console.log(data.genres);
  return genres;
});

const createArrayFromRawData = (array, moviesArray, genres) => {
  //console.log(array);
  array.forEach((movie) => {
    const movieGenres = [];
    movie.genre_ids.forEach((genre) => {
      const name = genres.find(({ id }) => id === genre);
      if (name) movieGenres.push(name.name);
    });
    if (movie.backdrop_path)
      moviesArray.push({
        id: movie.id,
        name: movie?.original_name ? movie.original_name : movie.original_title,
        image: movie.backdrop_path,
        genres: movieGenres.slice(0, 3),
      });
  });
};

const getRawData = async (api, genres, paging = false) => {
  const moviesArray = [];
  for (let i = 1; moviesArray.length < 60 && i < 10; i++) {
    const {
      data: { results },
    } = await axios.get(`${api}${paging ? `&page=${i}` : ""}`);
    createArrayFromRawData(results, moviesArray, genres);
  }
  return moviesArray;
};

export const fetchDataByGenre = createAsyncThunk(
  "flixxit/genre",

  async ({ genre, type }, thunkAPI) => {
    console.log("in fetch data", genre, type);
    const {
      flixxit: { genres },
    } = thunkAPI.getState();
    return getRawData(
      `${url}/discover/${type}?api_key=${api_key}&with_genres=${genre}`,
      genres
    );
  }
);

export const fetchMovies = createAsyncThunk(
  "flixxit/trending",
  async ({ type }, thunkApi) => {
    const {
      flixxit: { genres },
    } = thunkApi.getState();
    return getRawData(
      `${url}/trending/${type}/week?api_key=${api_key}`,
      genres,
      true
    );
  }
);

export const getLikedMovies = createAsyncThunk(
  "flixxit/getLiked",
  async (email) => {
    const {
      data: { movies },
    } = await axios.get(`${base_url}/api/user/liked/${email}`);
    return movies;
  }
);

export const removedMovie = createAsyncThunk(
  "flixxit/deleteLiked",
  async ({ movieId, email }) => {
    const {
      data: { movies },
    } = await axios.put(`${base_url}/api/user/remove`, {
      email,
      movieId,
    });
    return movies;
  }
);

const FlixxitSlice = createSlice({
  name: "Flixxit",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getGenres.fulfilled, (state, action) => {
      state.genres = action.payload;
      state.genresLoaded = true;
    });
    builder.addCase(fetchMovies.fulfilled, (state, action) => {
      state.movies = action.payload;
    });
    builder.addCase(fetchDataByGenre.fulfilled, (state, action) => {
      state.movies = action.payload;
    });
    builder.addCase(getLikedMovies.fulfilled, (state, action) => {
      state.movies = action.payload;
    });
    builder.addCase(removedMovie.fulfilled, (state, action) => {
      state.movies = action.payload;
    });
  },
});

export const store = configureStore({
  reducer: {
    flixxit: FlixxitSlice.reducer,
  },
});
export const { setGenres, setMovies } = FlixxitSlice.actions;
