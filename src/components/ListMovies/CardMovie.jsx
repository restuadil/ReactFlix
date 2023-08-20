/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const CardMovie = ({ movie }) => {
    const MAX_NAME_LENGTH = 20;

    let movieName = movie.name || movie.title;
    const formattedName = movieName.length > MAX_NAME_LENGTH
        ? movieName.slice(0, MAX_NAME_LENGTH) + "..."
        : movieName;
    const releaseDateSeries = movie.first_air_date ? movie.first_air_date : movie.release_date;
    const shortReleaseDateMovies = releaseDateSeries ? releaseDateSeries.slice(0, 4) : '';
    const rating = movie.vote_average.toFixed(1);

    const scroll = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        })
    }

    return (
        <div className="relative transition-transform transform-gpu group hover:scale-105 hover:shadow-lg">
            <div
                className="w-[200px] h-[300px] rounded-lg m-2 overflow-hidden relative shadow-md shadow-slate-300"
                style={{
                    backgroundImage: movie.poster_path ?
                        `url(https://image.tmdb.org/t/p/w500/${movie.poster_path})`
                        : 'url(/images/unknown.jpg)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                <p className="bg-red-500 rounded-tl-lg text-white w-[50px] text-center">
                    {movie.first_air_date ? "Series" : "Movie"}
                </p>
                <p className="bg-gray-500 text-white rounded-br-lg w-[50px] text-center absolute bottom-0 right-0">{rating}</p>
            </div>
            <Link to={movie.first_air_date ? `/series/${movie.id}` : `/movie/${movie.id}`}
                onClick={scroll}>
                <p className="text-white text-center hover:text-gray-600">{formattedName}</p>
            </Link>

            <p className="text-gray-500 text-center">{shortReleaseDateMovies}</p>
        </div >
    );
};

export default CardMovie;
