"use client";
import {motion} from "framer-motion";
import Typewriter from 'typewriter-effect';
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";


export default function HeroComponent() {

    return(
        <motion.section 
            initial={{opacity: 0, x: 50}}
            animate={{opacity: 1, x: 0}}
            exit={{opacity:0, x: 50}}
            transition={{delay: 0.10}}
            className=" body-font">
            <div className="main-container">
                {/* Left Side */}
                <div className="intro">
                    <h1 className="intro-name">
                        Hey, I&apos;m
                        <br className="inline-block" />
                        MEHREEN
                    </h1>
                    <div className="wide-line"></div>
                    <div className="intro-typewriter text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-yellow-200 to-white">
                        <Typewriter 
                            options={{
                                strings: ['FRONT-END DEVELOPER', 'BACK-END DEVELOPER'],
                                autoStart: true,
                                loop: true,
                            }}
                        />
                    </div>
                    
                    <p>
                        I&apos;m specialized in modern web development, and crafting seamless front-end experiences.
                    </p>
                    <div className="social-icons">
                        <Link href={"https://www.linkedin.com/in/mehreenmunsifali/"} target="_blank"><FaLinkedin className="social-icon" /></Link>
                        <Link href={"https://github.com/MehreenMunsifAli"} target="_blank"><FaGithub className="social-icon "/></Link>
                    </div>
                    <div className="download-cv">
                        <Link href={"/assets/cv/Mehreen - Resume.pdf"} target="_blank">
                            <button className="">
                                Download CV
                            </button>
                        </Link>
                    </div>
                </div>
                {/* Image */}
                <div className="header-image">
                    <Image className="my_image"
                        alt="Mehreen"
                        src="/assets/images/Mehreen_Ali.png"
                        height={300}
                        width={250}
                        
                    />
                </div>
            </div>
        </motion.section>

    )
}