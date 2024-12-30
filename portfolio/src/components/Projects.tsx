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
                    {/* Project 1 */}
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
                                <Link href={"https://resume-builder-jet-omega.vercel.app/"}>
                                    <p className="leading-relaxed text-yellow-500 italic hover:underline">
                                        View Project
                                    </p>
                                </Link>
                            </div>
                        </div>
                    </div>
                    {/* Project 2 */}
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
                                    A user-friendly platform that allows people to publish and share their blogs effortlessly, with a simple and intuitive interface.
                                </p>
                                <Link href={"https://dynamic-blog-sigma.vercel.app/"}>
                                    <p className="leading-relaxed text-yellow-500 italic hover:underline">
                                        View Project
                                    </p>
                                </Link>
                            </div>
                        </div>
                    </div>
                    {/* Project 3 */}
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
                                    eCommerce Project
                                </h2>
                                <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                                    E-commerce App
                                </h1>
                                <p className="leading-relaxed line-clamp-3">
                                    A seamless shopping platform designed with an easy-to-go online shopping experience and secure transactions.
                                </p>
                                <Link href={"https://restaurant-ui-gamma.vercel.app/"}>
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