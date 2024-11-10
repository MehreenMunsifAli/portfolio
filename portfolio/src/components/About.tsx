import Image from "next/image";
import Link from "next/link";

export default function AboutComponent() {

    return(
        <section id="about" className="text-gray-600 body-font">
            <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
                {/* Image */}
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                    <Image
                        className="object-cover object-center rounded mx-auto"
                        alt="Mehreen Munsif Ali"
                        src="/assets/pictures/Mehreen_Ali.png"
                        width={400}
                        height={300}
                    />
                </div>

                {/* About Me section */}
                <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center pr-5">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                        About Me
                    </h1>
                    <p className="mb-8 leading-relaxed">
                        As a front-end web developer, I&apos;m passionate about creating user-friendly and visually appealing web experiences. With a strong foundation in HTML, CSS, JavaScript, and TypeScript, I specialize in modern frameworks like TailwindCSS and Next.js. I also bring additional skills in Python and Linux, along with some experience in Docker, allowing me to tackle both front-end and back-end challenges. I thrive on exploring new technologies, solving problems, and delivering clean, efficient code. My goal is to continuously learn and grow while contributing to impactful projects.
                    </p>
                    <div className="mb-4">
                        <h2 className="title-font font-bold text-gray-900 tracking-widest text-sm mb-1">
                            FULL NAME
                        </h2>
                        <p className="text-md mb-4">Mehreen Munsif Ali</p>
                        <h2 className="title-font font-bold text-gray-900 tracking-widest text-sm mb-1">
                            EMAIL
                        </h2>
                        <a className="text-yellow-500 leading-relaxed">mehreen.munsif.ali@gmail.com</a>
                        <h2 className="title-font font-bold text-gray-900 tracking-widest text-sm mb-1 mt-4">
                            PHONE
                        </h2>
                        <p className="leading-relaxed">+92-331-1234567</p>
                    </div>
                    <div className="flex justify-center">
                        <Link href={"/assets/cv/Mehreen-Resume.pdf"} target="_blank">
                            <button className="inline-flex text-white bg-yellow-500 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-600 rounded text-lg">
                                View CV
                            </button>
                        </Link>
                        <Link href={"#contact"}>
                            <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
                                Contact Me
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>

    )
}