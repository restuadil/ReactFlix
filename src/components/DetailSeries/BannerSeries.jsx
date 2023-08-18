import { Link } from "react-router-dom"
import Navbar from "../Navbar/Navbar"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBookmark, faPlay } from "@fortawesome/free-solid-svg-icons"
/* eslint-disable react/prop-types */

const BannerSeries = ({ detail }) => {
    return (
        <section
            className={`pb-5 lg:h-[100vh] bg-no-repeat bg-cover items-center text-white`}
            style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url("https://image.tmdb.org/t/p/original/${detail.backdrop_path}")`
            }}
        >
            <Navbar />
            <div className="flex flex-col justify-around lg:flex-row lg:items-center lg:justify-around lg:mx-40">
                <img src={`https://image.tmdb.org/t/p/original/${detail.poster_path}`}
                    className="w-[150px] h-[200px] rounded-2xl shadow-slate-600 shadow-lg mt-2 mx-auto lg:w-[300px] lg:h-[400px] lg:mx-0"
                    alt="" />
                <div className="flex flex-col items-center lg:ml-3">
                    <h1 className="text-xl my-1 text-center lg:text-3xl lg:my-2">{detail.name + " "}({detail && detail.first_air_date.slice(0, 4)})</h1>
                    <h1 className="text-xl my-1 text-center lg:text-3xl lg:my-2">Total Episode: {detail.number_of_episodes}</h1>

                    <div className="flex text-slate-800 text-xl lg:text-4xl lg:my-1 lg:mt-5">
                        <button className="mx-3 p-3 bg-slate-500 rounded-md bg-opacity-10 hover:text-white">
                            <FontAwesomeIcon icon={faPlay} />
                        </button>
                        <button className="mx-3 p-3 bg-slate-500 rounded-md bg-opacity-10 hover:text-white">
                            <FontAwesomeIcon icon={faBookmark} />
                        </button>
                    </div>
                    <div className="flex flex-row justify-center flex-wrap lg:text-2xl lg:my-2">
                        {detail && detail.genres.map((genre, index) => (
                            <Link to={`/movie/genre/${genre.id}`} key={genre.id}>
                                <ul>
                                    {index !== 0 && <span className="mx-1">,</span>}
                                    <li className="inline hover:text-gray-400">{genre.name}</li>
                                </ul>
                            </Link>
                        ))}
                    </div>
                    <h2 className="text-slate-700 font-serif text-xl text-center lg:text-2xl">{detail.tagline}</h2>
                </div>
            </div>
            <div className="mx-2 lg:mx-20 lg:mt-5">
                <h2 className="italic lg:text-xl">Overview</h2>
                <p className="text-justify font-serif lg:text-2xl">{detail.overview}</p>
            </div>
        </section>
    )
}

export default BannerSeries