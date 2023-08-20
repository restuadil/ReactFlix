import { useParams } from 'react-router-dom';
import GenreMovie from '../assets/GenreMovie';
import { useEffect, useState } from 'react';
import axios from 'axios'
import SeriesFetch from '../assets/Series';
import Navbar from '../components/Navbar/Navbar';
import ListMovies from '../components/ListMovies/ListMovies';
import MovieFetch from '../assets/Movie';


const Genre = () => {
    const { genreName } = useParams()
    const selectedGenre = GenreMovie.find(genre => genre.name === genreName);
    const id = selectedGenre.id
    const [seriesGenre, setSeriesGenre] = useState([]);
    const [moviesGenre, setMoviesGenre] = useState([]);
    console.log(seriesGenre)

    useEffect(() => {
        async function getGenre() {
            const seriesGenre = await axios.get(SeriesFetch.GENRE(id))
            const moviesGenre = await axios.get(MovieFetch.GENRE(id))
            setSeriesGenre(seriesGenre.data.results)
            setMoviesGenre(moviesGenre.data.results)
        }
        getGenre();
    }, [id]);

    return (
        <div className='bg-gray-950'>
            <Navbar />
            {seriesGenre.length === 0 ?
                <div className="mx-10 py-3 relative border-b border-black">
                    <div className="flex flex-row items-center justify-center md:justify-start mb-5 ">
                        <div className="bg-red-500 w-1 h-7"></div>
                        <h1 className="text-white text-center ml-2 text-xl md:text-2xl">Series Not Found</h1>
                    </div>
                </div>
                :
                <ListMovies title={genreName + " " + "Series"} movie={seriesGenre} />
            }
            {moviesGenre.length === 0 ?
                <div className="mx-10 py-3 relative border-b border-black">
                    <div className="flex flex-row items-center justify-center md:justify-start mb-5 ">
                        <div className="bg-red-500 w-1 h-7"></div>
                        <h1 className="text-white text-center ml-2 text-xl md:text-2xl">Movies Not Found</h1>
                    </div>
                </div>
                :
                <ListMovies title={genreName + " " + "Movies"} movie={moviesGenre} />
            }
        </div>
    )
}

export default Genre