import AuthTemplate from "../../templates/auth-template";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, Controller } from "react-hook-form";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import type { FormProduct } from "./types";
import { useAuthSessionStore } from "../../hooks/use-auth-session";
import { toast } from "react-toastify";
import { editApiProduct } from "./services";
import { useNavigate, useParams } from "react-router-dom";
import { getApiDetailsProduct } from "../details/services";
import { useEffect, useState } from "react";

const schemaValidation = Yup.object({
  name: Yup.string().required("Campo obrigatório"),
  manufacturer: Yup.string().required("Campo obrigatório"),
  category: Yup.string().required("Campo obrigatório"),
  price: Yup.number().positive("O preço deve ser maior que zero").typeError("Informe um valor numérico").required("Campo obrigatório"),
  url1: Yup.string().url("URL inválida").required("Campo obrigatório"),
  url2: Yup.string().url("URL inválida").required("Campo obrigatório"),
  description: Yup.string().required("Campo obrigatório"),
});

export default function FormProductEdit() {
  const { token } = useAuthSessionStore();
  const navigate = useNavigate();
  const params = useParams();
  const id = params?.id || "";

  const [product, setProduct] = useState({
      price: 0,
      category: "",
      description: "",
      manufacturer: "",
      name: "",
      url1: "",
      url2: "",
  })
  async function GetProductById(){
    try {
      const response = await getApiDetailsProduct(id);
      const productResponse = response.data;
      setProduct({price: productResponse.price, 
                 category: productResponse.category, 
                 description: productResponse.description, 
                 manufacturer: productResponse.manufacturer, 
                 name: productResponse.name, 
                 url1: productResponse.url1, 
                 url2: productResponse.url2});
    } catch (error) {
      toast.error("Houve um erro ao buscar o produto para edição");
    }
  }
    
  useEffect(() => {
    GetProductById();
  },[])

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormProduct>({
    resolver: yupResolver(schemaValidation),
    defaultValues: product,
    values: product,
  });

  async function editProduct(values: FormProduct) {
    try {
      console.log("Produto:", values);
      await editApiProduct(values, token, id);
      toast.success("Produto editado com sucesso!");
      navigate("/my-products");
    } catch (error) {
      toast.error("Erro ao editar o produto");
    }
  }

  return (
    <AuthTemplate>
      <form onSubmit={handleSubmit(editProduct)}>

        <h1 className="text-[25px] mb-4">Novo produto</h1>

        <div className="flex gap-2">
          <div className="flex-1">
            <input
              {...register("name")}
              className="rounded-md h-[40px] p-2 w-full border-2"
              placeholder="Digite o nome"
            />
            {errors.name && <span className="text-red-700">{errors.name.message}</span>}
          </div>

          <div className="flex-1">
            <input
              {...register("manufacturer")}
              className="rounded-md h-[40px] p-2 w-full border-2"
              placeholder="Digite o fabricante"
            />
            {errors.manufacturer && (
              <span className="text-red-700">{errors.manufacturer.message}</span>
            )}
          </div>
        </div>

        <div className="flex gap-2 mt-2">
          <div className="flex-1">
            <select
              {...register("category")}
              defaultValue=""
              className="rounded-md h-[40px] p-2 w-full border-2"
            >
              <option disabled value="">
                Selecione uma opção
              </option>
              <option value="Jogos">Jogos</option>
              <option value="Roupas">Roupas</option>
              <option value="Veiculos">Veículos</option>
            </select>
            {errors.category && (
              <span className="text-red-700">{errors.category.message}</span>
            )}
          </div>

          <div className="flex-1">
            <input
              {...register("price")}
              className="rounded-md h-[40px] p-2 w-full border-2"
              placeholder="Digite o preço"
            />
            {errors.price && (
              <span className="text-red-700">{errors.price.message}</span>
            )}
          </div>
        </div>

        <div className="flex gap-2 mt-2">
          <div className="flex-1">
            <input
              {...register("url1")}
              className="rounded-md h-[40px] p-2 w-full border-2"
              placeholder="Digite a primeira URL"
            />
            {errors.url1 && <span className="text-red-700">{errors.url1.message}</span>}
          </div>

          <div className="flex-1">
            <input
              {...register("url2")}
              className="rounded-md h-[40px] p-2 w-full border-2"
              placeholder="Digite a segunda URL"
            />
            {errors.url2 && <span className="text-red-700">{errors.url2.message}</span>}
          </div>
        </div>

        <div className="mt-4">
          <Controller
            name="description"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <ReactQuill
                theme="snow"
                value={field.value}
                onChange={field.onChange}
                style={{ height: 200, marginBottom: 60 }}
              />
            )}
          />
          {errors.description && (
            <span className="text-red-700">{errors.description.message}</span>
          )}
        </div>

        <div className="flex justify-end gap-4 mt-6">
          <button
            type="button"
            className="bg-white text-primary border border-primary px-8 py-2 rounded-lg"
            onClick={() => window.history.back()}
          >
            Cancelar
          </button>

          <button
            type="submit"
            className="bg-primary text-white px-8 py-2 rounded-lg"
          >
            Salvar
          </button>
        </div>

      </form>
    </AuthTemplate>
  );
}