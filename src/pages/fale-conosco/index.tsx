import { useForm } from "react-hook-form";
import UserTemplate from "../../templates/user-template";
import * as Yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"    
import { useNavigate } from "react-router-dom"

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
  const navigate = useNavigate()

  const { 
          register, 
          handleSubmit, 
          formState: { errors } 
        } 
        = useForm<ContactForm>({resolver: yupResolver(schemaValidation)})

  return (
    <div> 
      <UserTemplate title="Fale Conosco">
        <div className="flex justify-center items-center mt-10">
          <form 
            onSubmit={handleSubmit(enviarMensagem)} 
            className="bg-gray-400 p-5 rounded-lg w-[400px] self-center"
          >
            <h1 className="text-center text-[25px] font-bold text-primary mb-2">
              Unybay
            </h1>
            <p className="text-center mb-5">
              Fale Conosco através do formulário abaixo
            </p>

            <div className="mb-3">
              <input
                {...register("name", { required: true })}
                placeholder="Nome completo"
                className="w-full border-2 rounded-md h-[40px] p-2"
              />
              {errors.name && <span className="text-red-600">Nome obrigatório</span>}
            </div>

            <div className="mb-3">
              <input
                {...register("email", { required: true })}
                placeholder="E-mail"
                className="w-full border-2 rounded-md h-[40px] p-2"
              />
              {errors.email && <span className="text-red-600">E-mail obrigatório</span>}
            </div>

            <div className="mb-4">
              <textarea
                {...register("message", { required: true })}
                placeholder="Escreva sua mensagem..."
                className="w-full border-2 rounded-md p-2 h-[120px]"
              />
              {errors.message && <span className="text-red-600">Mensagem obrigatória</span>}
            </div>

            <button 
                    type="submit"
                    className="bg-primary text-white w-full h-[40px] rounded-md hover:bg-blue-700">
              Enviar
            </button>
          </form>
        </div>
      </UserTemplate>
    </div>
  );
}
