import React from "react";
import { Link } from "react-router-dom";

export default function Navbar({ toggle }) {
    return (
        <nav className='flex justify-between bg-opacity-0 top-0 z-10 items-center h-16 text-white font-bold text-lg w-full absolute' role='navigation'>
            <Link to="/" className="pl-8">
                Tes
            </Link>
            <div className="px-4 cursor-pointer md:hidden" onClick={toggle}>
                <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 6h16M4 12h16M4 18h16"
                    />
                </svg>
            </div>
            <div className="pr-8 md:block hidden">
                <Link className="p-4" to='/'>Home</Link>
                <Link className="p-4" to='/menu'>Menu</Link>
                <Link className="p-4" to='/about'>About</Link>
                <Link className="p-4" to='/contact'>Contact</Link>
            </div>

        </nav>
    );
}
