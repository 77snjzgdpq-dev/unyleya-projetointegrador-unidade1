import { useParams } from "react-router-dom";
import CardProduct from "../../components/card-product";
import UserTemplate from "../../templates/user-template";
import { useEffect, useState } from "react";
import type { Product } from "./types";
import ListLoading from "../../components/list-loading";
import { getApiProductsByName } from "./services";

export default function SearchProducts() {
  const parms = useParams();
  const nameProduct = parms?.product;
  
  const [allProducts, setAllProducts] = useState<Product[]>([]) ;
  const [isLoadingProducts, setIsLoadingProducts] = useState(false) ;

  async function getProductsByName() {
      setAllProducts([]);
      setIsLoadingProducts(true);
      try {
          const response = await getApiProductsByName(nameProduct ?? "");
          setAllProducts(response.data);

      } catch (error) {
          alert("Houve um erro ao tentar buscar todos os produtos")
      }
      setIsLoadingProducts(false);
  }

  useEffect(() => {
    getProductsByName();
  },[])

  return (
    <UserTemplate title="Resultado da Busca">
      {isLoadingProducts && <ListLoading /> }
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {allProducts.map((product) => (
          <CardProduct  key={product._id}
                        id={product._id}
                        name={product.name} 
                        price={product.price} 
                        manufacturer={product.manufacturer}  
                        img={product.url1} />
        ))}
      </div>
      <p className="text-right mt-4 text-gray-600">
        Total: {allProducts.length} itens
      </p>
    </UserTemplate>
  );
}
