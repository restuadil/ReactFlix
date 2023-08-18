import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import SeriesFetch from "../assets/Series";
import BannerSeries from "../components/DetailSeries/BannerSeries";
import ListSeries from "../components/ListSeries/ListSeries";
import ListCredits from "../components/ListCredits/ListCredits";
import ListMovies from "../components/ListMovies/ListMovies";

const Serie = () => {
    const [detail, setDetail] = useState("");
    const [season, setSeason] = useState("")
    const [recomendation, setRecomendation] = useState("");
    const [cast, setCast] = useState("")
    const { id } = useParams();

    useEffect(() => {
        async function getDetail() {
            try {
                const detail = await axios.get(SeriesFetch.DETAIL(id));
                const credit = await axios.get(SeriesFetch.CREDITS(id));
                const recomendation = await axios.get(SeriesFetch.RECOMENDATION(id));

                setDetail(detail.data);
                setSeason(detail.data.seasons)
                setCast(credit.data.cast)
                setRecomendation(recomendation.data.results);
            } catch (error) {
                console.log(error);
            }
        }
        getDetail();
    }, [id]);

    return (
        <div className="bg-gray-950">
            <BannerSeries detail={detail} />
            <ListSeries movie={season} title={"SEASONS"} />
            <ListCredits credit={cast} title={"CAST"} />
            <ListMovies movie={recomendation} title={"RECOMENDATIONS"} />
        </div>
    )
}

export default Serie