import UserTemplate from "../../templates/user-template";

export default function NotFound() {
  return (
    <UserTemplate title="Página não encontrada">

      <div className="flex flex-col justify-center items-center h-full text-center">
        <h2 className="text-2xl font-bold text-gray-700">
          404
        </h2>

        <p className="text-gray-500 mt-2">
          A página que você tentou acessar não existe.
        </p>
      </div>

    </UserTemplate>
  );
}
