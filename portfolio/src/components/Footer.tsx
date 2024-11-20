import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";

export default function FooterComponent() {

    return(
        <div className=" h-28 flex flex-col md:flex-row justify-center items-center md:justify-between px-10 text-sm font-semibold text-slate-800">
            <p>&copy; 2024 by Mehreen Munsif Ali | All Rights Reserved</p>
            <div className="mt-4 flex text-4xl">
                <Link href={"https://www.linkedin.com/in/mehreenmunsifali/"} target="_blank"><FaLinkedin className=" mr-6 text-yellow-600 hover:cursor-pointer hover:text-blue-800" /></Link>
                <Link href={"https://github.com/MehreenMunsifAli"} target="_blank"><FaGithub className=" text-yellow-600 hover:cursor-pointer hover:text-blue-800"/></Link>
            </div>
        </div>
    )
}