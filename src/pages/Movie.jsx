import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import MovieFetch from "../assets/Movie";
import BannerMovie from "../components/DetailMovie/BannerMovie";
import ListCredits from "../components/ListCredits/ListCredits";
import ListMovies from "../components/ListMovies/ListMovies";
import ListReviews from "../components/ListReviews/ListReviews";

const Movie = () => {
    const [detail, SetDetail] = useState("");
    const [credit, setCredit] = useState("");
    const [crew, setCrew] = useState("");
    const [recomendation, setRecomendation] = useState("");
    const [reviews, setReviews] = useState("");
    const { id } = useParams();

    useEffect(() => {
        async function getDetail() {
            try {
                const detail = await axios.get(MovieFetch.DETAIL(id));
                const credit = await axios.get(MovieFetch.CREDITS(id));
                const recomendation = await axios.get(MovieFetch.RECOMENDATION(id));
                const reviews = await axios.get(MovieFetch.REVIEWS(id))
                SetDetail(detail.data);
                setCredit(credit.data.cast);
                setCrew(credit.data.crew);
                setRecomendation(recomendation.data.results);
                setReviews(reviews.data.results);
            } catch (error) {
                console.log(error);
            }
        }
        getDetail();
    }, [id]);

    return (
        <div className="bg-gray-950">
            <BannerMovie detail={detail} />
            <ListCredits credit={credit} title={"CAST"} />
            <ListCredits credit={crew} title={"CREW"} />
            <ListReviews review={reviews} title={"REVIEWS"} />
            {recomendation.length != 0 && (
                <ListMovies movie={recomendation} title={"RECOMENDATIONS"} />
            )}
        </div>
    );
}

export default Movie