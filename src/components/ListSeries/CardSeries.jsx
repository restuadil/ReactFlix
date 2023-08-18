/* eslint-disable react/prop-types */
const CardSeries = ({ movie }) => {
    const MAX_NAME_LENGTH = 20;

    let movieName = movie.name || movie.title;
    const formattedName = movieName.length > MAX_NAME_LENGTH
        ? movieName.slice(0, MAX_NAME_LENGTH) + "..."
        : movieName;
    const rating = movie.vote_average.toFixed(1);

    return (
        <div className="relative ">
            <div
                className="w-[200px] h-[300px] rounded-lg m-3 overflow-hidden relative shadow-md shadow-slate-300"
                style={{
                    backgroundImage: movie.poster_path
                        ? `url(https://image.tmdb.org/t/p/w500/${movie.poster_path})`
                        : 'url(/images/unknown.jpg)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                <p className="bg-red-500 rounded-tl-lg text-white w-[50px] text-center">
                    {movie.episode_count}
                </p>
                <p className="bg-gray-500 text-white rounded-br-lg w-[50px] text-center absolute bottom-0 right-0">{rating}</p>
            </div>
            <p className="text-white text-center text-xl">{formattedName}</p>

        </div>
    );
};

export default CardSeries;
