import CardProduct from "../../components/card-product";
import { LuGamepad2 } from "react-icons/lu";
import { GiClothes } from "react-icons/gi";
import { AiFillCar } from "react-icons/ai";
import { FaTools } from "react-icons/fa";
import { IoFastFoodOutline, IoSearch } from "react-icons/io5";
import { AiOutlineGift } from "react-icons/ai";
import { AiOutlineSync } from "react-icons/ai";
import { Carousel } from 'react-responsive-carousel';
import carrosel1 from "../../assets/carrosel1.png";
import { useNavigate } from "react-router-dom";
import AdminTemplate from "../../templates/admin-template";

const itemsCategory = [
    {
        Id: 0,
        title:"Jogos",
        icon: <LuGamepad2 size={30} color="#888"/>
    },
    {
        Id: 1,
        title:"Roupas",
        icon: <GiClothes size={30} color="#888"/>
    },
    {
        Id: 2,
        title:"Veículos",
        icon: <AiFillCar size={30} color="#888"/>
    },
    {
        Id: 3,
        title:"Ferramentas",
        icon: <FaTools size={30} color="#888"/>
    },
    {
        Id: 4,
        title:"Comidas",
        icon: <IoFastFoodOutline size={30} color="#888"/>
    },
    {
        Id: 5,
        title:"Presentes",
        icon: <AiOutlineGift size={30} color="#888"/>
    },
    {
        Id: 6,
        title:"Outros",
        icon: <AiOutlineSync size={30} color="#888"/>
    },
]

export default function Home() {

    const navigate = useNavigate();

    return(
        <AdminTemplate>
            <div className="max-w-[70%] self-center">
                <Carousel showThumbs={false} >
                    <div>
                        <img src={carrosel1} />
                    </div>
                    <div>
                        <img src={carrosel1} />
                    </div>
                    <div>
                        <img src={carrosel1} />
                    </div>
                </Carousel>
                <div className="flex flex-row h-[45px] rounded-md border-2 items-center mt-10 ">
                    <input className="flex-1 h-full p-3" placeholder="Estou buscando por..."/>
                    <button 
                            onClick={() => navigate("products/search")} 
                            className="p-4">

                        <IoSearch  size={30}/>
                    </button>
                    
                </div>
            </div>

           <h2 className="mt-[50px]">Itens recentes</h2>
           <div className="grid grid-4 lg:grid-cols-6 md:grid-cols-3 sm:grid-cols-2">
                {Array.from({length: 8}).map(() => (
                    <CardProduct />
                ))}
            </div>
            <p className="mt-4">
                ver mais
            </p>
            
            <div className="bg-primary p-10 rounded-lg mt-[50px]">
                <h2 className="text-white text-[30px] mb-5">Categorias</h2>
                <div className="flex justify-between p-[20px]">
                    {itemsCategory.map((category) => (
                        <button 
                                onClick={() => navigate("products/search")} 
                                className="flex flex-col justify-center items-center">
                            
                            <div className="bg-white w-[80px] h-[80px] rounded-full flex justify-center items-center">{category.icon}</div>
                            
                            <span className="text-white mt-2">{category.title}</span>
                        </button>
                    ))}
                </div>
            </div>

            <h2 className="mt-[50px]">Anúncios</h2>
            <div className="grid grid-4 lg:grid-cols-6 md:grid-cols-3 sm:grid-cols-2">
                {Array.from({length: 8}).map(() => (
                    <CardProduct />
                ))}
            </div>
            <p className="mt-[50px]">
                ver mais
            </p>
        </AdminTemplate>
    )
}