import AuthTemplate from "../../templates/auth-template";
import * as Yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"    
import { useNavigate } from "react-router-dom"
import { useForm } from "react-hook-form";

type RegisterForm = {
    name: string;
    email: string;
    phone: string;
    city: string;
    state: string;
    password: string;
}

const schemaValidation = Yup.object().shape({
    name:  Yup.string().required("campo obrigatório"),
    email: Yup.string().email("digite um e-mail válido").required("campo obrigatório"),
    phone:  Yup.string().required("campo obrigatório"),
    city:  Yup.string().required("campo obrigatório"),
    state:  Yup.string().required("campo obrigatório"),
    password: Yup.string().min(4, "a senha precisa ter 4 caracteres").required("campo obrigatório")
   
});

function createUser(values: RegisterForm){
    console.log(values);
}

export default function Register() {
    const navigate = useNavigate()
    
    const{
            register, 
            handleSubmit, 
            formState: {errors}
        } 
        = useForm<RegisterForm>({resolver: yupResolver(schemaValidation)})

    return(
        <AuthTemplate>
            <form className="bg-gray-400 p-5 rounded-lg w-[400px] self-center" onSubmit={handleSubmit(createUser)}>
                <h1 className="text-center text-[25px] font-bold">Unybay</h1>
                
                <p className="text-center my-3">Cadastre-se</p>

                <div>
                    <input {...register("name") } className=" rounded-md h-[40px] p-2 w-full border-2" placeholder="Digite seu nome"/>
                    {errors.name && <span className="text-red-700">{errors.name.message}</span>}
                </div>

                <div>
                    <input {...register("email") } className="mt-2 rounded-md h-[40px] p-2 w-full border-2" placeholder="Digite seu e-mail"/>
                    {errors.email && <span className="text-red-700">{errors.email.message}</span>}
                </div>

                <div>
                    <input {...register("phone") } className="mt-2 rounded-md h-[40px] p-2 w-full border-2" placeholder="Digite seu telefone"/>
                    {errors.phone && <span className="text-red-700">{errors.phone.message}</span>}
                </div>

                <div>
                    <input {...register("city") } className="mt-2 rounded-md h-[40px] p-2 w-full border-2" placeholder="Digite sua cidade"/>
                    {errors.city && <span className="text-red-700">{errors.city.message}</span>}
                </div>

                <div>
                    <input {...register("state") } className="mt-2 rounded-md h-[40px] p-2 w-full border-2" placeholder="Digite seu estado"/>
                    {errors.state && <span className="text-red-700">{errors.state.message}</span>}
                </div>
                
                <div>
                    <input {...register("password")} className="rounded-md h-[40px] p-2 w-full border-2 mt-3" placeholder="Digite sua senha"/>
                    {errors.password && <span className="text-red-700">{errors.password.message}</span>}
                </div>
                <div>
                    <button type="submit" className="bg-primary mt-3 w-full h-[40px] text-white">Entrar</button>
                </div>
            </form>
        </AuthTemplate>
    )
}