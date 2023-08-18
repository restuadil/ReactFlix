import { faClock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

/* eslint-disable react/prop-types */
const formatRuntime = (minutes) => {
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;

    return `${hours} hours ${remainingMinutes} minutes`;
};
const RuntimeMovie = ({ runtime }) => {

    return (
        <div className="flex flex-row items-center ">
            <FontAwesomeIcon icon={faClock} className="text-white lg:text-xl text-center" />
            <p className="text-white ml-2 lg:text-xl text-center">{runtime ? formatRuntime(runtime) : ''}</p>
        </div>
    )

}

export default RuntimeMovie;