import { BsFacebook, BsLinkedin } from "react-icons/bs";
import { Link } from "react-router-dom";

 export default function Footer() {
  return (
    <footer className="bg-blue-700 text-white py-6 px-10">
      <div className="flex justify-between items-center">

        <h1 className="font-bold text-lg">Unybay</h1>

        <Link 
              to="/fale-conosco"
              className="border border-white px-4 py-2 rounded hover:bg-white hover:text-blue-700 transition">
          Fale Conosco
        </Link>
      </div>

      <p className="text-center mt-4 text-sm">
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