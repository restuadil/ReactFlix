/* eslint-disable react/prop-types */

const Info = ({ title, children, img, second }) => {
    return (
        <div className="bg-black border-y-4 border-gray-500">
            <div className={`flex flex-col mb-5  md:flex-row ${second ? 'md:flex-row-reverse' : ''} md:mx-10 lg:mx-20 sm:h-[60vh] `}>
                <div className={`text-white mx-5 my-2 flex items-center justify-center md:w-1/2`}>
                    <div className="text-center">
                        <h2 className="text-4xl font-bold mt-5">{title}</h2>
                        <p className="text-xl my-4">{children}</p>
                    </div>
                </div>
                <img src={img} alt="" className="md:w-1/2" />
            </div>
        </div>
    )
}

export default Info