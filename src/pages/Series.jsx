import { useEffect, useState } from "react";
import Navbar from "../components/Navbar/Navbar"
import ListMovies from "../components/ListMovies/ListMovies";
import axios from "axios";
import SeriesFetch from "../assets/Series";
const Series = () => {
    const [trendingSeries, setTrendingSeries] = useState([]);
    const [koreaSeries, setKoreaSeries] = useState([]);
    const [japanSeries, setJapanSeries] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {

                const trendingSeries = await axios.get(SeriesFetch.TRENDING(1));
                const koreaSeriesData = await axios.get(SeriesFetch.COUNTRIES("ko"));
                const japanSeriesData = await axios.get(SeriesFetch.COUNTRIES("ja"));

                setTrendingSeries(trendingSeries.data.results);
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
                <ListMovies title={"TRENDING SERIES"} movie={trendingSeries} />
                <ListMovies title={"KOREAN SERIES"} movie={koreaSeries} />
                <ListMovies title={"JAPANESE SERIES"} movie={japanSeries} />
            </div>
        </>
    );
}

export default Series