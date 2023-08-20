import { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faChevronDown, faTimes } from "@fortawesome/free-solid-svg-icons";
import NavbarItem from "./NavbarItem";
import { Link } from "react-router-dom";
import GenreMovie from "../../assets/GenreMovie";

const Navbar = () => {


    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);
    const sortedGenreMovie = GenreMovie.slice().sort((a, b) => a.name.localeCompare(b.name));

    const toogleMenu = () => {
        if (isMenuOpen) {
            setIsMenuOpen(false);
        }
        setIsMenuOpen(!isMenuOpen);
    };

    const toogleDropdown = () => {
        if (isDropdownOpen) {
            setIsDropdownOpen(false);
        }
        setIsDropdownOpen(!isDropdownOpen);
    };

    const closeDropdown = () => {
        setIsDropdownOpen(false);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                closeDropdown();
            }
        };

        if (isDropdownOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isDropdownOpen]);


    return (

        <nav className="w-full py-3 md:py-5 flex flex-row items-center justify-between ">
            <div className="flex flex-row ml-5 ">
                <Link to={"/browse"}>
                    <img className="h-6 md:h-10" src="/images/logo.png" alt="" />
                </Link>
            </div>
            <div className={`${isMenuOpen ? 'flex flex-row-reverse' : 'block'}`}>
                <div className="flex flex-row md:hidden mr-5 ">
                    <button
                        onClick={toogleMenu}
                        className="text-white focus:outline-none mx-2"
                    >
                        <FontAwesomeIcon
                            icon={isMenuOpen ? faTimes : faBars}
                            className="h-6 w-6"
                        />
                    </button>
                </div>
                <div className={` ${isMenuOpen ? 'absolute bg-slate-900 z-10 top-10 right-0 text-center py-2' : 'hidden'} md:flex md:flex-row`}>
                    <NavbarItem label="Home" link={"/browse"} />
                    <NavbarItem label="Movies" link={"/movies"} />
                    <NavbarItem label="Series" link={"/series"} />
                    <div className="relative inline-block text-left ml-2">
                        <button onClick={toogleDropdown} className="text-slate-500 text-lg mx-3 hover:text-white cursor-pointer transition duration-200 md:text-2xl">
                            Genre <FontAwesomeIcon icon={faChevronDown} className="ml-1" />
                        </button>
                        {isDropdownOpen && (
                            <div ref={dropdownRef}
                                className="origin-top-right absolute right-0 mt-2 w-40 rounded-md shadow-lg bg-slate-700 ring-1 ring-black ring-opacity-5 z-[2] overflow-y-auto max-h-48" >
                                <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                                    {sortedGenreMovie.map(genre => (
                                        <Link to={`/genre/${genre.name}`} key={genre.id}>
                                            <p className="block px-4 py-2 text-sm text-slate-100 hover:text-white hover:bg-slate-400" role="menuitem">{genre.name}</p>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
