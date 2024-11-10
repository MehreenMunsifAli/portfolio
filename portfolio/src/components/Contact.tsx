
export default function ContactComponent() {

    return(
        <section id="contact" className="text-gray-600 body-font relative">
            <div className="container px-10 py-20 mx-auto flex sm:flex-nowrap flex-wrap">
                {/* Left section with Map, Address, email, and number */}
                <div className="lg:w-2/3 w-full bg-gray-300 rounded-lg overflow-hidden sm:mr-10 px-4 py-4 flex items-end justify-start relative">
                    {/* Map */}
                    <iframe
                        width="100%"
                        height="100%"
                        className="absolute inset-0"
                        frameBorder={0}
                        title="map"
                        marginHeight={0}
                        marginWidth={0}
                        scrolling="no"
                        src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=%C4%B0korangi%2C%20Karachi+(My%20Business%20Name)&ie=UTF8&t=&z=14&iwloc=B&output=embed"
                        style={{ filter: " contrast(1.2) opacity(0.4)" }}
                    />
                    {/* Address, Email, and Number */}
                    <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
                        <div className=" lg:w-1/3 px-6">
                            <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                                ADDRESS
                            </h2>
                            <address className="mt-1">
                                Korangi, Karachi
                            </address>
                        </div>
                        <div className="lg:w-2/3 px-6 mt-4 lg:mt-0">
                            <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                                EMAIL
                            </h2>
                            <a className="text-yellow-500 leading-relaxed sm:text-xs">mehreen.munsif.ali@gmail.com</a>
                            <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">
                                PHONE
                            </h2>
                            <p className="leading-relaxed">+92-331-1234567</p>
                        </div>
                    </div>
                </div>
                {/* Contact Form */}
                <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full px-4 py-4 lg:py-8 lg:px-8 mt-8 lg:mt-0 rounded-lg">
                    <h2 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-black">
                        Let's get in touch
                    </h2>
                    <div className="relative mb-4">
                        <label htmlFor="name" className="leading-7 text-sm text-gray-600">
                        Name
                        </label>
                        <input
                        type="text"
                        id="name"
                        name="name"
                        className="w-full bg-white rounded border border-gray-300 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        />
                    </div>
                    <div className="relative mb-4">
                        <label htmlFor="email" className="leading-7 text-sm text-gray-600">
                        Email
                        </label>
                        <input
                        type="email"
                        id="email"
                        name="email"
                        className="w-full bg-white rounded border border-gray-300 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        />
                    </div>
                    <div className="relative mb-4">
                        <label htmlFor="message" className="leading-7 text-sm text-gray-600">
                        Message
                        </label>
                        <textarea
                        id="message"
                        name="message"
                        className="w-full bg-white rounded border border-gray-300 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                        defaultValue={""}
                        />
                    </div>
                    <button className="text-white bg-yellow-500 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-600 rounded text-lg">
                        Send Message
                    </button>
                </div>
            </div>
        </section>

    )
}