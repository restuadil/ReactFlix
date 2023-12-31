/* eslint-disable react/prop-types */

const Input = ({ id, type, label, onChange }) => {
    return (
        <div className="relative">
            <input
                id={id}
                type={type}
                name={id}
                className="
                        my-2
                        block
                        rounded-md
                        px-6
                        pt-6
                        pb-1
                        w-full
                        text-white
                        bg-neutral-700
                        bg-opacity-50
                        appearance-none
                        focus:outline-none
                        focus:ring-0
                        peer"
                placeholder=" "
                onChange={onChange}
            />
            <label
                htmlFor={id}
                className="
                absolute 
                text-md 
                text-black
                duration-150
                transform
                -translate-y-3
                scale-75
                top-5
                z-10
                origin-[0]
                left-6
                peer-placeholder-shown:scale-100
                peer-placeholder-shown:translate-y-0
                peer-focus:scale-75
                peer-focus:-translate-y-3
                "
            >
                {label}
            </label>
        </div>
    );
};

export default Input;
