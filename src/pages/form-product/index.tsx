import AuthTemplate from "../../templates/auth-template";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, Controller } from "react-hook-form";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import type { FormProduct } from "./types";
import { saveApiProduct } from "./services";
import { useAuthSessionStore } from "../../hooks/use-auth-session";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { NumericFormat } from "react-number-format";
import AutoCompleteSelect from "../../components/auto-complete/";

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

export default function FormProduct() {
  const navigate = useNavigate();
  const { token } = useAuthSessionStore();

  const categoryOptions = [
    { label: "Jogos", value: "jogos" },
    { label: "Roupas", value: "roupas" },
    { label: "Veículos", value: "veiculos" },
    { label: "Ferramentas", value: "ferramentas" },
    { label: "Comidas", value: "comidas" },
    { label: "Presentes", value: "presentes" },
    { label: "Outros", value: "outros" },
  ];

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormProduct>({
    resolver: yupResolver(schemaValidation),
    defaultValues: {
      category: "",
      price: undefined,
      description: "",
    },
  });

  async function saveProduct(values: FormProduct) {
    try {
      console.log("Produto:", values);

      await saveApiProduct(values, token);

      toast.success("Produto cadastrado com sucesso!");
      navigate("/my-products");
    } catch (error) {
      toast.error("Erro ao cadastrar o produto");
    }
  }

  return (
    <AuthTemplate>
      <form onSubmit={handleSubmit(saveProduct)} className="space-y-4">

        <h1 className="text-[25px] mb-4">Novo produto</h1>

        <div className="flex gap-2">
          <div className="flex-1">
            <input
              {...register("name")}
              className="rounded-md h-[40px] p-2 w-full border-2"
              placeholder="Digite o nome"
            />
            {errors.name && (
              <span className="text-red-700">{errors.name.message}</span>
            )}
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
                  placeholder="Digite o preço"
                  className="rounded-md h-[40px] p-2 w-full border-2"
                  value={field.value ?? ""}
                  onValueChange={(values) => {
                    field.onChange(values.floatValue);
                  }}
                />
              )}
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
            {errors.url1 && (
              <span className="text-red-700">{errors.url1.message}</span>
            )}
          </div>

          <div className="flex-1">
            <input
              {...register("url2")}
              className="rounded-md h-[40px] p-2 w-full border-2"
              placeholder="Digite a segunda URL"
            />
            {errors.url2 && (
              <span className="text-red-700">{errors.url2.message}</span>
            )}
          </div>
        </div>

        <div className="mt-4">
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