/* eslint-disable react/prop-types */

import { useState } from "react";

const ListReviews = ({ review, title }) => {
    const [show, setShow] = useState(null);

    function handleClick(id) {
        setShow((prevId) => prevId === id ? null : id);
    }

    return (
        <div className="mx-10 py-3 relative border-b border-black">
            <div className="flex flex-row items-center justify-center md:justify-start mb-5 ">
                <div className="bg-red-500 w-1 h-7"></div>
                <h1 className="text-white text-center ml-2 text-xl md:text-2xl">{title}</h1>
            </div>
            {
                review && review.map((item) => {
                    return (
                        <div key={item.id} className=" border-black border-2 p-2 rounded-xl m-3  shadow-md shadow-slate-400">
                            <div className="flex flex-row items-center ">
                                <img
                                    src={item.author_details.avatar_path ? `https://www.themoviedb.org/t/p/w500/${item.author_details.avatar_path}` : "/images/unknown.jpg"}
                                    className="w-10 h-10 rounded-full my-4 "
                                    alt=""
                                />
                                <div className="flex flex-col ml-4">
                                    <h1 className="text-white text-base ">{item.author}</h1>
                                    <span className="text-white text-xs">Writen On {item.created_at.slice(0, 10)}</span>
                                </div>
                            </div>
                            <p className="text-white text-xs  text-justify">
                                {show !== item.id && item.content.length > 500
                                    ? item.content.slice(0, 500) + "..."
                                    : item.content}
                                {item.content.length > 500 && (
                                    <button onClick={() => handleClick(item.id)} className="hover:underline text-3xl text-white">
                                        {show === item.id ? "Read Less" : "Read More"}
                                    </button>
                                )}
                            </p>
                        </div >
                    );
                })
            }
        </div>
    )
}

export default ListReviews