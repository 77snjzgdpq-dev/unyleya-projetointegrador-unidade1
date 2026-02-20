import { useForm } from "react-hook-form";
import AuthTemplate from "../../templates/auth-template";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";

type LoginForm = {
  email: string;
  password: string;
};

const schemaValidation = Yup.object().shape({
  email: Yup.string().email("Digite um e-mail válido").required("Campo obrigatório"),
  password: Yup.string().min(4, "Mínimo 4 caracteres").required("Campo obrigatório"),
});

export default function Login() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginForm>({ resolver: yupResolver(schemaValidation) });

  function logar(values: LoginForm) {
    console.log(values);
  }

  return (
    <AuthTemplate>
      <form className="bg-white self-center shadow-md p-6 rounded-lg w-[400px] space-y-3"
            onSubmit={handleSubmit(logar)}>

        <h1 className="text-center text-2xl font-bold">Unybay</h1>
        <p className="text-center text-gray-600">Acesse sua conta</p>

        <input  {...register("email")}
                placeholder="E-mail"
                className="w-full border rounded p-2"/>
                
        {errors.email && <span className="text-red-600 text-sm">{errors.email.message}</span>}

        <input  {...register("password")}
                type="password"
                placeholder="Senha"
                className="w-full border rounded p-2"/>

        {errors.password && <span className="text-red-600 text-sm">{errors.password.message}</span>}

        <button type="submit"
                className="bg-blue-600 w-full py-2 text-white rounded hover:bg-blue-700 transition">
          Entrar
        </button>

        <button type="button"
                onClick={() => navigate("/register")}
                className="w-full text-blue-600 hover:underline">
          Cadastre-se
        </button>
      </form>
    </AuthTemplate>
  );
}
