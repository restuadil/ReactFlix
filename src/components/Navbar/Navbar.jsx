import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import NavbarItem from "./NavbarItem";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (

        <nav className="w-full py-5 flex flex-row items-center justify-between ">
            <div className="flex flex-row ml-5 ">
                <Link to={"/browse"}>
                    <img className="h-6 md:h-10" src="/images/logo.png" alt="" />
                </Link>
            </div>
            <div className={`${isMenuOpen ? 'flex flex-row-reverse' : 'block'}`}>
                <div className="flex flex-row md:hidden mr-5 ">
                    <button
                        onClick={toggleMenu}
                        className="text-white focus:outline-none mx-2"
                    >
                        <FontAwesomeIcon
                            icon={isMenuOpen ? faTimes : faBars}
                            className="h-6 w-6"
                        />
                    </button>
                </div>
                <div className={` ${isMenuOpen ? 'block' : 'hidden'} md:flex md:flex-row`}>
                    <NavbarItem label="Home" link={"/browse"} />
                    <NavbarItem label="Movies" link={"/movies"} />
                    <NavbarItem label="Series" link={"/series"} />
                    <NavbarItem label="Genre" link={"/genre"} />
                </div>

            </div>
        </nav>
    );
};

export default Navbar;
