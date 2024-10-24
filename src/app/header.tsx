"use client";
import Image from "next/image";

import Link from "next/link";
import { useState } from 'react';

function Header() {
    const [isMenuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };

    const handleNavigation = () => {
        setMenuOpen(false); // Close the menu on navigation
    };

    return (
        <header className="font-extrabold font-serif flex justify-between items-center bg-gray-500 p-4">
            <div className="flex items-center">
                <Image
                   width={130}
                   height={100}
                    className="w-[130px] h-[100px] -mt-3"
                    src="/adina-logo.png" 
                    alt="logo" 
                />
                <h2 className="text-[40px] ml-4 font-normal pb-4 text-orange-600">Portfolio</h2>
            </div>

            <div className="md:hidden">
                <button onClick={toggleMenu} className="text-white focus:outline-none">
                    {/* Hamburger Icon */}
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                    </svg>
                </button>
            </div>

            <nav className={`md:flex ${isMenuOpen ? "block" : "hidden"} md:block`}>
                <ul className="flex gap-x-5 text-white text-[17px] mt-7 md:mr-40">
                    <li className="hover:text-orange-500">
                        <Link href="/" onClick={handleNavigation}>Home</Link>
                    </li>
                    <li className="hover:text-orange-500">
                        <Link href="/about" onClick={handleNavigation}>About</Link>
                    </li>
                    <li className="hover:text-orange-500">
                        <Link href="/education" onClick={handleNavigation}>Education</Link>
                    </li>
                </ul>

                <ul>
                    <li>
                        <button className="text-black bg-white pl-3 pr-3 pb-2 pt-2 rounded-[10px] mt-6 mr-10 hover:text-white hover:bg-orange-600">
                            <Link href="/contact" onClick={handleNavigation}>Contact Us</Link>
                        </button>
                    </li>
                </ul>
            </nav>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden absolute top-16 left-0 w-full bg-gray-500 p-4">
                    <ul className="flex flex-col items-center gap-y-3 text-white">
                        <li className="hover:text-orange-500">
                            <Link href="/" onClick={handleNavigation}>Home</Link>
                        </li>
                        <li className="hover:text-orange-500">
                            <Link href="/about" onClick={handleNavigation}>About</Link>
                        </li>
                        <li className="hover:text-orange-500">
                            <Link href="/education" onClick={handleNavigation}>Education</Link>
                        </li>
                        <li>
                            <button className="text-black bg-white pl-3 pr-3 pb-2 pt-2 rounded-[10px] hover:text-white hover:bg-orange-600">
                                <Link href="/contact" onClick={handleNavigation}>Contact Us</Link>
                            </button>
                        </li>
                    </ul>
                </div>
            )}
        </header>
    );
}

export default Header;
