import { useNavigate } from "react-router-dom";
import CardProductAdmin from "../../components/card-product-admin";
import AdminTemplate from "../../templates/admin-template";
import { useEffect, useState } from "react";
import type { Product } from "./types";
import { getApiMyProducts } from "./services";
import { toast } from "react-toastify";
import { useAuthSessionStore } from "../../hooks/use-auth-session";
import ListLoading from "../../components/list-loading";

  
export default function UserProducts() {
  
  const navigate = useNavigate();

  const { token } = useAuthSessionStore();
  const [myProducts, setMyProducts] = useState<Product[]>([]) ;
  const [isLoadingMyProducts, setIsLoadingMyProducts] = useState(false) ;
  

  async function getMyProducts() {
    setMyProducts([]);
    setIsLoadingMyProducts(true);
    try {
        const response = await getApiMyProducts(token);
        setMyProducts(response.data);

    } catch (error) {
        toast.error("Houve um erro ao tentar buscar meus produtos")
    }
    setIsLoadingMyProducts(false);
  }

  useEffect(() => {
      getMyProducts();
  },[])

  return (
    <AdminTemplate>
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Meus Anúncios</h1>

        <button onClick={() => navigate("/form-product")}
                className="rounded bg-blue-600 text-white px-6 py-2 hover:bg-blue-700 transition">
          Criar Anúncio
        </button>
      </div>
      {isLoadingMyProducts && <ListLoading /> }
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {myProducts.map((product) => (
          <CardProductAdmin key={product._id}
                            id={product._id}
                            name={product.name} 
                            price={product.price} 
                            manufacturer={product.manufacturer}  
                            img={product.url1}
                            setMyProducts = {setMyProducts}/>
          ))
        }
      </div>
      <p className="text-right mt-4 text-gray-600">
        Total: {myProducts.length} itens
      </p>

    </AdminTemplate>
  );
}
