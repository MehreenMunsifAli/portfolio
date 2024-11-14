"use client";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";

export default function HeaderComponent() {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    }

    const handleLinkClick = () => {
        setIsOpen(false);
    }

    return(
        <header className="z-50 sticky top-0">
            {/* navbar */}
            <nav className="nav-bar">
                <Link href={"/"} className="logo">
                    <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 via-green-400 to-lime-300">Mehreen Munsif Ali</h1>
                </Link>
                <ul className={`${isOpen ? 'top-[56px]' : '-top-60'} menu-list`}>
                    <motion.li whileHover={{scale: 1.1}} className="menu-item"><Link href={"/"} onClick={handleLinkClick}>Home</Link></motion.li>
                    <motion.li whileHover={{scale: 1.1}} className="menu-item"><Link href={"#about"} onClick={handleLinkClick}>About</Link></motion.li>
                    <motion.li whileHover={{scale: 1.1}} className="menu-item"><Link href={"#contact"} onClick={handleLinkClick}>Contact</Link></motion.li>
                </ul>
                <div className="download-cv-btn">
                    <Link href={"/assets/cv/Mehreen - Resume.pdf"} target="_blank">
                        <button type="button">Download CV</button>
                    </Link>
                </div>
                <div className="hamburger">
                    <button type="button" onClick={handleToggle}>
                        {isOpen ? <>&#10005;</> : <>&#8801;</>}
                    </button>
                </div>
            </nav>
            
        </header>
    )
}