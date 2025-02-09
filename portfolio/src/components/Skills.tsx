import { FaCheck } from "react-icons/fa";

export default function SkillsComponent() {

    return(
        <section id="skills" className="text-gray-600 body-font">
            <div className="container px-5 py-16 mx-auto">
                {/* Heading */}
                <div className="flex flex-col text-center w-full mb-16">
                    <h1 className="sm:text-4xl text-3xl font-medium title-font text-black">
                        My Skills
                    </h1>
                </div>

                {/* Skills section */}
                <div className="flex flex-wrap -m-4 -mt-16">
                    {/* skill 1 */}
                    <div className="p-4 w-full md:w-1/3">
                        <div className="flex rounded-lg h-full p-8 flex-col">
                            <div className="flex items-center mb-3">
                                <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-yellow-500 text-white flex-shrink-0">
                                    <FaCheck />
                                </div>
                                <h2 className="text-gray-900 text-lg title-font font-medium">
                                    HTML
                                </h2>
                            </div>
                            <div className="flex-grow">
                                <div className="relative h-1 w-full bg-gray-300 rounded-xl">
                                    <div className="absolute h-1 w-[95%] rounded-xl bg-gradient-to-r from-purple-600 via-pink-300 to-cyan-600"></div>
                                </div>
                                <p className="text-right text-blue-500 font-bold">95%</p>
                            </div>
                        </div>
                    </div>
                    {/* skill 2 */}
                    <div className="p-4 w-full md:w-1/3">
                        <div className="flex rounded-lg h-full  p-8 flex-col">
                            <div className="flex items-center mb-3">
                                <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-yellow-500 text-white flex-shrink-0">
                                    <FaCheck />
                                </div>
                                <h2 className="text-gray-900 text-lg title-font font-medium">
                                    CSS
                                </h2>
                            </div>
                            <div className="flex-grow">
                                <div className="relative h-1 w-full bg-gray-300 rounded-xl">
                                    <div className="absolute h-1 w-[80%] rounded-xl bg-gradient-to-r from-purple-600 via-pink-300 to-cyan-600"></div>
                                </div>
                                <p className="text-right text-blue-500 font-bold">80%</p>
                            </div>
                        </div>
                    </div>
                    {/* skill 3 */}
                    <div className="p-4 w-full md:w-1/3">
                        <div className="flex rounded-lg h-full  p-8 flex-col">
                            <div className="flex items-center mb-3">
                                <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-yellow-500 text-white flex-shrink-0">
                                    <FaCheck />
                                </div>
                                <h2 className="text-gray-900 text-lg title-font font-medium">
                                    JavaScript/TypeScript
                                </h2>
                            </div>
                            <div className="flex-grow">
                                <div className="relative h-1 w-full bg-gray-300 rounded-xl">
                                    <div className="absolute h-1 w-[75%] rounded-xl bg-gradient-to-r from-purple-600 via-pink-300 to-cyan-600"></div>
                                </div>
                                <p className="text-right text-blue-500 font-bold">75%</p>
                            </div>
                        </div>
                    </div>
                    {/* skill 4 */}
                    <div className="p-4 w-full md:w-1/3">
                        <div className="flex rounded-lg h-full  p-8 flex-col">
                            <div className="flex items-center mb-3">
                                <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-yellow-500 text-white flex-shrink-0">
                                    <FaCheck />
                                </div>
                                <h2 className="text-gray-900 text-lg title-font font-medium">
                                    TailwindCSS
                                </h2>
                            </div>
                            <div className="flex-grow">
                                <div className="relative h-1 w-full bg-gray-300 rounded-xl">
                                    <div className="absolute h-1 w-[78%] rounded-xl bg-gradient-to-r from-purple-600 via-pink-300 to-cyan-600"></div>
                                </div>
                                <p className="text-right text-blue-500 font-bold">85%</p>
                            </div>
                        </div>
                    </div>
                    {/* skill 5 */}
                    <div className="p-4 w-full md:w-1/3">
                        <div className="flex rounded-lg h-full  p-8 flex-col">
                            <div className="flex items-center mb-3">
                                <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-yellow-500 text-white flex-shrink-0">
                                    <FaCheck />
                                </div>
                                <h2 className="text-gray-900 text-lg title-font font-medium">
                                    BootStrap
                                </h2>
                            </div>
                            <div className="flex-grow">
                                <div className="relative h-1 w-full bg-gray-300 rounded-xl">
                                    <div className="absolute h-1 w-[80%] rounded-xl bg-gradient-to-r from-purple-600 via-pink-300 to-cyan-600"></div>
                                </div>
                                <p className="text-right text-blue-500 font-bold">80%</p>
                            </div>
                        </div>
                    </div>
                    {/* skill 6 */}
                    <div className="p-4 w-full md:w-1/3">
                        <div className="flex rounded-lg h-full  p-8 flex-col">
                            <div className="flex items-center mb-3">
                                <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-yellow-500 text-white flex-shrink-0">
                                    <FaCheck />
                                </div>
                                <h2 className="text-gray-900 text-lg title-font font-medium">
                                    NextJS
                                </h2>
                            </div>
                            <div className="flex-grow">
                                <div className="relative h-1 w-full bg-gray-300 rounded-xl">
                                    <div className="absolute h-1 w-[60%] rounded-xl bg-gradient-to-r from-purple-600 via-pink-300 to-cyan-600"></div>
                                </div>
                                <p className="text-right text-blue-500 font-bold">60%</p>
                            </div>
                        </div>
                    </div>
                    {/* skill 7 */}
                    <div className="p-4 w-full md:w-1/3">
                        <div className="flex rounded-lg h-full  p-8 flex-col">
                            <div className="flex items-center mb-3">
                                <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-yellow-500 text-white flex-shrink-0">
                                    <FaCheck />
                                </div>
                                <h2 className="text-gray-900 text-lg title-font font-medium">
                                    Python
                                </h2>
                            </div>
                            <div className="flex-grow">
                                <div className="relative h-1 w-full bg-gray-300 rounded-xl">
                                    <div className="absolute h-1 w-[70%] rounded-xl bg-gradient-to-r from-purple-600 via-pink-300 to-cyan-600"></div>
                                </div>
                                <p className="text-right text-blue-500 font-bold">50%</p>
                            </div>
                        </div>
                    </div>
                    {/* skill 8 */}
                    <div className="p-4 w-full md:w-1/3">
                        <div className="flex rounded-lg h-full  p-8 flex-col">
                            <div className="flex items-center mb-3">
                                <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-yellow-500 text-white flex-shrink-0">
                                    <FaCheck />
                                </div>
                                <h2 className="text-gray-900 text-lg title-font font-medium">
                                    Linux OS
                                </h2>
                            </div>
                            <div className="flex-grow">
                                <div className="relative h-1 w-full bg-gray-300 rounded-xl">
                                    <div className="absolute h-1 w-[65%] rounded-xl bg-gradient-to-r from-purple-600 via-pink-300 to-cyan-600"></div>
                                </div>
                                <p className="text-right text-blue-500 font-bold">70%</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>



    )
}