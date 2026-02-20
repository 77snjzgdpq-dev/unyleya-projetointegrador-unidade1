import AuthTemplate from "../../templates/auth-template";
import * as Yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"    
import { useForm } from "react-hook-form";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useState } from "react";

type FormProduct = {
    name: string;
    manufacturer: string;
    category: string;
    price: number;
    url1: string;
    url2: string;
}

const schemaValidation = Yup.object().shape({
    name:  Yup.string().required("campo obrigatório"),
    manufacturer: Yup.string().email("digite um e-mail válido").required("campo obrigatório"),
    category:  Yup.string().required("campo obrigatório"),
    price:  Yup.number().required("campo obrigatório"),
    url1:  Yup.string().required("campo obrigatório"),
    url2: Yup.string().min(4, "a senha precisa ter 4 caracteres").required("campo obrigatório")
});

function createProduct(values: FormProduct){
    console.log(values);
}

export default function FormProduct() {
    
    const [value, setValue] = useState('');

    const{
            register, 
            handleSubmit, 
            formState: {errors}
        } 
        = useForm<FormProduct>({resolver: yupResolver(schemaValidation)})

    return(
        <AuthTemplate>
            <div>
                <form onSubmit={handleSubmit(createProduct)}>
                <h1 className="text-[25px] mb-4">Novo produto</h1>
                    <div className="flex gap-2">
                        <div className="flex-1 " >
                            <input {...register("name") } className="rounded-md h-[40px] p-2 w-full border-2" placeholder="Digite seu nome"/>
                            {errors.name && <span className="text-red-700">{errors.name.message}</span>}
                        </div>
                        <div className="flex-1">             
                            <input {...register("manufacturer") } className="rounded-md h-[40px] p-2 w-full border-2" placeholder="Digite o fabricante"/>
                            {errors.manufacturer && <span className="text-red-700">{errors.manufacturer.message}</span>}
                        </div>
                    </div>
                    <div className="flex gap-2">
                        <div className="flex-1">
                            <select {...register("category")}
                                    defaultValue=""
                                    className="mt-2 rounded-md h-[40px] p-2 w-full border-2"
                                    >
                                <option disabled value="">Selecione uma opção</option>
                                <option value={"Jogos"}>Jogos</option>
                                <option value={"Roupas"}>Roupas</option>
                                <option value={"Veiculos"}>Veículos</option>
                            </select>
                            {errors.category && <span className="text-red-700">{errors.category.message}</span>}
                        </div>
                        <div className="flex-1">
                            <input {...register("price") } className="mt-2 rounded-md h-[40px] p-2 w-full border-2" placeholder="Digite o preço"/>
                            {errors.price && <span className="text-red-700">{errors.price.message}</span>}
                        </div>
                    </div>
                    <div className="flex gap-2">
                        <div className="flex-1">
                            <input {...register("url1")} className="rounded-md h-[40px] p-2 w-full border-2 mt-3" placeholder="Digite a primeira url"/>
                            {errors.url1 && <span className="text-red-700">{errors.url1.message}</span>}
                        </div>
                        <div className="flex-1">
                            <input {...register("url2")} className="rounded-md h-[40px] p-2 w-full border-2 mt-3" placeholder="Digite segunda url"/>
                            {errors.url2 && <span className="text-red-700">{errors.url2.message}</span>}
                        </div>
                    </div>
                    <ReactQuill className="mt-2" 
                                style={{height:500, marginTop:10, marginBottom:100}} 
                                theme="snow" 
                                value={value} 
                                onChange={setValue} />

                    <div className="flex justify-end gap-4 mt-4">
                        <button className="bg-primary text-white px-8 py-2 rounded-lg">
                            Sim
                        </button>
                        <button onClick={() => alert("oi")} 
                                className="bg-white text-primary border border-primary px-8 py-2 rounded-lg">
                            Não
                        </button>
                    </div>
                </form> 
            </div>
        </AuthTemplate>
    )
}