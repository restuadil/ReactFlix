/* eslint-disable react/prop-types */
import { useState } from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import CardSeries from './CardSeries';

const ListSeries = ({ title, movie }) => {
    const [startIndex, setStartIndex] = useState(0);

    const prevSlide = () => {
        setStartIndex((prevIndex) => Math.max(prevIndex - 1, 0));
    };

    const nextSlide = () => {
        setStartIndex((prevIndex) => Math.min(prevIndex + 1, movie.length - 5));
    };


    return (
        <div className="mx-10 py-3 relative border-b border-black">
            <div className="flex flex-row items-center justify-center md:justify-start mb-5 ">
                <div className="bg-red-500 w-1 h-7"></div>
                <h1 className="text-white text-center ml-2 text-xl md:text-2xl">{title}</h1>
            </div>
            <div className='sm:hidden md:hidden lg:hidden xl:block'>
                <button
                    className={`absolute left-7 top-1/2 transform -translate-y-1/2 bg-opacity-30 p-2 rounded-full py-5 ${startIndex === 0 ? 'hidden' : ""}
            bg-gray-700 active:scale-125 active:text-white`}
                    onClick={prevSlide}
                >
                    <FontAwesomeIcon icon={faChevronLeft} />
                </button>
                <button
                    className={`absolute right-7 top-1/2 transform -translate-y-1/2 bg-opacity-30 p-2 rounded-full py-5 ${startIndex === movie.length - 5 ? 'hidden' : ""}
                        bg-gray-700 active:scale-125 active:text-white`}
                    onClick={nextSlide}
                >
                    <FontAwesomeIcon icon={faChevronRight} />
                </button>
            </div>
            <div className="flex flex-row flex-wrap justify-center">
                {movie && movie.slice(startIndex, startIndex + 6).map((movie) => {
                    return (
                        <motion.div
                            key={movie.id}
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 50 }}
                            transition={{ duration: 0.5 }}
                        >
                            <CardSeries movie={movie} />
                        </motion.div>
                    );
                })}
            </div>
        </div>
    );
};

export default ListSeries;
