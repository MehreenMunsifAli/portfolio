"use client";
import Link from "next/link";
import { RiDownloadCloudLine } from "react-icons/ri";
import { useState } from "react";

export default function HeaderComponent() {
    const [isClicked, setIsClicked] = useState<boolean>(false);

    const toggleButton = () => {
        setIsClicked(!isClicked);
    }

    const handleLinkClick = () => {
        setIsClicked(false)
    }

    return(
        <header className="sticky z-50 top-0 shadow-md">
            <nav className="container mx-auto w-full h-16 md:h-24 flex flex-nowrap justify-between items-center bg-gray-200 px-6 md:px-12">
                {/* Logo section */}
                <div className="w-2/3 md:w-[30%] lg:w-1.5/5">
                    <Link href="/">
                        <h1 className="font-serif italic text-lg lg:text-2xl font-semibold">Mehreen Munsif Ali</h1>
                    </Link>
                </div>

                {/* Hamburger for small and medium screen */}
                <div className="lg:hidden w-1/3 text-2xl text-slate-700 flex justify-end">
                    <button type="button" onClick={toggleButton} >
                        {isClicked ? <>&#10005;</> : <>&#8801;</>}
                    </button>
                </div>

                {/* Large screen menu */}
                <div className="hidden lg:w-2.5/5 lg:flex items-center justify-center text-md font-medium">
                        <ul className="flex space-x-6 whitespace-nowrap">
                            <li>
                                <Link href="#about" className="mr-5 hover:text-red-900 hover:font-semibold">
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link href="#skills" className="mr-5 hover:text-red-900 hover:font-semibold">
                                    Skills
                                </Link>
                            </li>
                            <li>
                                <Link href="#project" className="mr-5 hover:text-red-900 hover:font-semibold">
                                    Projects
                                </Link>
                            </li>
                            <li>
                                <Link href="#experience" className="mr-5 hover:text-red-900 hover:font-semibold">
                                    Experience
                                </Link>
                            </li>
                            <li>
                                <Link href="#contact" className="mr-5 hover:text-red-900 hover:font-semibold">
                                    Contact
                                </Link>
                            </li>    
                        </ul>
                        
                </div>

                {/* Download CV Button */}
                <div className="hidden lg:w-1/5 lg:flex justify-end ">
                    <Link href="/assets/cv/Mehreen-Resume.pdf" target="_blank">
                        <button type="button" className="tracking-wide rounded-3xl border-none bg-black text-white text-md px-6 py-3 hover:bg-gray-700 flex">
                            Download CV
                            <RiDownloadCloudLine className="ml-2 text-xl my-auto " />
                        </button>
                    </Link>    
                </div>
                
                {/* Mobile and Medium screen menu  */}
                <div className={`lg:hidden ${isClicked ? "block" : "hidden"} bg-gray-100 absolute top-16 left-0 w-full mx-auto font-medium z-40`}>
                    <ul className="flex flex-col items-center justify-center py-4 space-y-4">
                    <li>
                        <Link href="#about" className="hover:text-red-900 hover:font-semibold" onClick={handleLinkClick}>
                            About
                        </Link>
                    </li>
                    <li>
                        <Link href="#skills" className="hover:text-red-900 hover:font-semibold" onClick={handleLinkClick}>
                            Skills
                        </Link>
                    </li>
                    <li>
                        <Link href="#project" className="hover:text-red-900 hover:font-semibold" onClick={handleLinkClick}>
                            Projects
                        </Link>
                    </li>
                    <li>
                        <Link href="#experience" className="hover:text-red-900 hover:font-semibold" onClick={handleLinkClick}>
                            Experience
                        </Link>
                    </li>
                    <li>
                        <Link href="#contact" className="hover:text-red-900 hover:font-semibold" onClick={handleLinkClick}>
                            Contact
                        </Link>
                    </li>
                    </ul>
                </div>
            </nav>
        </header>
        
    )
}