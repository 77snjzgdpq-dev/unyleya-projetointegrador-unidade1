import AuthTemplate from "../../templates/auth-template";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useParams, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { validateResetToken } from "../forgot-password/services";
import type { ResetPasswordForm } from "./types";

const schemaValidation = Yup.object().shape({password: Yup.string()
                                     .min(4, "Mínimo 4 caracteres")
                                     .required("Campo obrigatório"),
                                     confirmPassword: Yup.string()
                                                         .oneOf([Yup.ref("password")], "As senhas não coincidem")
                                                         .required("Campo obrigatório"),
                                            });

export default function ResetPassword() {
  const { token } = useParams();
  const navigate = useNavigate();

  const { 
          register, 
          handleSubmit, 
          formState: { errors } 
        } = useForm<ResetPasswordForm>({resolver: yupResolver(schemaValidation)});

  const email = validateResetToken(token ?? "");

  async function handleResetPassword(values: ResetPasswordForm) {
    if (!email) {
      toast.error("Link inválido ou expirado");
      return;
    }

    toast.success(`Senha redefinida com sucesso para ${email}`);
    navigate("/login");
  }

  if (!email) {
    return (
      <AuthTemplate>
        <div className="bg-white shadow-md p-6 rounded-lg w-[400px] text-center self-center">
          <h1 className="text-2xl font-bold mb-4">Link inválido ou expirado</h1>
        </div>
      </AuthTemplate>
    );
  }

  return (
    <AuthTemplate>
      <form className="bg-white shadow-md p-6 rounded-lg w-[400px] space-y-3 self-center"
            onSubmit={handleSubmit(handleResetPassword)}>
        
        <h1 className="text-center text-2xl font-bold">Redefinir senha</h1>

        <p className="text-center text-gray-600">Informe sua nova senha</p>

        <input {...register("password")} type="password" placeholder="Nova senha" className="input" />
        {errors.password && <span className="text-red-600 text-sm">{errors.password.message}</span>}

        <input {...register("confirmPassword")} type="password" placeholder="Confirme a senha" className="input" />
        {errors.confirmPassword && <span className="text-red-600 text-sm">{errors.confirmPassword.message}</span>}

        <button type="submit" 
                className="bg-blue-600 w-full py-2 text-white rounded hover:bg-blue-700 transition">
          Redefinir senha
        </button>
      </form>
    </AuthTemplate>
  );
}