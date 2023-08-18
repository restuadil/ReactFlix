import ListMovies from "../components/ListMovies/ListMovies";
import Navbar from "../components/Navbar/Navbar";
import axios from "axios";
import { useEffect, useState } from "react";
import MovieFetch from "../assets/Movie";
import SeriesFetch from "../assets/Series";

const Home = () => {
    const [all, setAll] = useState([]);
    const [series, setSeries] = useState([]);
    const [movie, setMovie] = useState([]);
    const [koreaSeries, setKoreaSeries] = useState([]);
    const [japanSeries, setJapanSeries] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const allData = await axios.get(MovieFetch.All(1));
                const seriesData = await axios.get(SeriesFetch.TRENDING(2));
                const movieData = await axios.get(MovieFetch.NOWPLAYING(2));
                const koreaSeriesData = await axios.get(SeriesFetch.COUNTRIES("ko"));
                const japanSeriesData = await axios.get(SeriesFetch.COUNTRIES("ja"));

                setAll(allData.data.results);
                setSeries(seriesData.data.results);
                setMovie(movieData.data.results);
                setKoreaSeries(koreaSeriesData.data.results);
                setJapanSeries(japanSeriesData.data.results);
            } catch (error) {
                console.log(error);
            }
        }

        fetchData();
    }, []);

    return (
        <>
            <div className="bg-gray-950">
                <Navbar />
                <ListMovies title={"RECOMENDATIONS"} movie={all} />
                <ListMovies title={"POPULAR SERIES"} movie={series} />
                <ListMovies title={"POPULAR MOVIES"} movie={movie} />
                <ListMovies title={"KOREAN SERIES"} movie={koreaSeries} />
                <ListMovies title={"JAPANESE SERIES"} movie={japanSeries} />
            </div>
        </>
    );
};

export default Home;
