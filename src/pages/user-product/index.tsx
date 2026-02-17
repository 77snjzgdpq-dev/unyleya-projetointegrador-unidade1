import { useNavigate } from "react-router-dom";
import CardProductAdmin from "../../components/card-product-admin";
import AdminTemplate from "../../templates/admin-template";

export default function UserProduct() {

    const navigate = useNavigate();

    return(
        <AdminTemplate>
            <div className="flex justify-between items-center">
                <h1>Anúncios</h1>
                <button 
                        onClick={() => navigate("/form-products")} 
                        className="rounded text-white bg-secondary px-8 py-2">
                    Criar Anúncios
                </button>
            </div>
            
            <div className="grid grid-4 lg:grid-cols-6 md:grid-cols-3 sm:grid-cols-2 mt-2">
                {Array.from({length: 14 }).map(() => (
                    <CardProductAdmin />
                ))}
            </div>
           
           <p className="text-right">
                Total: 4 items
           </p>
        </AdminTemplate>
    )
}