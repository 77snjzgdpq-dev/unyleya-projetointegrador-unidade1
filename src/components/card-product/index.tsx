
import { useNavigate } from "react-router-dom"
import type { CardProps } from "./types";

export default function CardProduct(props: CardProps) {
    
    const navigate = useNavigate();

    return(
        <button 
                onClick={()=>navigate("/products/details")} 
                className="shadow-md rounded-md p-10 flex flex-col justify-center">

            <h1 className="font-semibold text-sm">{props.name}</h1>
            
            <img src={props.img} className="w-[100px] mt-2"/>
            
            <p className=" w-full mt-3">{props.manufacturer}</p>
            
            <p className="text-gray-600 text-sm">R$ {props.price}</p>

        </button>
    )
}