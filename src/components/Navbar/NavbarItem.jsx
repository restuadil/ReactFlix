/* eslint-disable react/prop-types */

import { Link } from "react-router-dom"

const NavbarItem = ({ label, link }) => {
    return (
        <Link to={link}>
            <div className=" text-slate-500 text-lg mx-3 hover:text-white cursor-pointer transition duration-200 md:text-2xl">{label}</div>
        </Link>
    )
}

export default NavbarItem