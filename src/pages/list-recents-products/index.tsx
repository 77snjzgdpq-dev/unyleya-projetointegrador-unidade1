import { useEffect, useState } from "react";
import CardProduct from "../../components/card-product";
import UserTemplate from "../../templates/user-template";
import ListLoading from "../../components/list-loading";
import type { Product } from "./types";
import { getApiAllRecentesProducts } from "./services";
import { toast } from "react-toastify";

export default function ListRecentsProducts() {
    const [recentsAllProducts, setRecentsAllProducts] = useState<Product[]>([]) ;
    const [isLoadingRecentsProducts, setIsLoadingRecentsProducts] = useState(false) ;

    async function getAllRecentsProducts() {
            setIsLoadingRecentsProducts(true);
            try {
               const response = await getApiAllRecentesProducts();
               setRecentsAllProducts(response.data);
    
            } catch (error) {
                toast.error("Houve um erro ao tentar buscar produtos")
            }
            setIsLoadingRecentsProducts(false);
        }

    useEffect(() => {
        getAllRecentsProducts();
    },[])
    
    return(
        <UserTemplate title="Lista de produtos">
            {isLoadingRecentsProducts && <ListLoading /> }
            <div className="grid grid-4 lg:grid-cols-6 md:grid-cols-3 sm:grid-cols-2">
               {recentsAllProducts.map((product) => (
                    <CardProduct    key={product._id}
                                    id={product._id}
                                    name={product.name} 
                                    price={product.price} 
                                    manufacturer={product.manufacturer}  
                                    img={product.url1}/>
                ))}
            </div>
        </UserTemplate>
    )
}