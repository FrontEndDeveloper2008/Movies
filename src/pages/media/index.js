import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchMovies } from "../../store/slices/movies";

const MovieCard = ({ title, description, videoUrl }) => {
    const playVideo = () => {
        const videoPlayer = document.getElementById("video-player");
        videoPlayer.src = videoUrl;
        videoPlayer.play();
    };

    return (
        <div className="movie-card">
            <h2>{title}</h2>
            <p>{description}</p>
            <button onClick={playVideo}>Play</button>q
        </div>
    );
};

const MovieCatalog = ({ movies }) => (
    <div className="movie-catalog">
        {movies.map((movie) => (
            <MovieCard
                key={movie.id}
                title={movie.title}
                description={movie.description}
                videoUrl={movie.videoUrl}
            />
        ))}
    </div>
);

const MoviesContainer = () => {
    const dispatch = useDispatch();
    const movies = useSelector((state) => state.movies.movies);
    const status = useSelector((state) => state.movies.status);
    const error = useSelector((state) => state.movies.error);

    useEffect(() => {
        if (status === "idle") {
            dispatch(fetchMovies());
        }
    }, [status, dispatch]);

    const renderContent = () => {
        if (status === "loading") {
            return <div>Loading...</div>;
        } else if (status === "succeeded") {
            return <MovieCatalog movies={movies} />;
        } else if (status === "failed") {
            return <div>{error}</div>;
        }
    };

    return <div>{renderContent()}</div>;
};

const Movies = () => (
    <div>
        <MoviesContainer />
        <video id="video-player" controls width="400" height="300" />
    </div>
);

export default Movies;
