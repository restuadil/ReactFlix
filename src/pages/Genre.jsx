import GenreMovie from "../assets/GenreMovie"
const Genre = () => {
    return (
        <div className="flex flex-row items-center ">
            {
                GenreMovie.map((genre) => {
                    return (
                        <div key={genre.id} className="bg-red-500 w-28 text-center m-1">
                            <span>{genre.name}</span>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Genre