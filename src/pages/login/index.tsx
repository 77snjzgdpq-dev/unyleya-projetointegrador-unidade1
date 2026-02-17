import { useForm } from "react-hook-form"
import AuthTemplate from "../../templates/auth-template"
import * as Yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"    
import { useNavigate } from "react-router-dom"

type LoginForm = {
    email: string;
    password: string;
}

const schemaValidation = Yup.object().shape({
    email: Yup.string().email("digite um e-mail válido").required("campo obrigatório"),
    password: Yup.string().min(4, "a senha precisa ter 4 caracteres").required("campo obrigatório")
});


export default function Login() {
    
    const navigate = useNavigate()

    const {
            register, 
            handleSubmit, 
            formState: {errors}
         } 
         = useForm<LoginForm>({resolver: yupResolver(schemaValidation)})

    function logar(values: LoginForm){
        console.log(values);
    }
    
    
    return(
        <AuthTemplate>
            <form className="bg-gray-400 p-5 rounded-lg w-[400px] self-center" onSubmit={handleSubmit(logar)}>
                <h1 className="text-center text-[25px] font-bold">Unybay</h1>
                
                <p className="text-center my-3">Acesse sua conta</p>

                <div>
                    <input {...register("email") } className=" rounded-md h-[40px] p-2 w-full border-2" placeholder="Digite seu e-mail"/>
                    {errors.email && <span className="text-red-700">{errors.email.message}</span>}
                </div>
                
                <div>
                    <input {...register("password")} className="rounded-md h-[40px] p-2 w-full border-2 mt-3" placeholder="Digite sua senha"/>
                    {errors.password && <span className="text-red-700">{errors.password.message}</span>}
                </div>
                <div>
                    <button type="submit" className="bg-primary mt-3 w-full h-[40px] text-white">Entrar</button>
                    <div className="flex justify-center items-center mt-2">
                        <button onClick={() => navigate("/register")}>Cadastre-se</button>
                    </div>
                </div>
            </form>
        </AuthTemplate>
    )
}