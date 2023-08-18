import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import SeriesFetch from "../assets/Series"
import ListMovies from "../components/ListMovies/ListMovies"

const SeriesGenre = () => {
    const { id } = useParams()
    const [genre, setGenre] = useState([])
    console.log(genre)
    useEffect(() => {
        async function getGenre() {
            try {
                const genre = await axios.get(SeriesFetch.GENRE(id))
                setGenre(genre.data.results)
            } catch (error) {
                console.log(error)
            }
        }
        getGenre()
    }, [id])
    return (
        <div>
            <ListMovies movie={genre} title={`Series`} />
        </div>
    )
}

export default SeriesGenre