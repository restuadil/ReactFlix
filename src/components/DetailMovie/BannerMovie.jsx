/* eslint-disable react/prop-types */

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Navbar from "../Navbar/Navbar";
import RuntimeMovie from "./RuntimeMovie";
import { faBookmark, faPlay, faXmark } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useState } from "react";
import YouTube from 'react-youtube';

const BannerMovie = ({ detail }) => {
    const opts = {
        height: '390',
        width: '640',
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 1
        }
    }
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const openPopup = () => {
        setIsPopupOpen(true);
    };

    const closePopup = () => {
        setIsPopupOpen(false);
    };

    const trailer = detail && detail.videos.results[0]?.key;
    const videoId = trailer;

    return (
        <>
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
                        <h1 className="text-xl my-1 text-center lg:text-3xl lg:my-2">{detail.title}</h1>
                        <RuntimeMovie runtime={detail.runtime} />
                        <div className="flex text-slate-700 text-xl lg:text-4xl lg:my-1 lg:mt-5">
                            <button onClick={openPopup} className="mx-3 p-3 bg-slate-500 rounded-md bg-opacity-10 hover:text-white">
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
            {isPopupOpen && (
                <div className="fixed inset-0 z-10 flex justify-center items-center bg-black bg-opacity-0">
                    <YouTube videoId={videoId} opts={opts} />
                    <button onClick={closePopup} className="text-white bg-red-500 px-4 py-2 rounded-md hover:bg-red-600">
                        <FontAwesomeIcon icon={faXmark} />
                    </button>
                </div>
            )}
        </>
    );
};

export default BannerMovie;
