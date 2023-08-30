import { useEffect, useState } from "react"
import Navbar from "../components/Navbar/Navbar"
import axios from "axios"
import MovieFetch from "../assets/Movie"
import ListMovies from "../components/ListMovies/ListMovies"

const Movies = () => {
    const [nowPlaying, setNowPlaying] = useState([]);
    const [popular, setPopular] = useState([]);
    const [topRated, setTopRated] = useState([]);
    const [upcoming, setUpcoming] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const nowPlaying = await axios.get(MovieFetch.NOWPLAYING(1));
                const popular = await axios.get(MovieFetch.POPULAR(1));
                const topRated = await axios.get(MovieFetch.TOPRATED(1));
                const upcoming = await axios.get(MovieFetch.UPCOMING(1));
                setNowPlaying(nowPlaying.data.results);
                setPopular(popular.data.results);
                setTopRated(topRated.data.results);
                setUpcoming(upcoming.data.results);
            } catch (error) {
                console.log(error);
            }
        }

        fetchData();
    }, [nowPlaying, popular, topRated, upcoming]);

    return (
        <>
            <div className="bg-gray-950">
                <Navbar />
                <ListMovies title={"NOW PLAYING MOVIES"} movie={nowPlaying} />
                <ListMovies title={"POPULAR MOVIES"} movie={popular} />
                <ListMovies title={"TOP RATED MOVIES"} movie={topRated} />
                <ListMovies title={"UPCOMING MOVIES"} movie={upcoming} />
            </div>
        </>
    );
}

export default Movies