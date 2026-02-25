import AuthTemplate from "../../templates/auth-template";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";
import type { RegisterForm } from "./types";
import { registerUser } from "./services";
import { toast } from "react-toastify";
import InputMask from "react-input-mask";

const schemaValidation = Yup.object().shape({
  name: Yup.string().required("Campo obrigatório"),
  email: Yup.string().email("E-mail inválido").required("Campo obrigatório"),
  phone: Yup.string().required("Campo obrigatório"),
  city: Yup.string().required("Campo obrigatório"),
  state: Yup.string().max(2, "Use a sigla do estado").required("Campo obrigatório"),
  password: Yup.string().min(4, "Mínimo 4 caracteres").required("Campo obrigatório"),
});

export default function Register() {
  const navigate = useNavigate();

  const {
    register,
    reset,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<RegisterForm>({
    resolver: yupResolver(schemaValidation),
  });

  async function createUser(values: RegisterForm) {
    try {
      const response = await registerUser(values);
      reset();
      console.log(response.data);
      toast.success("Cadastro efetuado com sucesso");
      navigate("/login");
    } catch (error) {
      toast.error(
        "Houve um erro ao tentar cadastrar o usuário, revise os campos e tente novamente."
      );
    }
  }

  return (
    <AuthTemplate>
      <form className="bg-white shadow-md p-6 rounded-lg w-[400px] space-y-3 self-center"
            onSubmit={handleSubmit(createUser)}>
              
        <button type="button" onClick={() => navigate("/")}>
          <h1 className="text-center text-2xl font-bold">Unybay</h1>
        </button>

        <p className="text-center text-gray-600">Cadastre-se</p>

        <input {...register("name")} placeholder="Nome" className="input" />
        {errors.name && (<span className="text-red-600 text-sm">{errors.name.message}</span>)}

        <input {...register("email")} placeholder="E-mail" className="input" />
        {errors.email && (<span className="text-red-600 text-sm">{errors.email.message}</span>)}

        <Controller
          name="phone"
          control={control}
          render={({ field }) => (
            <InputMask
              mask="(99) 9 9999-9999"
              value={field.value || ""}
              onChange={field.onChange}
              onBlur={field.onBlur}
            >
              {(inputProps: any) => (
                <input
                  {...inputProps}
                  placeholder="Telefone"
                  className="input"
                />
              )}
            </InputMask>
          )}
        />
        {errors.phone && (<span className="text-red-600 text-sm">{errors.phone.message}</span>)}

        <input {...register("city")} placeholder="Cidade" className="input" />
        {errors.city && (<span className="text-red-600 text-sm">{errors.city.message}</span>)}

        <input {...register("state")} placeholder="Estado" className="input" />
        {errors.state && (<span className="text-red-600 text-sm">{errors.state.message}</span>)}

        <input  {...register("password")} type="password" placeholder="Senha" className="input"/>
        {errors.password && (<span className="text-red-600 text-sm">{errors.password.message}</span>)}

        <button className="bg-blue-600 w-full py-2 text-white rounded hover:bg-blue-700 transition">
          Cadastrar
        </button>

        <button type="button"
                onClick={() => navigate("/login")}
                className="w-full text-blue-600 hover:underline">
          Entrar
        </button>
      </form>
    </AuthTemplate>
  );
}