    import { configureStore } from '@reduxjs/toolkit';
    import moviesReducer from '../slices/movies/index';

    const localStorageMiddleware = ({ getState }) => {
        return (next) => (action) => {
            const result = next(action);
            localStorage.setItem('applicationState', JSON.stringify(getState()));
            return result;
        };
    };

    const reHydrateStore = () => {
        if (localStorage.getItem('applicationState') !== null) {
            return JSON.parse(localStorage.getItem('applicationState'));
        }
    };

    export const store = configureStore({
        reducer: {
            movies: moviesReducer,
        },
        preloadedState: reHydrateStore(),
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware().concat(localStorageMiddleware),
    });
