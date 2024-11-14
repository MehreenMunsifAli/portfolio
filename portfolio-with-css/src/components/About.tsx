import Link from "next/link";
import Image from "next/image";

export default function AboutComponent() {

    return(
        <section id="about">
            <div className="main-container">
                {/* About Me section */}
                <div className="about-me">
                    <h1 className="about-me-title">
                        About Me
                    </h1>
                    <p className="about-me-p">
                        As a front-end web developer, I&apos;m passionate about creating user-friendly and visually appealing web experiences. With a strong foundation in HTML, CSS, JavaScript, and TypeScript, I specialize in modern frameworks like TailwindCSS and Next.js. I also bring additional skills in Python and Linux, along with some experience in Docker, allowing me to tackle both front-end and back-end challenges. I thrive on exploring new technologies, solving problems, and delivering clean, efficient code. My goal is to continuously learn and grow while contributing to impactful projects.
                    </p>
                    <div>
                        <h2 className="contact-info-title">
                            FULL NAME
                        </h2>
                        <p className="name">Mehreen Munsif Ali</p>
                        <h2 className="contact-info-title">
                            EMAIL
                        </h2>
                        <a className="email">mehreen.munsif.ali@gmail.com</a>
                        <h2 className="contact-info-title">
                            PHONE
                        </h2>
                        <p className="phone">+92-331-2408036</p>
                    </div>
                    <div className="download-cv about-btns">
                        <Link href={"/assets/cv/Mehreen - Resume.pdf"} target="_blank">
                            <button id="view-cv">
                                View CV
                            </button>
                        </Link>
                        <Link href={"#contact"}>
                            <button id="contact-me">
                                Contact Me
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}