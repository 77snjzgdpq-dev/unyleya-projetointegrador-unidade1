
import { useNavigate } from "react-router-dom"
import img_product from "../../assets/product.png"

export default function CardProduct() {
    
    const navigate = useNavigate();

    return(
        <button 
                onClick={()=>navigate("/products/details")} 
                className="shadow-md rounded-md p-10 flex flex-col justify-center">

            <h1 className="font-semibold text-sm">Nome do Produto</h1>
            
            <img src={img_product} className="w-[100px] mt-2"/>
            
            <p className=" w-full mt-3">Amazon</p>
            
            <p className="text-gray-600 text-sm">R$ 799,99</p>

        </button>
    )
}