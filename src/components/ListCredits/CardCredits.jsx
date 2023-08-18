/* eslint-disable react/prop-types */
const CardCredits = ({ item }) => {
    const MAX_NAME_LENGTH = 20;

    let movieName = item.name || item.title;
    const formattedName = movieName.length > MAX_NAME_LENGTH
        ? movieName.slice(0, MAX_NAME_LENGTH) + "..."
        : movieName;

    return (
        <div className="relative">
            <div
                className="w-[200px] h-[300px] rounded-lg m-2 overflow-hidden shadow-md shadow-slate-300"
                style={{
                    backgroundImage: item.profile_path
                        ? `url(https://image.tmdb.org/t/p/w500/${item.profile_path})`
                        : 'url(/images/unknown.jpg)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >

            </div>
            <p className="text-white text-center ">{formattedName}</p>
            <p className="text-white text-center ">{item.character ? item.character : item.job}</p>

        </div>
    );
};

export default CardCredits;
