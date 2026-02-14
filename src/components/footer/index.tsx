import { BsFacebook, BsLinkedin } from "react-icons/bs";

export default function Footer() {
    return(
        <footer className="bg-primary text-white py-10 px-10">
            <h2 className="text-[20px] font-bold mb-5">Unyban</h2>
            <p className="text-center">
                Unyleya Educacional | Todos os diretos reservados
            </p>
            <div className="flex justify-center gap-2 mt-[20px]"> 
                 <a href="https://www.linkedin.com/" target="_blank">
                    <BsLinkedin />
                 </a>
                 <a href="https://pt-br.facebook.com/" target="_blank">
                    <BsFacebook />
                </a>
            </div>
        </footer>
    )
}