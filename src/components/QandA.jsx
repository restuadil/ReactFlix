import { useState } from "react";
import data from "../assets/QandA";
import { nanoid } from "nanoid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const QandA = () => {
    const [openAnswerId, setOpenAnswerId] = useState(null);

    const toggleAnswer = (id) => {
        setOpenAnswerId((prevId) => (prevId === id ? null : id));
    };

    return (
        <div className="border-y-4 border-gray-500">
            <div className="w-5/6 mx-auto flex flex-col justify-center text-center my-3">
                <h1 className="text-3xl font-bold mt-5 text-white mb-5">Tanya Jawab Umum</h1>
                {data.map((question) => (
                    <ul key={nanoid()} onClick={() => toggleAnswer(question.id)}>
                        <div
                            className={`bg-gray-800 hover:bg-gray-900 hover:cursor-pointer my-1 py-7 text-left `}
                        >
                            <li className="text-2xl text-white mx-5 flex flex-row justify-between items-center">
                                <h2>{question.q}</h2>
                                <div>
                                    <FontAwesomeIcon
                                        icon={faPlus}
                                        className={`transform ${openAnswerId === question.id ? "rotate-45" : ""} text-white w-6 h-6 transition-transform`}
                                    />
                                </div>
                            </li>
                            {openAnswerId === question.id && (
                                <div className="text-2xl text-white mx-5 my-4">
                                    <p dangerouslySetInnerHTML={{ __html: question.a }}></p>
                                </div>
                            )}
                        </div>
                    </ul>
                ))}
            </div>
        </div>
    );
};

export default QandA;
