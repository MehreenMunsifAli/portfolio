import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

export default function FooterComponent() {

    return(
        <div className=" h-28 flex items-center justify-between px-20 text-sm font-semibold text-slate-800">
            <p>&copy; 2024 by Mehreen Munsif Ali | All Rights Reserved</p>
            <div className="mt-4 flex text-4xl">
                <FaLinkedin className="mr-6 text-yellow-600 hover:cursor-pointer hover:text-blue-800" />
                <FaGithub className="text-yellow-600 hover:cursor-pointer hover:text-blue-800"/>
            </div>
        </div>
    )
}