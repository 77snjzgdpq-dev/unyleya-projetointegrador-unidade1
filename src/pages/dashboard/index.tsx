import CardProduct from "../../components/card-product";
import { LuGamepad2 } from "react-icons/lu";
import { GiClothes } from "react-icons/gi";
import { AiFillCar } from "react-icons/ai";
import { FaTools } from "react-icons/fa";
import { IoFastFoodOutline } from "react-icons/io5";
import { AiOutlineGift } from "react-icons/ai";
import { AiOutlineSync } from "react-icons/ai";
import { Carousel } from 'react-responsive-carousel';
import carrosel1 from "../../assets/carrosel1.png";
import { Link, useNavigate } from "react-router-dom";
import { getApiRecentesProducts, getApiRecomendadosProducts } from "./services";
import { useEffect, useState } from "react";
import type { Product } from "./types";
import ListLoading from "../../components/list-loading";
import SearchBar from "../../components/search-bar";
import { toast } from "react-toastify";
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

    const [recentsProducts, setRecentsProducts] = useState<Product[]>([]) ;
    const [recommendedProducts, setRecommendedProducts] = useState<Product[]>([]) ;
    const [isLoadingRecentsProducts, setIsLoadingRecentsProducts] = useState(false) ;
    const [isLoadingRecommendedProducts, setIsLoadingRecommendedProducts] = useState(false) ;
    const [inputSearch, setInputSearch] = useState("") ;

    async function getRecentsProducts() {
        setIsLoadingRecentsProducts(true);
        try {
           const response = await getApiRecentesProducts();
           setRecentsProducts(response.data);

        } catch (error) {
            toast.error("Houve um erro ao tentar buscar produtos")
        }
        setIsLoadingRecentsProducts(false);
    }

     async function getRecommendedProducts() {
        setIsLoadingRecommendedProducts(true);
        try {
           const response = await getApiRecomendadosProducts();
           setRecommendedProducts(response.data);

        } catch (error) {
            toast.error("Houve um erro ao tentar buscar produtos recomendados")
        }
        setIsLoadingRecommendedProducts(false);
    }

    useEffect(() => {
        getRecentsProducts();
    },[])

    useEffect(() => {
        getRecommendedProducts();
    },[])


    return(
        <AdminTemplate>
            <div className="w-full flex flex-col items-center gap-6">
                <div className="w-full max-w-5xl">
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
                </div>    
                <div className="w-full max-w-4xl">
                    <SearchBar  value={inputSearch}
                                onChange={setInputSearch}
                                onSearch={() => navigate(`../products/search/${inputSearch}`)}/>
                </div>
            </div>

           <h2 className="mt-[50px]">Itens recentes</h2>
           
           {isLoadingRecentsProducts && <ListLoading /> }

           <div className="grid grid-4 lg:grid-cols-6 md:grid-cols-3 sm:grid-cols-2">
                {recentsProducts.map((product) => (
                    <CardProduct    key={product._id}
                                    id={product._id}
                                    name={product.name} 
                                    price={product.price} 
                                    manufacturer={product.manufacturer}  
                                    img={product.url1} />
                ))}
            </div>
            <Link to="/all-recents-products">
                <p className="mt-4">ver todos o produtos recentes</p>
            </Link>
            
            <div className="bg-primary p-10 rounded-lg mt-[50px]">
                <h2 className="text-white text-[30px] mb-5">Categorias</h2>
                <div className="flex justify-between p-[20px]">
                    {itemsCategory.map((category) => (
                        <button key={category.Id} 
                                onClick={() => navigate("products/search")} 
                                className="flex flex-col justify-center items-center">
                            <div className="bg-white w-[80px] h-[80px] rounded-full flex justify-center items-center">{category.icon}</div>
                            <span className="text-white mt-2">{category.title}</span>
                        </button>
                    ))}
                </div>
            </div>

            <h2 className="mt-[50px]">Anúncios</h2>
            {isLoadingRecommendedProducts && <ListLoading /> }
            <div className="grid grid-4 lg:grid-cols-6 md:grid-cols-3 sm:grid-cols-2">
                {recommendedProducts.map((product) => (
                    <CardProduct key={product._id}
                                 id={product._id}
                                 name={product.name} 
                                 price={product.price} 
                                 manufacturer={product.manufacturer}  
                                 img={product.url1}/>
                ))}
            </div>
            <Link to="/list-all-products">
                <p className="mt-[50px]">ver todos os produtos</p>
            </Link>
        </AdminTemplate>
    )
}