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
import { useEffect } from "react";
import { NumericFormat } from "react-number-format";
import AutoCompleteSelect from "../../components/auto-complete";

const schemaValidation = Yup.object({
  name: Yup.string().required("Campo obrigatório"),
  manufacturer: Yup.string().required("Campo obrigatório"),
  category: Yup.string().required("Campo obrigatório"),
  price: Yup.number()
    .positive("O preço deve ser maior que zero")
    .typeError("Informe um valor numérico")
    .required("Campo obrigatório"),
  url1: Yup.string().url("URL inválida").required("Campo obrigatório"),
  url2: Yup.string().url("URL inválida").required("Campo obrigatório"),
  description: Yup.string().required("Campo obrigatório"),
});

const categoryOptions = [
    { label: "Jogos", value: "jogos" },
    { label: "Roupas", value: "roupas" },
    { label: "Veículos", value: "veiculos" },
    { label: "Ferramentas", value: "ferramentas" },
    { label: "Comidas", value: "comidas" },
    { label: "Presentes", value: "presentes" },
    { label: "Outros", value: "outros" },
  ];

export default function FormProductEdit() {
  const { token } = useAuthSessionStore();
  const navigate = useNavigate();
  const { id } = useParams();

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<FormProduct>({
    resolver: yupResolver(schemaValidation),
    defaultValues: {
      name: "",
      manufacturer: "",
      category: "",
      price: 0,
      url1: "",
      url2: "",
      description: "",
    },
  });

  async function GetProductById() {
    try {
      const response = await getApiDetailsProduct(id!);
      const p = response.data;

      reset({
        name: p.name,
        manufacturer: p.manufacturer,
        category: p.category
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "")
          .toLowerCase(),
        price: p.price,
        url1: p.url1,
        url2: p.url2,
        description: p.description,
      });
    } catch {
      toast.error("Erro ao buscar o produto");
    }
  }

  useEffect(() => {
    GetProductById();
  }, []);

  async function editProduct(values: FormProduct) {
    try {
      await editApiProduct(values, token, id!);
      toast.success("Produto editado com sucesso!");
      navigate("/my-products");
    } catch {
      toast.error("Erro ao editar o produto");
    }
  }

  return (
    <AuthTemplate>
      <form onSubmit={handleSubmit(editProduct)} className="space-y-4">
        <h1 className="text-[25px] mb-4">Editar produto</h1>

        <div className="flex gap-2">
          <input
            {...register("name")}
            className="rounded-md h-[40px] p-2 w-full border-2"
            placeholder="Nome"
          />
          <input
            {...register("manufacturer")}
            className="rounded-md h-[40px] p-2 w-full border-2"
            placeholder="Fabricante"
          />
        </div>

        <div className="flex gap-2">
          <div className="flex-1">
            <AutoCompleteSelect
              name="category"
              control={control}
              options={categoryOptions}
              placeholder="Selecione a categoria"
            />
            {errors.category && (
              <span className="text-red-700">{errors.category.message}</span>
            )}
          </div>

          <div className="flex-1">
            <Controller
              name="price"
              control={control}
              render={({ field }) => (
                <NumericFormat
                  thousandSeparator="."
                  decimalSeparator=","
                  prefix="R$ "
                  decimalScale={2}
                  fixedDecimalScale
                  allowNegative={false}
                  className="rounded-md h-[40px] p-2 w-full border-2"
                  value={field.value}
                  onValueChange={(values) =>
                    field.onChange(values.floatValue)
                  }
                />
              )}
            />
            {errors.price && (
              <span className="text-red-700">{errors.price.message}</span>
            )}
          </div>
        </div>

        <div className="flex gap-2">
          <input
            {...register("url1")}
            className="rounded-md h-[40px] p-2 w-full border-2"
            placeholder="URL 1"
          />
          <input
            {...register("url2")}
            className="rounded-md h-[40px] p-2 w-full border-2"
            placeholder="URL 2"
          />
        </div>

        <Controller
          name="description"
          control={control}
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

        <div className="flex justify-end gap-4 mt-6">
          <button
            type="button"
            className="bg-white text-primary border border-primary px-8 py-2 rounded-lg"
            onClick={() => navigate(-1)}
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