import { useNavigate } from "react-router-dom";
import CardProductAdmin from "../../components/card-product-admin";
import AdminTemplate from "../../templates/admin-template";

export default function UserProduct() {
  const navigate = useNavigate();

  return (
    <AdminTemplate>

      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Meus Anúncios</h1>

        <button
          onClick={() => navigate("/form-products")}
          className="rounded bg-blue-600 text-white px-6 py-2 hover:bg-blue-700 transition"
        >
          Criar Anúncio
        </button>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {Array.from({ length: 14 }).map((_, index) => (
          <CardProductAdmin key={index} />
        ))}
      </div>

      <p className="text-right mt-4 text-gray-600">
        Total: 14 itens
      </p>

    </AdminTemplate>
  );
}
