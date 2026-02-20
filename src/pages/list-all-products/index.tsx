import { useEffect, useState } from "react";
import CardProduct from "../../components/card-product";
import UserTemplate from "../../templates/user-template";
import ListLoading from "../../components/list-loading";
import { getApiAllProducts, getApiAllProductsOrdered } from "./services";
import type { Product } from "./types";
import SearchBar from "../../components/search-bar";
import { getApiProductsByName } from "../search-result/services";

export default function ListAllProducts() {
    const [allProducts, setAllProducts] = useState<Product[]>([]) ;
    const [isLoadingAllProducts, setIsLoadingAllProducts] = useState(false) ;
    const [inputSearch, setInputSearch] = useState("");

    async function searchProducts() {
        if (!inputSearch) {
            getAllProducts();
            return;
        }

        setIsLoadingAllProducts(true);
        const response = await getApiProductsByName(inputSearch);
        setAllProducts(response.data);
        setIsLoadingAllProducts(false);
    }

    async function getAllProducts() {
        setAllProducts([]);
        setIsLoadingAllProducts(true);
        try {
            const response = await getApiAllProducts();
            setAllProducts(response.data);

        } catch (error) {
            alert("Houve um erro ao tentar buscar todos os produtos")
        }
        setIsLoadingAllProducts(false);
    }

    async function getAllOrderProducts(typeOrder: "descending" | "ascending") {
        setAllProducts([]);
        setIsLoadingAllProducts(true);
        try {
            const response = await getApiAllProductsOrdered(typeOrder);
            setAllProducts(response.data);

        } catch (error) {
            alert("Houve um erro ao tentar buscar os produtos ordenados")
        }
        setIsLoadingAllProducts(false);
    }

    useEffect(() => {
        getAllProducts();
    },[])
    
    return(
        <UserTemplate title="Todos os produtos">
          <div className="flex justify-between items-center mt-4 mb-6">
                <p>
                    Ordernar por?  
                    <button className="text-primary p-2" onClick={() => getAllOrderProducts("ascending")}>Menor preço</button> | 
                    <button className="text-primary p-2" onClick={() => getAllOrderProducts("descending")}>Maior preço</button>
                </p>
                <SearchBar  value={inputSearch}
                            onChange={setInputSearch}
                            onSearch={searchProducts}
                            width="w-[350px]"/>

            </div>
            {isLoadingAllProducts && <ListLoading /> }
            <div className="grid grid-4 lg:grid-cols-6 md:grid-cols-3 sm:grid-cols-2">
               {allProducts.map((product) => (
                    <CardProduct 
                                    key={product._id}
                                    name={product.name} 
                                    price={product.price} 
                                    manufacturer={product.manufacturer}  
                                    img={product.url1}
                                    />
                ))}
            </div>
        </UserTemplate>
    )
}