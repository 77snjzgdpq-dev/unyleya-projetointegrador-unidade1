import UserTemplate from "../../templates/user-template";
import carousel1 from "../../assets/carrosel1.png";
import { Carousel } from "react-responsive-carousel";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getApiDetailsProduct } from "./services";
import type { Product } from "./types";


export default function Details () {
    const parms = useParams();
    const id = parms?.id;

    const [product, setProduct] = useState<Product>({} as Product) ;
    
    async function getDetailsProduct() {
        try {
            const response = await getApiDetailsProduct(id ?? "");
            setProduct(response.data);
            console.log(response.data);

        } catch (error) {
            alert("Houve um erro ao tentar buscar todos os produtos")
        }
    }
      
    useEffect(() => {
        getDetailsProduct();
    },[])

    return(
        <UserTemplate title="Detalhes">
            <p className="text-[30px]">{product.name}</p>
            <div className="flex mt-10 gap-10 justify-center"> 
                <div className="w-[40%]">
                    <Carousel showThumbs={false} >
                        <div>
                            <img src={product.url1} />
                        </div>
                        <div>
                            <img src={product.url2} />
                        </div>
                    </Carousel>
                </div>
                <div>
                    <div className="shadow-sm bg-white px-10 py-2">
                        <p>Informações do vendedor</p>
                        <p>Jean Carlos Campos Kfouri</p>
                        <p>São Paulo - SP</p>
                        <p>E-mail: carloskfouri@hotmai.com</p>
                        <p>11 9 9999-9999</p>
                    </div>
                    <div className="shadow-sm bg-white px-10 py-2">
                        <p className="text-[30px]">R$ {product.price}</p>
                    </div>
                </div>
            </div>
            
            <h3 className="mt-10 text-[20px]">Detelhes do produto</h3>
            
            <div className="mt-3" dangerouslySetInnerHTML={{__html: product.description}}>
            </div>
        </UserTemplate>
    )
}