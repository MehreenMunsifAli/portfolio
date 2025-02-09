import Image from "next/image";
import Link from "next/link";

export default function ProjectsComponent() {

    return(
        <section id="project" className="text-gray-600 body-font">
            <div className="container px-10 py-16 mx-auto">
                {/* Heading */}
                <div className="flex flex-col text-center w-full mb-16">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-black">
                        My Projects
                    </h1>
                </div>

                {/* Projects section */}
                <div className="flex flex-wrap -m-4 ">
                    {/* Project 1 - Q-commerce*/}
                    <div className="lg:w-1/3 sm:w-1/2 p-4 hover:cursor-pointer">
                        <div className="flex relative">
                            <Image
                                alt="gallery"
                                className="absolute inset-0 w-full h-full overflow-hidden object-cover object-center"
                                src={"/assets/pictures/ecommerce.jpg"}
                                fill
                            />
                            <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                                <h2 className="tracking-widest text-sm title-font font-medium text-yellow-500 mb-1">
                                    E-Commerce Project
                                </h2>
                                <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                                    Q-commerce App
                                </h1>
                                <p className="leading-relaxed line-clamp-3">
                                    A smooth restaurant platform designed for a hassle-free online ordering experience.
                                </p>
                                <Link href={"https://foodieinn-q-comm.vercel.app/"} target="_blank">
                                    <p className="leading-relaxed text-yellow-500 italic hover:underline">
                                        View Project
                                    </p>
                                </Link>
                            </div>
                        </div>
                    </div>
                    
                    {/* Project 2 - Blog */}
                    <div className="lg:w-1/3 sm:w-1/2 p-4 hover:cursor-pointer">
                        <div className="flex relative">
                            <Image
                                alt="gallery"
                                className="absolute inset-0 w-full h-full object-cover object-center"
                                src={"/assets/pictures/blog.jpg"}
                                fill
                            />
                            <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                                <h2 className="tracking-widest text-sm title-font font-medium text-yellow-500 mb-1">
                                    Blog Project
                                </h2>
                                <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                                    Blog App
                                </h1>
                                <p className="leading-relaxed line-clamp-3">
                                    A user-friendly platform for exploring and reading blogs, featuring a simple and intuitive interface.
                                </p>
                                <Link href={"https://dynamic-blog-sigma.vercel.app/"} target="_blank">
                                    <p className="leading-relaxed text-yellow-500 italic hover:underline">
                                        View Project
                                    </p>
                                </Link>
                            </div>
                        </div>
                    </div>
                    {/* Project 3 - Resume Builder */}
                    <div className="lg:w-1/3 sm:w-1/2 p-4 hover:cursor-pointer">
                        <div className="flex relative">
                            <Image
                                alt="gallery"
                                className="absolute inset-0 w-full h-full object-cover object-center"
                                src={"/assets/pictures/resume_builder.jpg"}
                                fill
                            />
                            <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                                <h2 className="tracking-widest text-sm title-font font-medium text-yellow-500 mb-1">
                                    Resume Project
                                </h2>
                                <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                                    Resume Builder App
                                </h1>
                                <p className="leading-relaxed line-clamp-3">
                                    A streamlined app designed to help users create professional resumes effortlessly, with easy-to-use features.
                                </p>
                                <Link href={"https://resume-builder-jet-omega.vercel.app/"} target="_blank">
                                    <p className="leading-relaxed text-yellow-500 italic hover:underline">
                                        View Project
                                    </p>
                                </Link>
                            </div>
                        </div>
                    </div>
                    {/* Project 4 - Tip Calculator App */}
                    <div className="lg:w-1/3 sm:w-1/2 p-4 hover:cursor-pointer">
                        <div className="flex relative">
                            <Image
                                alt="gallery"
                                className="absolute inset-0 w-full h-full object-cover object-center"
                                src={"/assets/pictures/tip_calculator.jpg"}
                                fill
                            />
                            <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                                <h2 className="tracking-widest text-sm title-font font-medium text-yellow-500 mb-1">
                                    Nextjs Project
                                </h2>
                                <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                                    Tip Calculator App
                                </h1>
                                <p className="leading-relaxed line-clamp-3">
                                    A Tip Calculator app offering a seamless and efficient way to calculate tips with a user-friendly interface and responsive design.
                                </p>
                                <Link href={"https://tip-calculator-app-umber.vercel.app/"} target="_blank">
                                    <p className="leading-relaxed text-yellow-500 italic hover:underline">
                                        View Project
                                    </p>
                                </Link>
                            </div>
                        </div>
                    </div>
                    {/* Project 5 - HTML CSS Assignment */}
                    <div className="lg:w-1/3 sm:w-1/2 p-4 hover:cursor-pointer">
                        <div className="flex relative">
                            <Image
                                alt="gallery"
                                className="absolute inset-0 w-full h-full object-cover object-center"
                                src={"/assets/pictures/panacloud.jpg"}
                                fill
                            />
                            <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                                <h2 className="tracking-widest text-sm title-font font-medium text-yellow-500 mb-1">
                                    HTML & CSS Project
                                </h2>
                                <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                                    Panacloud Home Page
                                </h1>
                                <p className="leading-relaxed line-clamp-3">
                                    A static homepage for Panacloud using HTML and CSS, featuring a well-structured layout and an intuitive user interface.
                                </p>
                                <Link href={"https://html-css-assignment-amber-zeta.vercel.app/"} target="_blank">
                                    <p className="leading-relaxed text-yellow-500 italic hover:underline">
                                        View Project
                                    </p>
                                </Link>
                            </div>
                        </div>
                    </div>
                    {/* Project 6 - Custom Portfolio */}
                    <div className="lg:w-1/3 sm:w-1/2 p-4 hover:cursor-pointer">
                        <div className="flex relative">
                            <Image
                                alt="gallery"
                                className="absolute inset-0 w-full h-full object-cover object-center"
                                src={"/assets/pictures/portfolio.jpg"}
                                fill
                            />
                            <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                                <h2 className="tracking-widest text-sm title-font font-medium text-yellow-500 mb-1">
                                    Custom CSS Portfolio
                                </h2>
                                <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                                    Portfolio with Custom CSS
                                </h1>
                                <p className="leading-relaxed line-clamp-3">
                                    A static homepage for Panacloud using HTML and CSS, featuring a well-structured layout and an intuitive user interface.
                                </p>
                                <Link href={"https://custom-css-portfolio-ten.vercel.app/"} target="_blank">
                                    <p className="leading-relaxed text-yellow-500 italic hover:underline">
                                        View Project
                                    </p>
                                </Link>
                            </div>
                        </div>
                    </div>
                    {/* Project 7 - Weather Widget App */}
                    <div className="lg:w-1/3 sm:w-1/2 p-4 hover:cursor-pointer">
                        <div className="flex relative">
                            <Image
                                alt="gallery"
                                className="absolute inset-0 w-full h-full object-cover object-center"
                                src={"/assets/pictures/weather_widget.png"}
                                fill
                            />
                            <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                                <h2 className="tracking-widest text-sm title-font font-medium text-yellow-500 mb-1">
                                    Nextjs Project
                                </h2>
                                <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                                    Weather Widget App
                                </h1>
                                <p className="leading-relaxed line-clamp-3">
                                    A dynamic weather widget app that fetches real-time weather data using an API, providing accurate forecasts.
                                </p>
                                <Link href={"https://weather-widget-app-lime.vercel.app/"} target="_blank">
                                    <p className="leading-relaxed text-yellow-500 italic hover:underline">
                                        View Project
                                    </p>
                                </Link>
                            </div>
                        </div>
                    </div>
                    {/* Project 8 - Random Joke Generator App */}
                    <div className="lg:w-1/3 sm:w-1/2 p-4 hover:cursor-pointer">
                        <div className="flex relative">
                            <Image
                                alt="gallery"
                                className="absolute inset-0 w-full h-full object-cover object-center"
                                src={"/assets/pictures/random_joke.png"}
                                fill
                            />
                            <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                                <h2 className="tracking-widest text-sm title-font font-medium text-yellow-500 mb-1">
                                    Nextjs Project
                                </h2>
                                <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                                    Random Joke Generator App
                                </h1>
                                <p className="leading-relaxed line-clamp-3">
                                    A fun random joke generator app that fetches jokes from an API, delivering endless laughter with a simple click.
                                </p>
                                <Link href={"https://random-joke-generator-app-nu.vercel.app/"} target="_blank">
                                    <p className="leading-relaxed text-yellow-500 italic hover:underline">
                                        View Project
                                    </p>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}