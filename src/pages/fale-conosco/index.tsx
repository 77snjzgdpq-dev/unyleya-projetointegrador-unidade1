import { useForm } from "react-hook-form";
import UserTemplate from "../../templates/user-template";
import * as Yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"    

type ContactForm = {
  name: string;
  email: string;
  message: string;
};

const schemaValidation = Yup.object().shape({
  name:  Yup.string().required("campo obrigatório"),
  email: Yup.string().email("digite um e-mail válido").required("campo obrigatório"),
  message:  Yup.string().required("campo obrigatório"),
});

function enviarMensagem(values: ContactForm) {
    console.log(values);
    alert("Mensagem enviada com sucesso!");
  }

export default function FaleConosco() {
  const { 
          register, 
          handleSubmit, 
          formState: { errors } 
        } 
        = useForm<ContactForm>({resolver: yupResolver(schemaValidation)})

  return (
    <UserTemplate title="Fale Conosco">
       <div className="flex justify-center">
        <form 
              onSubmit={handleSubmit(enviarMensagem)} 
              className="bg-white shadow-md rounded-lg p-6 w-full max-w-md space-y-4">

          <h1 className="text-center text-[25px] font-bold text-primary mb-2">Unybay</h1>

          <p className="text-center text-gray-600 mb-4">
            Fale Conosco através do formulário abaixo
          </p>

          <div className="mb-3">
            <input
              {...register("name", { required: true })}
              placeholder="Nome completo"
              className="w-full border rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.name && <span className="text-red-600">Nome obrigatório</span>}
          </div>

          <div className="mb-3">
            <input
              {...register("email", { required: true })}
              placeholder="E-mail"
              className="w-full border rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.email && <span className="text-red-600">E-mail obrigatório</span>}
          </div>

          <div className="mb-4">
            <textarea
              {...register("message", { required: true })}
              placeholder="Escreva sua mensagem..."
              className="w-full border rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.message && <span className="text-red-600">Mensagem obrigatória</span>}
          </div>

          <button 
                  type="submit"
                  className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">
            Enviar
          </button>
        </form>
      </div>
    </UserTemplate>
  );
}
