// store/slices/movies/moviesSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
    movies: [],
    status: 'idle',
    error: null,
};

export const fetchMovies = createAsyncThunk('movies/fetchMovies', async () => {
    const response = await fetch('https://api.example.com/movies');
    const data = await response.json();
    return data;
});

const moviesSlice = createSlice({
    name: 'movies',
    initialState,
    reducers: {
        addMovie: (state, action) => {
            state.movies.push(action.payload);
        },
        editMovie: (state, action) => {
            const index = state.movies.findIndex((movie) => movie.id === action.payload.id);
            if (index >= 0) {
                state.movies[index] = action.payload;
            }
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchMovies.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchMovies.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.movies = action.payload;
            })
            .addCase(fetchMovies.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    },
});

export const { addMovie, editMovie } = moviesSlice.actions;

export default moviesSlice.reducer;
