"use client";
import { GrEmptyCircle } from "react-icons/gr";
import Typewriter from 'typewriter-effect';
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

export default function HeroComponent() {

    return(
        <section>
            <div className="container mx-auto">
                {/* Main heading */}
                <div className="font-serif flex justify-center items-center md:items-end md:pb-16 h-32 md:h-80 w-full text-4xl md:text-9xl italic font-thin">
                    <h1>Hey, there</h1>
                </div>
                {/* Availablibity and short intro - Only visible to Desktop */}
                <div className=" hidden min-w-full mx-auto my-auto md:flex items-center justify-around md:h-40 px-10">
                    <div className="w-1/2">
                        <p className="flex w-64 items-center justify-center rounded-3xl py-2 bg-white text-sm font-medium">
                            <GrEmptyCircle className="text-orange-400 mr-1 text-2xl" />
                            Available for new opportunities
                        </p>    
                    </div>
                    <div className=" md:px-16 lg:px-32 w-1/2 font-medium md:flex flex-col justify-end">
                        <p>Specialized in modern web development, and crafting seamless front-end experiences.</p>
                        <div className="mt-4 flex text-4xl">
                            <FaLinkedin className="mr-6 text-yellow-600 hover:cursor-pointer hover:text-blue-800" />
                            <FaGithub className="text-yellow-600 hover:cursor-pointer hover:text-blue-800 "/>
                        </div>
                    </div>
                </div>
                {/* Name and Expertise with typewriter effect - (Short intro for mobile only) */}
                <div className="w-full h-[15rem] lg:h-96 md:flex md:flex-nowrap flex-wrap items-center justify-between px-10 py-6">
                    <div className="md:w-2/3 ">
                        <h1 className="text-4xl md:text-7xl lg:text-9xl font-bold">
                            I AM 
                            <br className=" inline-block" />
                            MEHREEN
                        </h1>
                    </div>
                    <div className="rounded bg-black w-24 h-[3px] my-4 md:hidden "></div>
                    <div className="md:w-1/3 md:flex md:justify-end text-xl md:text-4xl font-bold">
                        <Typewriter 
                            options={{
                                strings: ['FRONT-END DEVELOPER', 'BACK-END DEVELOPER'],
                                autoStart: true,
                                loop: true,
                            }}
                        />    
                    </div>
                    {/* Mobile-only intro */}
                    <div className="md:hidden mt-2">
                        <p>I'm specialized in modern web development, and crafting seamless front-end experiences.</p>
                        <div className="mt-4 flex text-4xl">
                            <FaLinkedin className="mr-6 text-yellow-600" />
                            <FaGithub className="text-yellow-600 "/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}