import AuthTemplate from "../../templates/auth-template";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

type RegisterForm = {
  name: string;
  email: string;
  phone: string;
  city: string;
  state: string;
  password: string;
};

const schemaValidation = Yup.object().shape({
  name: Yup.string().required("Campo obrigatório"),
  email: Yup.string().email("E-mail inválido").required("Campo obrigatório"),
  phone: Yup.string().required("Campo obrigatório"),
  city: Yup.string().required("Campo obrigatório"),
  state: Yup.string().required("Campo obrigatório"),
  password: Yup.string().min(4, "Mínimo 4 caracteres").required("Campo obrigatório"),
});

export default function Register() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterForm>({ resolver: yupResolver(schemaValidation) });

  function createUser(values: RegisterForm) {
    console.log(values);
  }

  return (
    <AuthTemplate>
      <form
        className="bg-white shadow-md p-6 rounded-lg w-[400px] space-y-3 self-center"
        onSubmit={handleSubmit(createUser)}
      >
        <h1 className="text-center text-2xl font-bold">Unybay</h1>
        <p className="text-center text-gray-600">Cadastre-se</p>

        <input {...register("name")} placeholder="Nome" className="input" />
        {errors.name && <span className="text-red-600 text-sm">{errors.name.message}</span>}

        <input {...register("email")} placeholder="E-mail" className="input" />
        {errors.email && <span className="text-red-600 text-sm">{errors.email.message}</span>}

        <input {...register("phone")} placeholder="Telefone" className="input" />
        {errors.phone && <span className="text-red-600 text-sm">{errors.phone.message}</span>}

        <input {...register("city")} placeholder="Cidade" className="input" />
        {errors.city && <span className="text-red-600 text-sm">{errors.city.message}</span>}

        <input {...register("state")} placeholder="Estado" className="input" />
        {errors.state && <span className="text-red-600 text-sm">{errors.state.message}</span>}

        <input
          {...register("password")}
          type="password"
          placeholder="Senha"
          className="input"
        />
        {errors.password && <span className="text-red-600 text-sm">{errors.password.message}</span>}

        <button className="bg-blue-600 w-full py-2 text-white rounded hover:bg-blue-700 transition">
          Cadastrar
        </button>

        <button
          type="button"
          onClick={() => navigate("/login")}
          className="w-full text-blue-600 hover:underline"
        >
          Já tenho conta
        </button>
      </form>
    </AuthTemplate>
  );
}
