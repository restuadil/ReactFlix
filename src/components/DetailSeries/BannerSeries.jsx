import { Link } from "react-router-dom"
import Navbar from "../Navbar/Navbar"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBookmark, faPlay, faTimes } from "@fortawesome/free-solid-svg-icons"
import { useEffect, useRef, useState } from "react"
/* eslint-disable react/prop-types */

const BannerSeries = ({ detail }) => {
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const popupRef = useRef(null);
    const trailer = detail && detail.videos.results[0]?.key

    const openPopup = () => {
        setIsPopupOpen(true);
    };

    const closePopup = () => {
        setIsPopupOpen(false);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (popupRef.current && !popupRef.current.contains(event.target)) {
                closePopup();
            }
        };

        if (isPopupOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isPopupOpen]);

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
                            <FontAwesomeIcon icon={faPlay} onClick={openPopup} />
                        </button>
                        <button className="mx-3 p-3 bg-slate-500 rounded-md bg-opacity-10 hover:text-white">
                            <FontAwesomeIcon icon={faBookmark} />
                        </button>
                    </div>
                    <div className="flex flex-row justify-center flex-wrap lg:text-2xl lg:my-2">
                        {detail && detail.genres.map((genre, index) => (
                            <Link to={`/genre/${genre.name}`} key={genre.id}>
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
            {isPopupOpen && trailer ? (
                <div className="fixed inset-0 z-10 flex justify-center items-center bg-black bg-opacity-70">
                    <div ref={popupRef} className="bg-white rounded-lg overflow-hidden w-2/3 h-2/3">
                        <iframe
                            title="Movie Trailer"
                            width="100%"
                            height="100%"
                            src={`https://www.youtube.com/embed/${trailer}`}
                            frameBorder="0"
                            allowFullScreen
                        />
                        <div className="p-4">
                            <button onClick={closePopup} className="text-white bg-red-500 px-4 py-2 rounded-md hover:bg-red-600">
                                <FontAwesomeIcon icon={faTimes} />
                            </button>
                        </div>
                    </div>
                </div>
            ) : (
                isPopupOpen && (
                    <div className="fixed inset-0 z-10 flex justify-center items-center bg-black bg-opacity-70">
                        <div ref={popupRef} className="bg-white rounded-lg overflow-hidden p-4">
                            <p>Trailer not available</p>
                            <button onClick={closePopup} className="text-white bg-red-500 px-4 py-2 rounded-md hover:bg-red-600 mt-4">
                                <FontAwesomeIcon icon={faTimes} />
                            </button>
                        </div>
                    </div>
                )
            )}
        </section>
    )
}

export default BannerSeries