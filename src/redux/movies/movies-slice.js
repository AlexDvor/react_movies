import { createSlice } from '@reduxjs/toolkit';
import * as moviesOperations from './movies-operations';

const initialState = {
  favorite: [],
};

const movieSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    addMovieToLibrary(state, { payload }) {
      state.favorite = [...state.favorite, payload];
    },

    removeMovieById(state, { payload }) {
      const result = state.favorite.filter(todo => todo.id !== payload);
      state.favorite = [...result];
    },
  },
  extraReducers: {
    [moviesOperations.getMovies.fulfilled](state, action) {
      state.favorite = action.payload.results;
    },
  },
});

export default movieSlice.reducer;
export const { addMovieToLibrary, removeMovieById } = movieSlice.actions;
