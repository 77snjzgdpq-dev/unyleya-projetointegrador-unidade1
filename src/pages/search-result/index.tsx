import CardProduct from "../../components/card-product";
import UserTemplate from "../../templates/user-template";

export default function SearchProducts() {
  return (
    <UserTemplate title="Resultado da Busca">

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {Array.from({ length: 14 }).map((_, index) => (
          <CardProduct key={index} />
        ))}
      </div>

      <p className="text-right mt-4 text-gray-600">
        Total: 14 itens
      </p>

    </UserTemplate>
  );
}
