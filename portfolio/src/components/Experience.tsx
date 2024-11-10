import Image from "next/image";

export default function ExperienceComponent() {

    return(
        <section id="experience" className="text-gray-600 body-font">
            <div className="container px-10 py-16 mx-auto flex flex-col">
                {/* Heading */}
                <div className="flex flex-col text-center w-full mb-6">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-black">
                        Experience
                    </h1>
                </div>
                {/* Experience section */}
                <div className="lg:w-4/6 mx-auto">

                    <div className="flex flex-col sm:flex-row mt-10">
                        <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                        {/* Image */}
                            <div className="w-24 h-24 rounded-full inline-flex items-center justify-center bg-blue-800 text-green-400">
                                <Image 
                                src={"/assets/pictures/tpslogo-white.png"} 
                                alt="TPS-Worldwide"
                                width={80}
                                height={90}
                                />
                                
                            </div>
                            {/* Intro DIv */}
                            <div className="flex flex-col items-center text-center justify-center">
                                <h2 className="font-medium title-font mt-4 text-gray-900 text-lg">
                                    Intern, Product Development Department
                                </h2>
                                <div className="w-12 h-1 bg-yellow-500 rounded mt-2 mb-4" />
                                <p className="text-base">
                                    Contributed significantly to the development of a sophisticated machine learning-based application.
                                </p>
                            </div>
                        </div>
                        {/* Summary */}
                        <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-500 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                            <p className="leading-relaxed text-lg mb-4">
                            Implemented the factory design pattern to seamlessly integrate multiple databases (Supabase, Redis,
                            MySQL), thereby enhancing the application&apos;s flexibility and scalability.<br/>
                            Utilized setup tools to build and package the application, ensuring a streamlined deployment process.<br/>
                            Gained hands-on experience with various technologies, including Linux, REST API, FAST API,
                            OpenAI Specification, Swagger Tools, Docker, MySQL Database, OpenAI, LangChain, and FAAS,
                            focusing on their practical applications in machine learning projects.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            </section>

    )
}