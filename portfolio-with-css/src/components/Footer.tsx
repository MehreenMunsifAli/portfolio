import Link from "next/link";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

export default function FooterComponent() {
    return(
        <footer id="footer">
            <div className="main-container">
                <div className="footer">
                    {/* Left side */}
                    <div>
                        <p>
                            &copy; 2024 by Mehreen Munsif Ali | All Rights Reserved
                        </p>
                    </div>
                    {/* Right side */}
                    <div className="social-icons footer-icons">
                        <Link href={"https://www.linkedin.com/in/mehreenmunsifali/"} target="_blank"><FaLinkedin className="social-icon" /></Link>
                        <Link href={"https://github.com/MehreenMunsifAli"} target="_blank"><FaGithub className="social-icon "/></Link>
                    </div>
                </div>
                
            </div>
        </footer>
    )
}