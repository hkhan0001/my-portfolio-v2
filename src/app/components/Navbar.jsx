"use client"
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import NavLink from "./NavLink";

const navLinks = [
    {
        title: "Home",
        path: "#home",
    },
    {
        title: "Resume",
        path: "#Resume",
    },
    {
        title: "Projects",
        path: "#Projects",
    },
]

const Navbar = () => {
    const [navbarOpen, setNavbarOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 right-0 z-10">
            <div className="flex flex-wrap items-center justify-between mx-auto px-4 pt-4">
                <Link href={"/"}><Image className="top-1/2" src='/images/icon.png' alt="profile pic" width={60} height={60}/></Link>
                <div >

                </div>
                <div className="menu hidden md:block md:w-auto" id="navbar">
                    <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-10">
                        {
                            navLinks.map((link, index) => (
                                <li key={index}>
                                    <NavLink href={link.path} title={link.title} />
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;