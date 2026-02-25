import AuthTemplate from "../../templates/auth-template";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";
import type { ForgotPasswordForm } from "./types";
import { sendForgotPasswordEmail } from "./services";

const schemaValidation = Yup.object().shape({
  email: Yup.string().email("Digite um e-mail válido").required("Campo obrigatório"),
});

export default function ForgotPassword() {
  
  const { 
    register, 
    handleSubmit, 
    formState: { errors }, 
    reset 
  } 
    = useForm<ForgotPasswordForm>({resolver: yupResolver(schemaValidation),
  });

  async function handleForgotPassword(values: ForgotPasswordForm) {
    try {
      await sendForgotPasswordEmail(values.email);
      toast.success("Verifique seu e-mail para redefinir a senha!");
      reset();
    } catch (error) {
      toast.error("Não foi possível enviar o e-mail. Tente novamente mais tarde.");
    }
  }

  return (
    <AuthTemplate>
      <form className="bg-white shadow-md p-6 rounded-lg w-[400px] space-y-3 self-center"
            onSubmit={handleSubmit(handleForgotPassword)}>
        
        <h1 className="text-center text-2xl font-bold">Esqueci minha senha</h1>
        
        <p className="text-center text-gray-600">Informe seu e-mail para recuperar a senha</p>

        <input {...register("email")} placeholder="E-mail" className="input" />
        {errors.email && <span className="text-red-600 text-sm">{errors.email.message}</span>}

        <button type="submit" 
                className="bg-blue-600 w-full py-2 text-white rounded hover:bg-blue-700 transition">
          Enviar e-mail
        </button>
      </form>
    </AuthTemplate>
  );
}