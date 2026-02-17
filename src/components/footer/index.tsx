import { BsFacebook, BsLinkedin } from "react-icons/bs";
import { Link } from "react-router-dom";

export default function Footer() {

  return (
    <footer className="bg-primary text-white py-10 px-10">
      
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-[20px] font-bold">Unyban</h2>

        <Link 
          to="/fale-conosco" 
          className="hover:underline font-semibold"
        >
          Fale Conosco
        </Link>
      </div>

      <p className="text-center">
        Unyleya Educacional | Todos os direitos reservados
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
  );
}
